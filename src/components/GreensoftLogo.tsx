import React from 'react';

interface GreensoftLogoProps {
  variant?: 'full' | 'emblem' | 'compact';
  size?: number;
  className?: string;
  theme?: 'dark' | 'light';
}

/**
 * Recreates the official Greensoft vector logo:
 * - Rounded diamond emblem with lush green gradient
 * - Neural/circuit network tree with 7 node endpoints
 * - "GREENSOFT" typographic mark
 * - "Make It Different" signature slogan
 */
export const GreensoftLogo: React.FC<GreensoftLogoProps> = ({
  variant = 'full',
  size = 48,
  className = '',
  theme = 'dark',
}) => {
  // Unique gradient ID to prevent SVG clashes
  const gradId = 'gs-leaf-grad';

  const emblem = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Greensoft Logo Mark"
    >
      <defs>
        <linearGradient id={gradId} x1="18" y1="18" x2="142" y2="142" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#76b82a" />
          <stop offset="45%" stopColor="#43a047" />
          <stop offset="100%" stopColor="#1b5e20" />
        </linearGradient>
        <filter id="gs-glow" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#2e7d32" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Rounded Diamond Badge (Rotated Squircle) */}
      <rect
        x="80"
        y="12"
        width="96"
        height="96"
        rx="26"
        transform="rotate(45 80 12)"
        fill={`url(#${gradId})`}
        filter="url(#gs-glow)"
      />

      {/* Circuit / Neural Tree Trunk */}
      <path
        d="M80 122 V46"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Top Node */}
      <circle cx="80" cy="42" r="7" fill="#ffffff" stroke="#43a047" strokeWidth="2.5" />

      {/* Branch Pair 1 (Upper) */}
      <path
        d="M80 66 L54 50"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="54" cy="50" r="6.5" fill="#ffffff" stroke="#43a047" strokeWidth="2.5" />

      <path
        d="M80 66 L106 50"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="106" cy="50" r="6.5" fill="#ffffff" stroke="#43a047" strokeWidth="2.5" />

      {/* Branch Pair 2 (Middle) */}
      <path
        d="M80 84 L44 68"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="44" cy="68" r="6.5" fill="#ffffff" stroke="#43a047" strokeWidth="2.5" />

      <path
        d="M80 84 L116 68"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="116" cy="68" r="6.5" fill="#ffffff" stroke="#43a047" strokeWidth="2.5" />

      {/* Branch Pair 3 (Lower) */}
      <path
        d="M80 102 L38 88"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="38" cy="88" r="6.5" fill="#ffffff" stroke="#43a047" strokeWidth="2.5" />

      <path
        d="M80 102 L122 88"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="122" cy="88" r="6.5" fill="#ffffff" stroke="#43a047" strokeWidth="2.5" />
    </svg>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex items-center ${className}`}>{emblem}</div>;
  }

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {emblem}
      {variant === 'full' && (
        <div className="mt-3 flex flex-col items-center">
          <div className="flex items-center font-extrabold tracking-[0.22em] text-2xl uppercase leading-none font-sans">
            <span className="text-[#388e3c]">GREEN</span>
            <span className={theme === 'dark' ? 'text-white' : 'text-[#334155]'}>SOFT</span>
          </div>
          <span
            className="text-sm font-semibold tracking-wide italic mt-1.5 opacity-90"
            style={{
              fontFamily: "'Caveat', cursive, sans-serif",
              fontSize: '18px',
              color: theme === 'dark' ? '#cbd5e1' : '#475569',
            }}
          >
            Make It Different
          </span>
        </div>
      )}
      {variant === 'compact' && (
        <div className="flex items-center gap-1.5 mt-1 font-bold tracking-[0.16em] text-sm uppercase">
          <span className="text-[#388e3c]">GREEN</span>
          <span className={theme === 'dark' ? 'text-white' : 'text-[#334155]'}>SOFT</span>
        </div>
      )}
    </div>
  );
};
