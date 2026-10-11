/**
 * Hero-only cinematic atmosphere: drifting mesh, signal lines, soft depth.
 * GPU-friendly: transform + opacity. Complements GlobalMotionBackground + AnimatedBackground.
 */
const HeroAtmosphere = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Drifting light meshes */}
      <div className="naz-hero-atmo-1 absolute -top-1/4 left-1/4 w-[min(100vw,900px)] h-[min(100vw,900px)] rounded-full opacity-50 blur-[100px]" />
      <div className="naz-hero-atmo-2 absolute bottom-0 right-0 w-[min(90vw,700px)] h-[min(90vw,700px)] rounded-full opacity-40 blur-[90px]" />
      <div className="naz-hero-atmo-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[1400px] h-[70%] opacity-30 blur-[60px]" />

      <div className="naz-hero-atmo-scan absolute inset-0 opacity-[0.35]" />

      <svg className="naz-hero-atmo-svg absolute inset-0 w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hero-sig" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(var(--naz-green) / 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <g className="naz-hero-atmo-line-a">
          <line x1="0" y1="38%" x2="100%" y2="38%" stroke="url(#hero-sig)" strokeWidth="1" />
        </g>
        <g className="naz-hero-atmo-line-b">
          <line x1="0" y1="62%" x2="100%" y2="62%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

export default HeroAtmosphere;
