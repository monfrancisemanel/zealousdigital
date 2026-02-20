import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const ConversionLandingPages: React.FC = () => {
  const faqs = [
    {
      question: "Why not just use Unbounce or ClickFunnels?",
      answer:
        "Proprietary builders create technical debt and slow load times. We build 'no lock-in' static sites that belong to you, perform 3x faster, and have zero monthly builder fees."
    },
    {
      question: "How do you track performance without cookies?",
      answer:
        "We utilize privacy-first, server-side tracking and deep CRM integrations to measure true pipeline impact, not just superficial clicks."
    }
  ];

  return (
    <main className="bg-white text-slate-900">
      <SEO
        title="Conversion Hubs: High-Performance Landing Pages Vancouver"
        description="Engineering landing environments that bridge the gap between expensive traffic and qualified pipeline. Fast, static-first architectures designed for human conversion in Vancouver, BC."
        path="/services/conversion-hubs"
        serviceName="Conversion Landing Pages"
        faqJson={faqs}
      />

      {/* 1) Hero */}
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                High-Performance <br />
                <span className="text-[#FF6B00]">Conversion Hubs.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12">
                We engineer landing environments that bridge the gap between expensive traffic and qualified pipeline. No templates. No friction. Pure technical precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all"
                >
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  We audit your conversion path in 10 minutes.
                </p>
              </div>
            </div>

            {/* Static hero image */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/conversion-hubs-hero.jpg"
                alt="High-performance landing page design"
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
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Performance Gap</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us after realizing their "pretty" landing pages are actually conversion bottlenecks.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              If your cost-per-acquisition is rising, it’s usually because your landing environment is built on legacy tech that prioritizes convenience over speed. Every 100ms of lag costs you 7% in conversion rate.
            </p>
            <p>
              Here’s what actually happens when this is set up right: We deploy static-first architectures that load instantly on the global edge, integrated with psychological triggers and real-time CRM data flow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">Conversion FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-slate-200 py-6">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 uppercase tracking-widest text-xs">
                  {faq.question}
                  <svg
                    className="w-4 h-4 text-[#FF6B00] transition group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-6 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-32 text-center border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">
            Stop leaking <span className="text-[#FF6B00]">pipeline.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send me your current top-performing page. I’ll send you a technical video review showing you exactly how much conversion you’re leaving on the table.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all"
          >
            Get a review video
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ConversionLandingPages;