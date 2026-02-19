
import React from 'react';

interface VisualCardProps {
  title?: string;
  subtitle?: string;
  chips?: string[];
  className?: string;
  dark?: boolean;
}

const VisualCard: React.FC<VisualCardProps> = ({ title, subtitle, chips, className = "", dark = false }) => {
  const accent = "#FF6B00";
  const bgClass = dark ? "bg-slate-950 border-white/5" : "bg-slate-50 border-slate-100";
  const textClass = dark ? "text-white" : "text-slate-900";
  const dotColor = dark ? "white" : "slate-400";

  return (
    <div className={`relative overflow-hidden border flex flex-col p-8 lg:p-10 ${bgClass} ${className}`}>
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cardGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill={dotColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cardGrid)" />
        </svg>
      </div>

      {/* Abstract Node SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-48 h-48 lg:w-64 lg:h-64 animate-in fade-in duration-1000">
          <g stroke={dark ? "white" : "#0f172a"} strokeWidth="0.4" fill="none">
            <circle cx="100" cy="100" r="60" strokeDasharray="2 4" strokeOpacity="0.1" />
            <circle cx="100" cy="100" r="40" strokeOpacity="0.2" />
            <path d="M40 100 L160 100 M100 40 L100 160" strokeOpacity="0.1" />
            <circle cx="100" cy="40" r="2" fill={accent} className="animate-pulse" />
            <circle cx="160" cy="100" r="2" fill={accent} style={{ animationDelay: '1s' }} className="animate-pulse" />
            <circle cx="100" cy="160" r="2" fill={accent} style={{ animationDelay: '2s' }} className="animate-pulse" />
            <circle cx="40" cy="100" r="2" fill={accent} style={{ animationDelay: '3.5s' }} className="animate-pulse" />
          </g>
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {title && (
          <span className={`text-[10px] font-black uppercase tracking-[0.4em] mb-1 opacity-40 ${textClass}`}>
            {title}
          </span>
        )}
        {subtitle && (
          <p className={`text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[200px] ${textClass}`}>
            {subtitle}
          </p>
        )}
        
        {chips && chips.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {chips.map((chip, i) => (
              <span 
                key={i} 
                className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                  dark ? "bg-white/5 border-white/10 text-white/50" : "bg-white border-slate-200 text-slate-400"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualCard;
