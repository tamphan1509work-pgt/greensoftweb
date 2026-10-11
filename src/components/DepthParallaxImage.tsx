import React, { useEffect, useRef } from 'react';

interface DepthParallaxImageProps {
  src: string;
  alt: string;
  clientBadge?: string;
  systemTag?: string;
  speed?: number; // Parallax rate relative to container scroll (e.g. 0.15 = moves 15% slower/faster)
  className?: string;
  containerClassName?: string;
}

/**
 * DepthParallaxImage
 * Implements a high-end subtle depth-parallax effect for images within section showcases:
 * - Uses requestAnimationFrame with IntersectionObserver viewport tracking.
 * - Image moves slightly along Y and scale coordinates at a different rate than the surrounding text,
 *   creating an authentic 3D spatial separation between the typography and the visual asset.
 * - Includes layered 3D tech accents: glowing depth border, holographic grid scrim, and status badge.
 * - Automatically falls back safely to static layout on `prefers-reduced-motion`.
 */
export const DepthParallaxImage: React.FC<DepthParallaxImageProps> = ({
  src,
  alt,
  clientBadge,
  systemTag,
  speed = 0.18,
  className = '',
  containerClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isVisible = false;
    let animationFrameId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { rootMargin: '100px 0px 100px 0px' }
    );

    observer.observe(container);

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        if (!isVisible || !container || !imageRef.current) return;

        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Progress from -1 (below viewport) to +1 (above viewport), centered at 0 when mid-screen
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const delta = (elementCenter - screenCenter) / screenCenter; // ~ -1 to +1

        // Parallax translation for the image (opposite direction to create depth)
        const translateY = delta * speed * 75; // e.g. -20px to +20px
        const scale = 1.08 + Math.abs(delta) * 0.02; // subtly tightens viewport presence

        imageRef.current.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;

        // Secondary parallax for the floating overlay scrim/grid
        if (overlayRef.current) {
          const overlayTranslateY = delta * (speed * 0.5) * 50;
          overlayRef.current.style.transform = `translate3d(0, ${overlayTranslateY.toFixed(2)}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial frame
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/90 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group select-none ${containerClassName}`}
    >
      {/* Visual Image Container with intentional overflow clip for parallax headroom */}
      <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-black/60">
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-[125%] -top-[12.5%] absolute inset-x-0 object-cover object-center will-change-transform transition-opacity duration-500 ease-out brightness-[0.92] contrast-[1.08] group-hover:brightness-100 ${className}`}
        />

        {/* Depth Scrim Overlays: Vignette & Matrix Tech Grid */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none will-change-transform bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" 
        />

        {/* Ambient Top Light Beam */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Subtle Tech Grid Accent Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]" 
        />
      </div>

      {/* Floating Spatial Badges attached to depth card */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
        {clientBadge && (
          <span className="text-[11px] font-semibold text-emerald-300 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {clientBadge}
          </span>
        )}
        {systemTag && (
          <span className="text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
            {systemTag}
          </span>
        )}
      </div>

      {/* Interactive Bottom Glass Bar */}
      <div className="relative z-10 px-4 py-3 bg-zinc-950/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
        <span className="truncate max-w-[260px] font-medium text-zinc-300 group-hover:text-white transition-colors">
          {alt}
        </span>
        <span className="text-[10px] font-mono text-emerald-400/90 font-semibold shrink-0">
          DEPLOYED ARCHITECTURE
        </span>
      </div>
    </div>
  );
};
