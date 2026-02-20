import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const ContentEngine: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      <SEO 
        title="Semantic Content Engine & EEAT Strategy Vancouver"
        description="Engineering query-based content systems that satisfy EEAT requirements and dominate generative search citations in Vancouver, BC."
        path="/services/content-engine"
        serviceName="Content Engine"
      />

      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Semantic <br/><span className="text-[#FF6B00]">Authority Engine.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12">
                Engineering query-based content systems that satisfy EEAT requirements and dominate generative search citations.
              </p>
              <Link
                to="/contact"
                className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                Get a review video
              </Link>
            </div>

            {/* Static hero image */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/content-hero.jpg"
                alt="Editorial workspace and content production"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-b border-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Trust Gap</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us when their content is invisible to AI search.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              In 2025, search engines prioritize Experience, Expertise, Authoritativeness, and Trustworthiness (EEAT). Generic blog posts are being replaced by authoritative entity data.
            </p>
          </div>
        </div>
      </section>

      {/* 3) Mechanism */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Static mechanism image */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/images/content-eeat.jpg"
                alt="EEAT trust signals and authority"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-8">EEAT Deployment</h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-6 bg-[#FF6B00] shrink-0"></span>
                  <div>
                    <strong className="block text-slate-900 text-sm uppercase tracking-widest mb-1">Query-Based Architecture</strong>
                    <p className="text-slate-500 text-sm">
                      Content engineered specifically to answer the intent of high-value enterprise queries.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">
            Be the <span className="text-[#FF6B00]">Authoritative Answer.</span>
          </h2>
          <Link to="/contact" className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all">
            Get a review video
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContentEngine;