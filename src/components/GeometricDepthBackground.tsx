import React, { useEffect, useRef } from 'react';

interface GeometricDepthBackgroundProps {
  variant: 'about' | 'solutions';
  className?: string;
}

export const GeometricDepthBackground: React.FC<GeometricDepthBackgroundProps> = ({
  variant,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elem1Ref = useRef<HTMLDivElement>(null);
  const elem2Ref = useRef<HTMLDivElement>(null);
  const elem3Ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isVisible = false;
    let animationFrameId: number | null = null;

    // IntersectionObserver to pause calculations when section is out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { rootMargin: '120px 0px 120px 0px' }
    );

    observer.observe(container);

    const updateParallax = () => {
      if (!isVisible || !container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from 0 (entering from bottom) to 1 (exiting at top)
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      // Center progress around 0 (-0.5 to +0.5)
      const centered = progress - 0.5;

      if (variant === 'about') {
        // Element 1: Concentric gyro rings (Top right)
        if (elem1Ref.current) {
          const y = centered * -110;
          const rot = centered * 55;
          elem1Ref.current.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg)`;
        }

        // Element 2: Isometric wireframe polyhedra (Mid-left)
        if (elem2Ref.current) {
          const y = centered * 90;
          const x = centered * -25;
          const rot = centered * -35;
          elem2Ref.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg)`;
        }

        // Element 3: Constellation node cluster (Bottom right)
        if (elem3Ref.current) {
          const y = centered * -80;
          const x = centered * 30;
          elem3Ref.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        }

        // Ambient glow subtle drift
        if (glowRef.current) {
          const y = centered * 60;
          glowRef.current.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
        }
      } else {
        // Variant: 'solutions'
        // Element 1: Hexagonal radar aperture (Top left)
        if (elem1Ref.current) {
          const y = centered * 105;
          const rot = centered * 48;
          elem1Ref.current.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg)`;
        }

        // Element 2: Multi-layer isometric rhomboid grid (Mid-right)
        if (elem2Ref.current) {
          const y = centered * -95;
          const x = centered * 35;
          const rot = centered * -20;
          elem2Ref.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(1)}deg)`;
        }

        // Element 3: Geometric telemetry crosshair & nodes (Bottom left)
        if (elem3Ref.current) {
          const y = centered * -70;
          const x = centered * -20;
          elem3Ref.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        }

        // Ambient glow subtle drift
        if (glowRef.current) {
          const y = centered * -50;
          glowRef.current.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
        }
      }
    };

    const onScroll = () => {
      if (animationFrameId !== null) return;
      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        updateParallax();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial call
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Ambient Gradient Glow Orb */}
      <div
        ref={glowRef}
        className={`absolute rounded-full filter blur-[100px] opacity-25 transition-transform duration-75 ease-out ${
          variant === 'about'
            ? 'w-[520px] h-[520px] -top-32 -right-32 bg-emerald-500/20'
            : 'w-[560px] h-[560px] top-1/4 -left-36 bg-emerald-400/15'
        }`}
      />

      {variant === 'about' ? (
        <>
          {/* Element 1: Concentric Orbital Gyro Rings (Top Right) */}
          <div
            ref={elem1Ref}
            className="absolute -top-16 -right-16 sm:right-6 lg:right-16 w-80 h-80 sm:w-96 sm:h-96 opacity-35 transition-transform duration-100 ease-out"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full text-emerald-400/40">
              {/* Outer Dashed Orbit */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 8"
                opacity="0.6"
              />
              {/* Middle Precision Ring */}
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="1 5"
                opacity="0.8"
              />
              {/* Core Solid Ring */}
              <circle
                cx="200"
                cy="200"
                r="95"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.5"
              />
              {/* Inner Pulsing Ring with Gradient Fill */}
              <circle
                cx="200"
                cy="200"
                r="50"
                fill="rgba(16, 185, 129, 0.03)"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.9"
              />
              {/* Crosshair Cardinal Marks */}
              <line x1="200" y1="10" x2="200" y2="30" stroke="currentColor" strokeWidth="1.5" />
              <line x1="200" y1="370" x2="200" y2="390" stroke="currentColor" strokeWidth="1.5" />
              <line x1="10" y1="200" x2="30" y2="200" stroke="currentColor" strokeWidth="1.5" />
              <line x1="370" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="1.5" />
              {/* Orbiting Tech Nodes */}
              <circle cx="200" cy="60" r="3" fill="#34d399" />
              <circle cx="340" cy="200" r="2.5" fill="#34d399" />
              <circle cx="95" cy="200" r="2.5" fill="#34d399" opacity="0.6" />
              <circle cx="200" cy="305" r="3" fill="#34d399" opacity="0.8" />
            </svg>
          </div>

          {/* Element 2: Isometric 3D Wireframe Cube & Frame (Mid Left) */}
          <div
            ref={elem2Ref}
            className="absolute top-1/3 -left-12 sm:left-4 lg:left-8 w-64 h-64 sm:w-72 sm:h-72 opacity-30 transition-transform duration-100 ease-out"
          >
            <svg viewBox="0 0 280 280" className="w-full h-full text-emerald-400/50">
              {/* Isometric Cube Faces */}
              {/* Top Face */}
              <polygon
                points="140,40 220,86 140,132 60,86"
                fill="rgba(16, 185, 129, 0.04)"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              {/* Left Face */}
              <polygon
                points="60,86 140,132 140,224 60,178"
                fill="rgba(16, 185, 129, 0.02)"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              {/* Right Face */}
              <polygon
                points="140,132 220,86 220,178 140,224"
                fill="rgba(16, 185, 129, 0.06)"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              {/* Inner Nested Wireframe Wire */}
              <line x1="140" y1="86" x2="140" y2="178" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <line x1="100" y1="109" x2="180" y2="155" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              {/* Vertex Nodes */}
              <circle cx="140" cy="40" r="3" fill="#34d399" />
              <circle cx="220" cy="86" r="3" fill="#34d399" />
              <circle cx="140" cy="132" r="4" fill="#10b981" />
              <circle cx="60" cy="86" r="3" fill="#34d399" />
              <circle cx="140" cy="224" r="3" fill="#34d399" />
              <circle cx="60" cy="178" r="2.5" fill="#34d399" opacity="0.6" />
              <circle cx="220" cy="178" r="2.5" fill="#34d399" opacity="0.6" />
            </svg>
          </div>

          {/* Element 3: Constellation Node Web (Bottom Right) */}
          <div
            ref={elem3Ref}
            className="absolute bottom-10 right-4 sm:right-16 lg:right-28 w-72 h-60 opacity-30 transition-transform duration-100 ease-out"
          >
            <svg viewBox="0 0 300 240" className="w-full h-full text-emerald-400/40">
              {/* Connecting Vector Lines */}
              <line x1="40" y1="60" x2="120" y2="40" stroke="currentColor" strokeWidth="1" />
              <line x1="120" y1="40" x2="200" y2="90" stroke="currentColor" strokeWidth="1" />
              <line x1="120" y1="40" x2="160" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="200" y1="90" x2="270" y2="70" stroke="currentColor" strokeWidth="1" />
              <line x1="200" y1="90" x2="230" y2="190" stroke="currentColor" strokeWidth="1" />
              <line x1="160" y1="160" x2="230" y2="190" stroke="currentColor" strokeWidth="1" />
              <line x1="160" y1="160" x2="80" y2="180" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="60" x2="80" y2="180" stroke="currentColor" strokeWidth="1" />
              {/* Ambient Nodes with Halos */}
              <circle cx="120" cy="40" r="4" fill="#34d399" />
              <circle cx="120" cy="40" r="8" fill="rgba(52, 211, 153, 0.15)" />
              <circle cx="200" cy="90" r="5" fill="#10b981" />
              <circle cx="200" cy="90" r="10" fill="rgba(16, 185, 129, 0.2)" />
              <circle cx="160" cy="160" r="4" fill="#34d399" />
              <circle cx="40" cy="60" r="3" fill="#a7f3d0" />
              <circle cx="270" cy="70" r="3" fill="#a7f3d0" />
              <circle cx="230" cy="190" r="3.5" fill="#34d399" />
              <circle cx="80" cy="180" r="3" fill="#a7f3d0" />
            </svg>
          </div>
        </>
      ) : (
        <>
          {/* Element 1: Hexagonal Radar Aperture (Top Left) */}
          <div
            ref={elem1Ref}
            className="absolute -top-12 -left-12 sm:left-4 lg:left-12 w-80 h-80 sm:w-96 sm:h-96 opacity-35 transition-transform duration-100 ease-out"
          >
            <svg viewBox="0 0 360 360" className="w-full h-full text-emerald-400/45">
              {/* Outer Hexagon */}
              <polygon
                points="180,30 310,105 310,255 180,330 50,255 50,105"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="8 6"
                opacity="0.7"
              />
              {/* Inner Concentric Hexagon */}
              <polygon
                points="180,75 270,127 270,233 180,285 90,233 90,127"
                fill="rgba(16, 185, 129, 0.03)"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.8"
              />
              {/* Core Hexagonal Ring */}
              <polygon
                points="180,120 230,149 230,211 180,240 130,211 130,149"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.9"
              />
              {/* Center Tech Aperture Circle */}
              <circle cx="180" cy="180" r="28" fill="rgba(16, 185, 129, 0.08)" stroke="currentColor" strokeWidth="1" />
              <circle cx="180" cy="180" r="6" fill="#34d399" />
              {/* Radial Spokes */}
              <line x1="180" y1="30" x2="180" y2="75" stroke="currentColor" strokeWidth="1.2" />
              <line x1="310" y1="105" x2="270" y2="127" stroke="currentColor" strokeWidth="1.2" />
              <line x1="310" y1="255" x2="270" y2="233" stroke="currentColor" strokeWidth="1.2" />
              <line x1="180" y1="330" x2="180" y2="285" stroke="currentColor" strokeWidth="1.2" />
              <line x1="50" y1="255" x2="90" y2="233" stroke="currentColor" strokeWidth="1.2" />
              <line x1="50" y1="105" x2="90" y2="127" stroke="currentColor" strokeWidth="1.2" />
              {/* Vertex Accent Blips */}
              <circle cx="310" cy="105" r="3" fill="#34d399" />
              <circle cx="180" cy="330" r="3" fill="#34d399" />
              <circle cx="50" cy="105" r="3" fill="#34d399" />
            </svg>
          </div>

          {/* Element 2: Multi-layer Isometric Architectural Planes (Mid Right) */}
          <div
            ref={elem2Ref}
            className="absolute top-1/4 -right-10 sm:right-6 lg:right-16 w-80 h-80 sm:w-96 sm:h-96 opacity-30 transition-transform duration-100 ease-out"
          >
            <svg viewBox="0 0 340 340" className="w-full h-full text-emerald-400/45">
              {/* Layer 1 (Base Platform Plane) */}
              <polygon
                points="170,180 300,240 170,300 40,240"
                fill="rgba(16, 185, 129, 0.03)"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line x1="170" y1="180" x2="170" y2="300" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
              <line x1="40" y1="240" x2="300" y2="240" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

              {/* Layer 2 (Floating Middle Plane) */}
              <polygon
                points="170,100 280,150 170,200 60,150"
                fill="rgba(16, 185, 129, 0.05)"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="6 4"
              />

              {/* Layer 3 (Top AI Microservice Node Plane) */}
              <polygon
                points="170,20 250,60 170,100 90,60"
                fill="rgba(16, 185, 129, 0.08)"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Vertical Connectivity Rays */}
              <line x1="170" y1="20" x2="170" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
              <line x1="90" y1="60" x2="60" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
              <line x1="250" y1="60" x2="280" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />

              {/* Telemetry Dots */}
              <circle cx="170" cy="20" r="4" fill="#34d399" />
              <circle cx="250" cy="60" r="3" fill="#10b981" />
              <circle cx="90" cy="60" r="3" fill="#10b981" />
              <circle cx="170" cy="100" r="3.5" fill="#34d399" />
              <circle cx="300" cy="240" r="3" fill="#34d399" opacity="0.7" />
              <circle cx="40" cy="240" r="3" fill="#34d399" opacity="0.7" />
            </svg>
          </div>

          {/* Element 3: Coordinate Crosshair & IoT Telemetry Grid (Bottom Left) */}
          <div
            ref={elem3Ref}
            className="absolute bottom-8 left-6 sm:left-14 lg:left-24 w-72 h-56 opacity-30 transition-transform duration-100 ease-out"
          >
            <svg viewBox="0 0 280 200" className="w-full h-full text-emerald-400/40">
              {/* Cartesian Crosshairs */}
              <g stroke="currentColor" strokeWidth="1">
                <line x1="30" y1="30" x2="50" y2="30" />
                <line x1="40" y1="20" x2="40" y2="40" />

                <line x1="210" y1="40" x2="230" y2="40" />
                <line x1="220" y1="30" x2="220" y2="50" />

                <line x1="80" y1="150" x2="100" y2="150" />
                <line x1="90" y1="140" x2="90" y2="160" />

                <line x1="230" y1="160" x2="250" y2="160" />
                <line x1="240" y1="150" x2="240" y2="170" />
              </g>

              {/* Data Grid Connecting Hairlines */}
              <line x1="40" y1="30" x2="220" y2="40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="40" y1="30" x2="90" y2="150" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="220" y1="40" x2="240" y2="160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="90" y1="150" x2="240" y2="160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />

              {/* Telemetry Coordinate Readouts */}
              <text x="56" y="28" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.7">
                AI.NODE [01]
              </text>
              <text x="175" y="62" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.7">
                LAT: 10.76°N
              </text>
              <text x="105" y="166" fill="currentColor" fontSize="8" fontFamily="monospace" opacity="0.7">
                SYNC: 99.98%
              </text>

              {/* Active Nodes */}
              <circle cx="40" cy="30" r="3" fill="#34d399" />
              <circle cx="220" cy="40" r="3" fill="#34d399" />
              <circle cx="90" cy="150" r="3" fill="#34d399" />
              <circle cx="240" cy="160" r="3" fill="#34d399" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};
