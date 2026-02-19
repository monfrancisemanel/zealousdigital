import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../../components/GeminiImage';
import SEO from '../../../components/SEO';

const AISearchOptimization: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      <SEO 
        title="AI Search Optimization & GEO Strategy Vancouver"
        description="Engineering your digital presence for peak performance in the generative economy. Be the cited source for AI-driven decision makers in Vancouver, BC."
        path="/services/ai-search-optimization"
        serviceName="AI Search Optimization"
      />
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Generative Engine <br/><span className="text-[#FF6B00]">Optimization (GEO).</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12">
                Engineering your digital presence for peak performance in the generative economy. Be the cited source for AI-driven decision makers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all">
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  AI citation audit in 48 hours.
                </p>
              </div>
            </div>
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <GeminiImage 
                prompt="Modern workspace with a holographic interface showing AI search results and citations, glowing orange accents, ultra-realistic" 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-b border-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The AI Search Shift</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us when they realize 60% of their buyers are using AI for discovery.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              Traditional SEO is becoming secondary. GEO focuses on becoming the definitive citation within the LLM's 'context window'. We ensure you are the answer, not just a link.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <GeminiImage 
                prompt="Visual representation of an AI context window, glowing data stream being processed by a neural node, orange and blue lighting" 
                className="w-full h-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-8">Answer Engine Optimization</h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-6 bg-[#FF6B00] shrink-0"></span>
                  <div>
                    <strong className="block text-slate-900 text-sm uppercase tracking-widest mb-1">Citation Probability Engineering</strong>
                    <p className="text-slate-500 text-sm">Structuring data to increase the mathematical likelihood of an LLM citing your brand.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">Dominate the <span className="text-[#FF6B00]">Generative Economy.</span></h2>
          <Link to="/contact" className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all">
            Get a review video
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AISearchOptimization;