import React, { useState, useEffect, useRef } from 'react';

interface LazyBlockProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  minHeight?: string | number;
  className?: string;
  renderMode?: 'idle' | 'viewport';
}

/**
 * LazyBlock: Defer heavy DOM tree rendering, calculation, and SVG elements
 * until the element approaches the viewport, optimizing initial page load,
 * Total Blocking Time (TBT), and DOM tree depth.
 */
export const LazyBlock: React.FC<LazyBlockProps> = ({
  children,
  fallback,
  rootMargin = '250px 0px 250px 0px',
  minHeight = '120px',
  className = '',
  renderMode = 'viewport',
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If requestIdleCallback is supported and idle mode selected
    if (renderMode === 'idle' && typeof window !== 'undefined') {
      const win = window as unknown as { 
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      if (typeof win.requestIdleCallback === 'function') {
        const handle = win.requestIdleCallback(() => setShouldRender(true), { timeout: 2500 });
        return () => {
          if (win.cancelIdleCallback) win.cancelIdleCallback(handle);
        };
      }
    }

    if (typeof IntersectionObserver === 'undefined') {
      setShouldRender(true);
      return;
    }

    const elem = containerRef.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && (entry.isIntersecting || entry.intersectionRatio > 0)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(elem);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, renderMode]);

  return (
    <div
      ref={containerRef}
      className={`lazy-content-block ${shouldRender ? 'is-loaded' : 'is-loading'} ${className}`}
      style={{
        minHeight: shouldRender ? undefined : minHeight,
        contentVisibility: 'auto',
        containIntrinsicSize: typeof minHeight === 'number' ? `auto ${minHeight}px` : `auto ${minHeight}`,
      }}
    >
      {shouldRender ? (
        children
      ) : (
        fallback || (
          <div
            className="w-full flex items-center justify-center p-8 text-zinc-600/40"
            style={{ minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight }}
            aria-hidden="true"
          >
            <div className="w-6 h-6 rounded-full border border-emerald-500/20 border-t-emerald-400 animate-spin opacity-40" />
          </div>
        )
      )}
    </div>
  );
};
