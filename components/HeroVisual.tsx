
import React from 'react';

const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>
      
      <svg className="z-10 w-full h-full max-w-lg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-connectivity">
          {/* Neural Network Nodes */}
          <circle cx="100" cy="100" r="4" fill="#FF6B00" className="node-1" />
          <circle cx="300" cy="100" r="4" fill="#FF6B00" className="node-2" />
          <circle cx="200" cy="200" r="6" fill="#0f172a" className="node-center" />
          <circle cx="100" cy="300" r="4" fill="#FF6B00" className="node-3" />
          <circle cx="300" cy="300" r="4" fill="#FF6B00" className="node-4" />
          
          {/* Connection Lines */}
          <line x1="100" y1="100" x2="200" y2="200" stroke="#FF6B00" strokeWidth="1" strokeDasharray="4 4" className="line-1" />
          <line x1="300" y1="100" x2="200" y2="200" stroke="#FF6B00" strokeWidth="1" strokeDasharray="4 4" className="line-2" />
          <line x1="100" y1="300" x2="200" y2="200" stroke="#FF6B00" strokeWidth="1" strokeDasharray="4 4" className="line-3" />
          <line x1="300" y1="300" x2="200" y2="200" stroke="#FF6B00" strokeWidth="1" strokeDasharray="4 4" className="line-4" />
          <line x1="100" y1="100" x2="300" y2="100" stroke="#cbd5e1" strokeWidth="0.5" />
          <line x1="100" y1="300" x2="300" y2="300" stroke="#cbd5e1" strokeWidth="0.5" />
        </g>
      </svg>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        @keyframes dash-move {
          to { stroke-dashoffset: -20; }
        }
        .node-1, .node-2, .node-3, .node-4 { animation: pulse-node 4s infinite ease-in-out; }
        .node-2 { animation-delay: 1s; }
        .node-3 { animation-delay: 2s; }
        .node-4 { animation-delay: 3s; }
        .line-1, .line-2, .line-3, .line-4 { animation: dash-move 2s infinite linear; }
        .animate-connectivity { animation: float 10s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default HeroVisual;
