import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const SchemaKnowledge: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      <SEO 
        title="Schema Signals & Semantic Orchestration Vancouver"
        description="Engineering advanced knowledge signals and JSON-LD schema that allow LLMs to perfectly parse and verify your brand claims in Vancouver, BC."
        path="/services/schema-signals"
        serviceName="Schema Signals"
      />

      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Semantic <br/><span className="text-[#FF6B00]">Schema Orchestration.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12">
                Engineering advanced knowledge signals and JSON-LD schema that allow LLMs to perfectly parse and verify your brand claims.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all"
                >
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Semantic audit in 48 hours.
                </p>
              </div>
            </div>

            {/* Static hero image */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/schema-hero.jpg"
                alt="Structured metadata and JSON-LD"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-b border-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Parsing Gap</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us when their data is semantically opaque to AI crawlers.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              LLMs don&apos;t just &apos;read&apos; text; they look for structured relationships. If your site lacks deep semantic markup, the models have to guess. We remove the guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-8">Machine-Readable Authority</h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-6 bg-[#FF6B00] shrink-0"></span>
                  <div>
                    <strong className="block text-slate-900 text-sm uppercase tracking-widest mb-1">Deep JSON-LD Deployment</strong>
                    <p className="text-slate-500 text-sm">
                      Hard-wiring your service capabilities and expertise into the site&apos;s head data.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Static mechanism image */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/images/schema-nodes.jpg"
                alt="Semantic web architecture and data nodes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">
            Hard-Wire your <span className="text-[#FF6B00]">Semantic Trust.</span>
          </h2>
          <Link to="/contact" className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all">
            Get a review video
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SchemaKnowledge;