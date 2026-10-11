import React from 'react';

interface SectionDividerProps {
  className?: string;
  glow?: boolean;
}

/**
 * Subtle, semi-transparent horizontal gradient divider
 * Delineates content blocks smoothly with an emerald-tinted center fade
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = '',
  glow = true 
}) => {
  return (
    <div 
      className={`relative w-full flex items-center justify-center overflow-hidden py-1 ${className}`} 
      aria-hidden="true"
    >
      {/* Soft ambient aura for depth */}
      {glow && (
        <div 
          className="absolute h-8 w-full max-w-2xl -top-4 bg-gradient-to-r from-transparent via-emerald-500/[0.07] to-transparent blur-lg pointer-events-none" 
        />
      )}

      {/* Main horizontal gradient rule aligned with container padding */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
        <div className="relative h-[1px] w-full">
          {/* Outer subtle fade: transparent -> muted zinc -> transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
          
          {/* Emerald accent gradient: transparent -> semi-transparent emerald -> transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

          {/* Core micro-highlight for crisp visual definition */}
          <div className="absolute inset-x-1/4 inset-y-0 bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent" />
        </div>
      </div>
    </div>
  );
};
