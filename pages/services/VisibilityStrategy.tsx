import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../components/GeminiImage';
import SEO from '../../components/SEO';

const VisibilityStrategy: React.FC = () => {
  return (
    <div className="pb-24">
      <SEO 
        title="Digital Visibility Strategy & Answer Engine Optimization Vancouver"
        description="Evolve beyond traditional SEO. GEO and AEO strategies to ensure your brand is the default recommendation in AI search interfaces in Vancouver, BC."
        path="/services/visibility-strategy"
        serviceName="Visibility Strategy"
      />
      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">Visibility <br/><span className="text-[#FF6B00]">Strategy.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Moving beyond traditional SEO into the era of Answer Engine Optimization and Generative AI Search.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <GeminiImage 
              prompt="A wide angle view of a sophisticated network graph with glowing nodes, representing search engine visibility and AI discovery" 
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Be the Answer.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>Search is evolving. <strong>GEO (Generative Engine Optimization)</strong> ensures your brand is the default recommendation in AI tools like ChatGPT, Claude, and Perplexity.</p>
              <p>We restructure your site's data architecture to ensure it is perfectly parsed by generative models, turning your brand into a cited authority.</p>
            </div>
            <div className="mt-12 space-y-4 text-slate-500 text-sm">
              <p className="flex items-center gap-2 font-bold uppercase tracking-widest"><span className="w-2 h-2 bg-[#FF6B00]"></span> Semantic Schema Engineering</p>
              <p className="flex items-center gap-2 font-bold uppercase tracking-widest"><span className="w-2 h-2 bg-[#FF6B00]"></span> LLM Citation Growth</p>
              <p className="flex items-center gap-2 font-bold uppercase tracking-widest"><span className="w-2 h-2 bg-[#FF6B00]"></span> Answer Engine Optimization (AEO)</p>
              <p className="flex items-center gap-2 font-bold uppercase tracking-widest"><span className="w-2 h-2 bg-[#FF6B00]"></span> AI-First Content Architecture</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-20 text-center">
        <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-sm font-bold uppercase tracking-widest text-white hover:bg-slate-900 transition-all">
          Get a Visibility Audit
        </Link>
      </section>
    </div>
  );
};

export default VisibilityStrategy;