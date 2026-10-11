import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FloatingScrollIndicatorProps {
  label: string;
  targetId?: string;
  className?: string;
  onNavigate?: () => void;
}

/**
 * FloatingScrollIndicator
 * Subtle, animated floating scroll cue at the bottom of the hero section.
 * - Gently pulses and floats up/down using refined CSS keyframes.
 * - Glow halo effect with emerald accents matching GreenSoft's aesthetic.
 * - Progressively dims and fades out completely as soon as the user starts scrolling (> 20px).
 * - Clicking smoothly scrolls to the target section (default: 'about').
 */
export const FloatingScrollIndicator: React.FC<FloatingScrollIndicatorProps> = ({
  label,
  targetId = 'about',
  className = '',
  onNavigate,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setScrollY(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute smooth opacity and transform based on scroll:
  // Starts at opacity 1 at scrollY = 0, gradually fades to 0 by scrollY = 60px.
  // Beyond 60px, it is completely hidden and non-interactive (pointer-events: none).
  const fadeThreshold = 60;
  const opacity = Math.max(0, 1 - scrollY / fadeThreshold);
  const translateY = Math.min(24, scrollY * 0.4);
  const isHidden = scrollY >= fadeThreshold;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate();
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isHidden) {
    return null;
  }

  return (
    <div
      style={{
        opacity: opacity,
        transform: `translate3d(-50%, ${translateY}px, 0)`,
        pointerEvents: opacity < 0.1 ? 'none' : 'auto',
      }}
      className={`fixed sm:absolute bottom-6 sm:bottom-7 left-1/2 z-30 transition-opacity duration-300 ease-out select-none ${className}`}
      aria-hidden={isHidden}
    >
      <button
        onClick={handleClick}
        className="group relative flex flex-col items-center gap-1.5 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label={label}
      >
        {/* Subtle Ambient Pulse Ring & Glow Backdrop */}
        <div 
          className="absolute inset-0 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 border border-emerald-500/15 group-hover:border-emerald-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.08)] group-hover:shadow-[0_0_28px_rgba(16,185,129,0.22)] transition-all duration-500 pointer-events-none"
        />

        {/* Outer gentle breathing pulse ring */}
        <div 
          className="absolute -inset-1 rounded-full border border-emerald-500/20 pointer-events-none animate-scroll-pulse"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          {/* Label text */}
          <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-zinc-400 group-hover:text-emerald-300 transition-colors duration-300 drop-shadow-sm">
            {label}
          </span>

          {/* Mouse / Pill Pill Capsule Icon with Animated Pip */}
          <div className="relative w-4 h-7 rounded-full border border-zinc-500/60 group-hover:border-emerald-400/80 flex items-start justify-center pt-1 transition-colors duration-300 bg-black/20">
            <span className="w-1 h-1.5 rounded-full bg-emerald-400 animate-scroll-pip shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          </div>

          {/* Micro Chevron bouncing below */}
          <ChevronDown 
            className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-all duration-300 animate-scroll-float -mt-0.5" 
          />
        </div>
      </button>
    </div>
  );
};
