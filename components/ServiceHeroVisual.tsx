
import React from 'react';

const ServiceHeroVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 h-full w-full opacity-40 lg:opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-fade-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="1" />
            <stop offset="30%" stopColor="#0F172A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
          </linearGradient>
          <mask id="hero-mask">
            <rect width="1000" height="600" fill="url(#hero-fade-grad)" transform="rotate(180 500 300)" />
          </mask>
        </defs>
        <g mask="url(#hero-mask)">
          {/* Waveforms */}
          <path d="M400 450C550 400 700 500 850 450S1150 400 1300 450" stroke="#1E293B" strokeWidth="0.5" />
          <path d="M400 470C550 420 700 520 850 470S1150 420 1300 470" stroke="#1E293B" strokeWidth="0.5" />
          <path d="M400 430C550 380 700 480 850 430S1150 380 1300 430" stroke="#1E293B" strokeWidth="0.5" />
          
          {/* Routing Network */}
          <g stroke="#334155" strokeWidth="1">
            <circle cx="600" cy="150" r="2" fill="#334155" />
            <circle cx="750" cy="200" r="2" fill="#334155" />
            <circle cx="850" cy="120" r="2" fill="#334155" />
            <circle cx="680" cy="300" r="2" fill="#334155" />
            <circle cx="920" cy="280" r="2" fill="#334155" />
            
            <line x1="600" y1="150" x2="750" y2="200" />
            <line x1="750" y1="200" x2="680" y2="300" />
            <line x1="750" y1="200" x2="850" y2="120" />
            <line x1="850" y1="120" x2="920" y2="280" />
            <line x1="680" y1="300" x2="920" y2="280" />
          </g>

          {/* Accent Route */}
          <g stroke="#FF6A00" strokeWidth="1.5">
            <path d="M500 250L600 150L750 200L920 280" strokeDasharray="4 4" className="animate-dash" />
            <circle cx="500" cy="250" r="3" fill="#FF6A00" />
            <circle cx="600" cy="150" r="3" fill="#FF6A00" />
            <circle cx="750" cy="200" r="3" fill="#FF6A00" />
            <circle cx="920" cy="280" r="3" fill="#FF6A00" />
          </g>
        </g>
        <style>{`
          @keyframes dash {
            to { stroke-dashoffset: -20; }
          }
          .animate-dash {
            animation: dash 2s linear infinite;
          }
        `}</style>
      </svg>
    </div>
  );
};

export default ServiceHeroVisual;
