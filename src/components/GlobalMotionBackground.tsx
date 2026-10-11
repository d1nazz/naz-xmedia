/**
 * Site-wide premium digital motion backdrop.
 * Fixed layers only; pointer-events none. Motion uses transform/opacity.
 */
const GlobalMotionBackground = () => {
  return (
    <div
      className="gmb-root fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Layered charcoal / graphite base */}
      <div className="gmb-base absolute inset-0" />

      {/* Faint grid + slow breathe */}
      <div className="gmb-grid absolute inset-0" />

      {/* Drifting ambient orbs */}
      <div className="gmb-orb gmb-orb-a absolute rounded-full" />
      <div className="gmb-orb gmb-orb-b absolute rounded-full" />
      <div className="gmb-orb gmb-orb-c absolute rounded-full" />

      {/* Subtle horizontal signal lines (SVG, transform-only motion) */}
      <svg
        className="gmb-lines absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gmb-h1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.07)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.07)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="gmb-h2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsla(160, 25%, 35%, 0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <g className="gmb-line-group gmb-line-a">
          <line x1="0" y1="32%" x2="100%" y2="32%" stroke="url(#gmb-h1)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </g>
        <g className="gmb-line-group gmb-line-b">
          <line x1="0" y1="58%" x2="100%" y2="58%" stroke="url(#gmb-h2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </g>
        <g className="gmb-line-group gmb-line-c">
          <line x1="0" y1="78%" x2="100%" y2="78%" stroke="url(#gmb-h1)" strokeWidth="0.75" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>

      {/* Soft radial lift (readability) + edge vignette */}
      <div className="gmb-radial absolute inset-0" />
      <div className="gmb-vignette absolute inset-0" />
    </div>
  );
};

export default GlobalMotionBackground;
