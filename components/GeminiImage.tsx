
import React, { useState, useEffect } from 'react';
import { generateBusinessImage } from '../lib/ai';

interface GeminiImageProps {
  prompt: string;
  className?: string;
  fallbackColor?: string;
}

const GeminiImage: React.FC<GeminiImageProps> = ({ prompt, className, fallbackColor = "bg-slate-50" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    
    const fetchImage = async () => {
      try {
        const url = await generateBusinessImage(prompt);
        if (mounted) {
          if (url) {
            setImageUrl(url);
          } else {
            setError(true);
          }
          setLoading(false);
        }
      } catch (e) {
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchImage();
    
    return () => { mounted = false; };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`${className} ${fallbackColor} animate-pulse flex flex-col items-center justify-center border border-slate-100`}>
        <div className="w-8 h-8 rounded-full border-2 border-[#FF6B00] border-t-transparent animate-spin mb-4"></div>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Rendering Asset...</span>
      </div>
    );
  }

  // Enterprise-grade fallback UI if the API is exhausted or error occurs
  if (error || !imageUrl) {
    return (
      <div className={`${className} ${fallbackColor} flex flex-col items-center justify-center p-8 border border-slate-100 relative overflow-hidden group`}>
        {/* Abstract background pattern for the fallback */}
        <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 opacity-10">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-900" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-2">Technical Insight</h4>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest max-w-[200px] leading-relaxed mx-auto italic">
            "{prompt.length > 60 ? prompt.substring(0, 57) + '...' : prompt}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={prompt} 
      className={`${className} object-cover transition-opacity duration-1000 opacity-100`} 
      loading="lazy" 
    />
  );
};

export default GeminiImage;
