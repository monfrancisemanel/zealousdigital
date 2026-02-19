
import React from 'react';
import GeminiImage from '../components/GeminiImage';
import VisualCard from '../components/VisualCard';
import SEO from '../components/SEO';

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-24">
      <SEO 
        title="Strategic Insights: Future of Search & AI Scale"
        description="Deep dives into the technical shifts defining the AI economy. Expert insights on GEO, AEO, CRM hubs, and high-performance web architecture from ZDS."
        path="/resources/blog"
      />
      <div className="max-w-3xl mb-24">
        <h1 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-4">Strategic Insights</h1>
        <h2 className="text-6xl font-black tracking-tighter text-slate-900 mb-8 leading-none">The Future of <br/>Search & Scale.</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          Deep dives into the technical shifts defining the AI-driven economy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {[
          { 
            title: "GEO: How to rank in ChatGPT & Perplexity", 
            category: "Visibility", 
            date: "FEB 12, 2025", 
            prompt: "Sophisticated software interface on a clean white desk, cinematic natural light",
            desc: "The definitive guide to structured data and citation growth for generative search engines." 
          },
          { 
            title: "Revenue Infrastructure: CRM is the core", 
            category: "Operations", 
            date: "JAN 28, 2025", 
            prompt: "Macro photography of an elegant luxury watch movement, representing internal mechanics and precision",
            desc: "Why your marketing performance is invisible without a technical revenue operations stack." 
          },
          { 
            title: "The Architecture of a High-Conversion Hub", 
            category: "Engineering", 
            date: "JAN 10, 2025", 
            prompt: "Modern architectural glass building, geometric patterns, bright blue sky",
            desc: "Engineering a digital presence that prioritizes semantic integrity and loading speed." 
          },
          { 
            title: "AI Agents: Beyond Chatbots", 
            category: "Automation", 
            date: "DEC 20, 2024", 
            prompt: "A sleek humanoid robotic hand interacting with a holographic interface, futuristic aesthetic",
            desc: "Integrating intelligent agents into your internal workflow to eliminate manual logic decay." 
          }
        ].map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video mb-8 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-lg">
              <GeminiImage 
                prompt={post.prompt} 
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00]">{post.category}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{post.date}</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:underline">{post.title}</h3>
            <p className="text-slate-500 leading-relaxed">{post.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
