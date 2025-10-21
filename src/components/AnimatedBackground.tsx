const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark foundation */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black" />

      {/* Circuit-like grid system - very subtle */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            backgroundPosition: '0 0, 0 0, 0 0, 0 0',
          }}
        />
      </div>

      {/* Hexagonal tech pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Soft gradient orbs for depth */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div
          className="absolute top-1/4 left-1/3 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(30, 35, 45, 0.6) 0%, transparent 65%)',
            animation: 'drift-slow 28s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(15, 20, 30, 0.7) 0%, transparent 65%)',
            animation: 'drift-slower 35s ease-in-out infinite',
            animationDelay: '10s',
          }}
        />
      </div>

      {/* Angular line system - tech aesthetic */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
        <defs>
          <linearGradient id="tech-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.15)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="tech-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Horizontal scanning lines */}
        <line
          x1="0"
          y1="25%"
          x2="100%"
          y2="25%"
          stroke="url(#tech-gradient-1)"
          strokeWidth="1.5"
          className="animate-scan-line-1"
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#tech-gradient-1)"
          strokeWidth="1"
          className="animate-scan-line-2"
        />
        <line
          x1="0"
          y1="75%"
          x2="100%"
          y2="75%"
          stroke="url(#tech-gradient-1)"
          strokeWidth="1.5"
          className="animate-scan-line-3"
        />

        {/* Vertical accent lines */}
        <line
          x1="20%"
          y1="0"
          x2="20%"
          y2="100%"
          stroke="url(#tech-gradient-2)"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="80%"
          y1="0"
          x2="80%"
          y2="100%"
          stroke="url(#tech-gradient-2)"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Angular corner accents */}
        <path d="M 0 0 L 150 0 L 150 2 L 2 2 L 2 150 L 0 150 Z" fill="rgba(255, 255, 255, 0.03)" />
        <path
          d="M 100% 0 L calc(100% - 150px) 0 L calc(100% - 150px) 2 L calc(100% - 2px) 2 L calc(100% - 2px) 150 L 100% 150 Z"
          fill="rgba(255, 255, 255, 0.03)"
        />
      </svg>

      {/* Floating geometric shapes - engineered feel */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="absolute top-1/3 right-1/4 w-[200px] h-[200px] border border-white/20"
          style={{
            transform: 'rotate(45deg)',
            animation: 'float-geometric 25s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-[150px] h-[150px]"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            animation: 'float-geometric-reverse 30s ease-in-out infinite',
          }}
        />
      </div>

      {/* Subtle data stream effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              right: 0,
              background:
                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2) 50%, transparent)',
              animation: `data-stream ${15 + i * 3}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Layered depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Center focus gradient - keeps text area clear */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />

      <style>{`
        @keyframes drift-slow {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.12; }
          33% { transform: translate(50px, -50px) scale(1.2); opacity: 0.18; }
          66% { transform: translate(-40px, 40px) scale(0.9); opacity: 0.1; }
        }
        
        @keyframes drift-slower {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.12; }
          33% { transform: translate(-60px, 50px) scale(1.15); opacity: 0.15; }
          66% { transform: translate(45px, -45px) scale(0.95); opacity: 0.08; }
        }
        
        @keyframes scan-line-1 {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        
        @keyframes scan-line-2 {
          0% { transform: translateY(-150px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(150px); opacity: 0; }
        }
        
        @keyframes scan-line-3 {
          0% { transform: translateY(-200px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }
        
        .animate-scan-line-1 {
          animation: scan-line-1 20s ease-in-out infinite;
        }
        
        .animate-scan-line-2 {
          animation: scan-line-2 25s ease-in-out infinite;
          animation-delay: 5s;
        }
        
        .animate-scan-line-3 {
          animation: scan-line-3 22s ease-in-out infinite;
          animation-delay: 10s;
        }
        
        @keyframes float-geometric {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          50% { transform: rotate(55deg) translate(20px, -20px); }
        }
        
        @keyframes float-geometric-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 15px) scale(1.1); }
        }
        
        @keyframes data-stream {
          0% { transform: translateX(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
