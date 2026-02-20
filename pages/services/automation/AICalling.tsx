import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const AICalling: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      <SEO 
        title="AI Calling & Autonomous Voice Agents Vancouver"
        description="Engineering AI-driven inbound and outbound calling systems that qualify leads at scale. 24/7 autonomous voice orchestration for Vancouver organizations."
        path="/services/ai-calling"
        serviceName="AI Calling"
      />

      {/* 1) Hero */}
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Autonomous <br/><span className="text-[#FF6B00]">Voice Orchestration.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl mb-12">
                Engineering the AI-driven inbound and outbound calling systems that qualify leads at scale. 24/7 availability with human-like precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all">
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Voice logic audit in 48 hours.
                </p>
              </div>
            </div>

            {/* Static hero image */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/ai-calling-hero.jpg"
                alt="Autonomous voice orchestration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) Pain-to-light bridge */}
      <section className="py-24 lg:py-32 border-b border-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Human Friction</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us when their sales team is drowning in unqualified calls or missing after-hours leads.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              High-cost call centers and manual lead qualification are the primary bottlenecks of enterprise growth. If you aren't responding to a lead in the first 60 seconds, your chance of conversion drops significantly.
            </p>
            <p>
              We deploy autonomous voice agents that handle initial qualification, appointment setting, and inbound inquiries with sub-second latency. Your sales team only talks to pre-vetted, high-intent buyers.
            </p>
          </div>
        </div>
      </section>

      {/* 3) Mechanism */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-8">Natural Language Voice Logic</h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-6 bg-[#FF6B00] shrink-0"></span>
                  <div>
                    <strong className="block text-slate-900 text-sm uppercase tracking-widest mb-1">Low Latency Response</strong>
                    <p className="text-slate-500 text-sm">Human-like conversational flow with sub-800ms response times for natural interaction.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-6 bg-[#FF6B00] shrink-0"></span>
                  <div>
                    <strong className="block text-slate-900 text-sm uppercase tracking-widest mb-1">Bi-Directional CRM Sync</strong>
                    <p className="text-slate-500 text-sm">Real-time data injection from call transcripts into your CRM for immediate action.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Static mechanism image */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/images/ai-calling-mic.jpg"
                alt="Professional microphone studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-32 text-center border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">
            Your phone is <span className="text-[#FF6B00]">losing you money.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send me your current sales script. I'll record a technical audit of your call logic and show you exactly how AI assisted calling can scale your qualification process.
          </p>
          <Link to="/contact" className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all">
            Get a review video
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AICalling;