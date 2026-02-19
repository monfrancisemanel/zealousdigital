
import React from 'react';

interface HeroVisualOptionBProps {
  label: string;
  chips: string[];
  accent?: string;
}

const HeroVisualOptionB: React.FC<HeroVisualOptionBProps> = ({ label, chips, accent = "#FF6B00" }) => {
  return (
    <div className="hero-visual w-full bg-slate-950 border border-white/5 shadow-2xl relative flex flex-col justify-between p-6 lg:p-8 animate-in fade-in zoom-in duration-1000">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Label */}
      <div className="relative z-10">
        <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase block mb-1">
          System Node
        </span>
        <span className="text-xs font-bold tracking-widest text-white uppercase block">
          {label}
        </span>
      </div>

      {/* Thin-line Geometric SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none py-12">
        <svg viewBox="0 0 400 300" className="w-full h-full max-w-[320px] opacity-60">
          <g stroke="white" strokeWidth="0.5" fill="none">
            <path d="M50 150 L150 50 L250 150 L150 250 Z" strokeOpacity="0.2" />
            <circle cx="150" cy="50" r="2" fill="white" fillOpacity="0.3" />
            <circle cx="250" cy="150" r="2" fill="white" fillOpacity="0.3" />
            <circle cx="150" cy="250" r="2" fill="white" fillOpacity="0.3" />
            <circle cx="50" cy="150" r="2" fill="white" fillOpacity="0.3" />
            
            {/* Dynamic Connections */}
            <path 
              d="M50 150 Q150 150 150 50" 
              stroke={accent} 
              strokeWidth="1" 
              strokeDasharray="4 4"
              className="animate-[dash_20s_linear_infinite]"
            />
            <path 
              d="M150 50 Q250 50 250 150" 
              strokeOpacity="0.4"
            />
            <circle cx="150" cy="150" r="3" fill={accent} className="animate-pulse" />
          </g>
        </svg>
      </div>

      {/* Chips */}
      <div className="relative z-10 flex flex-wrap gap-2 justify-end mt-auto">
        {chips.map((chip, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white/60 uppercase tracking-widest whitespace-nowrap"
          >
            {chip}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </div>
  );
};

export default HeroVisualOptionB;
