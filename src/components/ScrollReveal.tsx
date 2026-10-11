import React, { useEffect, useRef, useState, useMemo } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  distance?: number; // px
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  as?: React.ElementType;
  id?: string;
  style?: React.CSSProperties;
  blur?: boolean | number; // px blur for subtle, high-end blur-in transition
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 800,
  distance = 28,
  direction = 'up',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  as: Component = 'div',
  id,
  style = {},
  blur = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const blurAmount = useMemo(() => {
    if (typeof blur === 'number') return Math.max(0, blur);
    if (blur === true) return 10;
    return 0;
  }, [blur]);

  useEffect(() => {
    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Compute transform based on direction & distance
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'none';
    }
  };

  const dynamicStyle = useMemo<React.CSSProperties>(() => {
    const hasBlur = blurAmount > 0;
    return {
      ...style,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : getInitialTransform(),
      filter: hasBlur ? (isVisible ? 'blur(0px)' : `blur(${blurAmount}px)`) : undefined,
      transitionProperty: hasBlur ? 'opacity, transform, filter' : 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`,
      willChange: isVisible ? 'auto' : (hasBlur ? 'opacity, transform, filter' : 'opacity, transform'),
    };
  }, [isVisible, duration, delay, direction, distance, blurAmount, style]);

  return (
    <Component
      ref={elementRef}
      id={id}
      className={`scroll-reveal ${isVisible ? 'is-revealed' : 'is-hidden'} ${blurAmount > 0 ? 'scroll-reveal-blur' : ''} ${className}`}
      style={dynamicStyle}
    >
      {children}
    </Component>
  );
};

// Reusable hook for elements that prefer direct ref binding
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
} = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
