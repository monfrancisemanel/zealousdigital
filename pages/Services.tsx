
import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../components/GeminiImage';
import VisualCard from '../components/VisualCard';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      <SEO 
        title="Enterprise Digital Services: SEO, AEO & Growth Systems"
        description="Comprehensive technical services including Visibility Strategy, Identity Architecture, App Engineering, and Workflow Automation for the AI economy in Vancouver, BC."
        path="/services"
      />
      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">Engineering <br/><span className="text-[#FF6B00]">Visibility.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Technical deployments designed to ensure your brand is the definitive answer in the era of generative intelligence.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-32 space-y-48">
        
        {/* Identity Architecture */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-6 block">Identity Architecture</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Conversion Hubs & SEO Foundations</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              We build high-performance web environments that load instantly and speak semantically to both humans and machines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services/identity-architecture" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Identity Systems</Link>
              <Link to="/services/conversion-hubs" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Conversion Hubs</Link>
              <Link to="/services/seo-site-architecture" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">SEO Architecture</Link>
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <GeminiImage 
              prompt="Professional minimalist web design agency workspace, glass desk, expensive monitor showing clean code, bright natural lighting" 
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Operational Orchestration */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
             <GeminiImage 
              prompt="Abstract representation of high-speed data orchestration, glowing fiber optic lines in an organized grid, copper and steel aesthetics" 
              className="w-full h-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-6 block">Operational Orchestration</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Revenue & CRM Implementation</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Engineering the internal infrastructure that turns marketing spend into predictable, attributable revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services/operational-orchestration" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Operational Logic</Link>
              <Link to="/services/revenue-orchestration" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Revenue Ops</Link>
              <Link to="/services/crm-implementation" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">CRM Implementation</Link>
              <Link to="/services/app-engineering" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">App Engineering</Link>
            </div>
          </div>
        </section>

        {/* Automation */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-6 block">Intelligent Automation</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">AI Calling & Nurture Logic</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Deploying autonomous agents that qualify leads 24/7 and maintain persistence through behavioral-triggered follow-up.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services/ai-calling" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">AI Calling</Link>
              <Link to="/services/lead-nurture" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Lead Nurture</Link>
              <Link to="/services/review-generation" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Review Gen</Link>
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
             <GeminiImage 
              prompt="High-tech voice assistant interface, glowing waveform on a dark sleek smartphone screen, professional macro photography" 
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Visibility Strategy */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
             <GeminiImage 
              prompt="Abstract constellation map representing search engine visibility and node connections, glowing dots on a deep blue background" 
              className="w-full h-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-6 block">Visibility Strategy</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Technical, Content & Programmatic SEO</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Moving beyond keywords into programmatic authority and semantic content engines that dominate search.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services/visibility-strategy" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Visibility Strategy</Link>
              <Link to="/services/technical-seo" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Technical SEO</Link>
              <Link to="/services/content-engine" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Content Engine</Link>
              <Link to="/services/programmatic-seo" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Programmatic SEO</Link>
            </div>
          </div>
        </section>

        {/* Generative Visibility */}
        <section className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-6 block">Generative Visibility</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">AEO, Entity Building & Schema Signals</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Hard-wiring your brand into the knowledge graphs used by ChatGPT, Perplexity, and the generative economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services/generative-visibility" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Generative Logic</Link>
              <Link to="/services/entity-building" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Entity Building</Link>
              <Link to="/services/schema-signals" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">Schema Signals</Link>
              <Link to="/services/ai-search-optimization" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] hover:underline decoration-2">AI Search Opt.</Link>
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
             <GeminiImage 
              prompt="High-end AI hardware, sleek chrome finish, pulsing orange LED light, extremely sharp focus, industrial design aesthetics" 
              className="w-full h-full"
            />
          </div>
        </section>

      </div>

      <section className="bg-[#FF6B00] py-20 text-center text-white">
        <h3 className="text-3xl font-black mb-6">Scale your visibility today.</h3>
        <Link to="/contact" className="inline-flex h-14 items-center bg-white px-10 text-sm font-bold uppercase tracking-widest text-[#FF6B00] hover:bg-slate-900 hover:text-white transition-all">
           Get a review video
        </Link>
      </section>
    </div>
  );
};

export default Services;
