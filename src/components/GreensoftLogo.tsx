import React, { useId } from 'react';

interface GreensoftLogoProps {
  variant?: 'full' | 'emblem' | 'compact';
  size?: number;
  className?: string;
  theme?: 'dark' | 'light';
}

/** Official Greensoft brand colours (sampled from the master logo). */
const BRAND_GREEN = '#489545';
const BRAND_GREEN_LIGHT = '#a1c84d';
const BRAND_GREEN_MID = '#539c44';
const BRAND_GREY = '#414141';

const WORDMARK_FONT = "'Montserrat', 'Manrope', sans-serif";
const SLOGAN_FONT = "'Herr Von Muellerhoff', 'Caveat', cursive";

interface GreensoftWordmarkProps {
  /** Font size of "GREENSOFT" in px; the slogan scales with it. */
  fontSize?: number;
  /** Show the "Make It Different" slogan under the name. */
  slogan?: boolean;
  align?: 'start' | 'center';
  theme?: 'dark' | 'light';
  className?: string;
}

/** "GREENSOFT" wordmark with optional "Make It Different" slogan. */
export const GreensoftWordmark: React.FC<GreensoftWordmarkProps> = ({
  fontSize = 24,
  slogan = true,
  align = 'start',
  theme = 'dark',
  className = '',
}) => (
  <div
    className={`flex flex-col leading-none select-none ${align === 'center' ? 'items-center' : 'items-start'} ${className}`}
  >
    <div
      className="flex items-center font-semibold uppercase leading-none whitespace-nowrap"
      style={{ fontFamily: WORDMARK_FONT, fontSize, letterSpacing: '0.1em' }}
    >
      <span style={{ color: BRAND_GREEN }}>GREEN</span>
      <span style={{ color: theme === 'dark' ? '#ffffff' : BRAND_GREY }}>SOFT</span>
    </div>
    {slogan && (
      <span
        className="leading-none whitespace-nowrap"
        style={{
          fontFamily: SLOGAN_FONT,
          fontSize: fontSize * 0.72,
          letterSpacing: '0.3em',
          marginTop: fontSize * 0.1,
          color: theme === 'dark' ? '#cbd5e1' : BRAND_GREY,
        }}
      >
        Make It Different
      </span>
    )}
  </div>
);

/** Ring nodes of the circuit tree, in the 128×128 emblem coordinate space. */
const NODES = [
  { cx: 64, cy: 36 },
  { cx: 48.5, cy: 56 },
  { cx: 79.5, cy: 56 },
  { cx: 32.5, cy: 72 },
  { cx: 95.5, cy: 72 },
];

/** 45° branches running from a side node down into the trunk. */
const BRANCHES = [
  'M54.5 62 L64 71.5',
  'M73.5 62 L64 71.5',
  'M38.5 78 L64 103.5',
  'M89.5 78 L64 103.5',
];

/**
 * Recreates the official Greensoft vector logo:
 * - Rounded diamond emblem with a vertical yellow-green → green gradient
 * - White circuit tree: trunk running to the bottom tip, four 45° branches
 *   and five hollow ring nodes
 * - "GREENSOFT" wordmark (GREEN in brand green, SOFT in charcoal)
 * - "Make It Different" handwritten slogan
 */
export const GreensoftLogo: React.FC<GreensoftLogoProps> = ({
  variant = 'full',
  size = 48,
  className = '',
  theme = 'dark',
}) => {
  // Unique IDs so several logos on one page don't share <defs>
  const uid = useId().replace(/:/g, '');
  const gradId = `gs-grad-${uid}`;
  const clipId = `gs-clip-${uid}`;

  const emblem = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      role="img"
      aria-label="Greensoft Logo Mark"
    >
      <defs>
        <linearGradient id={gradId} x1="64" y1="1" x2="64" y2="127" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={BRAND_GREEN_LIGHT} />
          <stop offset="58%" stopColor={BRAND_GREEN_MID} />
          <stop offset="100%" stopColor={BRAND_GREEN} />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x="11.5" y="11.5" width="105" height="105" rx="26" transform="rotate(45 64 64)" />
        </clipPath>
      </defs>

      {/* Rounded diamond badge (unrotated fill + clip keeps the gradient vertical) */}
      <rect width="128" height="128" fill={`url(#${gradId})`} clipPath={`url(#${clipId})`} />

      <g clipPath={`url(#${clipId})`} stroke="#ffffff" strokeLinecap="round">
        {/* Trunk – runs out through the bottom tip of the diamond */}
        <path d="M64 44.5 V140" strokeWidth="4" strokeLinecap="butt" />

        {/* Branches */}
        {BRANCHES.map((d) => (
          <path key={d} d={d} strokeWidth="4" />
        ))}

        {/* Hollow ring nodes */}
        {NODES.map(({ cx, cy }) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" strokeWidth="5" fill="none" />
        ))}
      </g>
    </svg>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex items-center ${className}`}>{emblem}</div>;
  }

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {emblem}
      {variant === 'full' && (
        <GreensoftWordmark fontSize={Math.round(size * 0.3)} align="center" theme={theme} className="mt-3" />
      )}
      {variant === 'compact' && (
        <GreensoftWordmark fontSize={14} slogan={false} align="center" theme={theme} className="mt-1" />
      )}
    </div>
  );
};
