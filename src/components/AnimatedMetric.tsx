import React, { useEffect, useRef, useState } from 'react';

interface AnimatedMetricProps {
  value: string; // e.g. "7+", "24/7", "16+", "99.9%"
  duration?: number; // duration in ms
  className?: string;
}

/**
 * AnimatedMetric component:
 * Implements a silky smooth count-up animation when in view or when scrolling.
 * Supports numbers with suffixes like "7+", ratios like "24/7", or decimals.
 * Uses requestAnimationFrame with cubic ease-out easing curve for a premium feel.
 */
export const AnimatedMetric: React.FC<AnimatedMetricProps> = ({
  value,
  duration = 1600,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // Initial state before animation triggers:
    // For "7+" -> "0+", for "24/7" -> "0/7", for standard numbers -> "0"
    return formatZeroValue(value);
  });

  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    const startCountAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();
      const { targetNum, prefix, suffix, isRatio, ratioSecondPart } = parseMetric(value);

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic: 1 - Math.pow(1 - progress, 3)
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.round(targetNum * ease);

        if (isRatio) {
          setDisplayValue(`${prefix}${currentCount}/${ratioSecondPart}${suffix}`);
        } else {
          setDisplayValue(`${prefix}${currentCount}${suffix}`);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value); // guarantee exact final string
        }
      };

      requestAnimationFrame(animate);
    };

    // Trigger on scroll or when intersecting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    // Also trigger if user scrolls down slightly while hero is still mounted
    const handleScroll = () => {
      if (window.scrollY > 20) {
        startCountAnimation();
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Fallback: trigger after 350ms initial load if user stays at top of page
    const timer = setTimeout(() => {
      startCountAnimation();
    }, 400);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

// Helper: parse string into numbers and decorations
function parseMetric(val: string) {
  // Handle ratio cases like "24/7"
  if (val.includes('/')) {
    const parts = val.split('/');
    const firstNum = parseInt(parts[0], 10) || 0;
    return {
      targetNum: firstNum,
      prefix: '',
      suffix: '',
      isRatio: true,
      ratioSecondPart: parts[1] || '7',
    };
  }

  // General regex matching prefix, number, suffix
  const match = val.match(/^([^\d]*)(\d+)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || '',
      targetNum: parseInt(match[2], 10) || 0,
      suffix: match[3] || '',
      isRatio: false,
      ratioSecondPart: '',
    };
  }

  return {
    prefix: '',
    targetNum: parseInt(val, 10) || 0,
    suffix: '',
    isRatio: false,
    ratioSecondPart: '',
  };
}

function formatZeroValue(val: string): string {
  if (val.includes('/')) {
    const parts = val.split('/');
    return `0/${parts[1] || '7'}`;
  }
  const match = val.match(/^([^\d]*)(\d+)(.*)$/);
  if (match) {
    return `${match[1] || ''}0${match[3] || ''}`;
  }
  return '0';
}
