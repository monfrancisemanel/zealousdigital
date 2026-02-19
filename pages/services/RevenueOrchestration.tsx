import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../components/GeminiImage';
import SEO from '../../components/SEO';

const RevenueOrchestration: React.FC = () => {
  const faqs = [
    {
      question: "What is the difference between RevOps and standard CRM management?",
      answer: "Standard management focuses on data entry and reports. Revenue Orchestration (RevOps) is an engineering discipline that builds the logic, automation, and technical infrastructure required for the business to scale without manual friction."
    },
    {
      question: "Do you handle the data migration from legacy spreadsheets or old databases?",
      answer: "Yes. We handle technical data cleaning, mapping, and verification during the architecture build phase to ensure your historical context is preserved with zero data loss."
    }
  ];

  return (
    <main className="bg-white text-slate-900">
      <SEO 
        title="Revenue Orchestration & CRM Logic Vancouver"
        description="Engineering high-performance CRM infrastructure and lead lifecycle logic. We turn disconnected databases into revenue intelligence hubs in Vancouver, BC."
        path="/services/revenue-orchestration"
        serviceName="Revenue Orchestration"
        faqJson={faqs}
      />
      {/* 1) Hero */}
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Revenue Orchestration & <br/><span className="text-[#FF6B00]">CRM Architecture.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12">
                Engineering high-performance CRM infrastructure and lead lifecycle logic. We turn disconnected databases into revenue intelligence hubs for enterprise brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all">
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  We audit your CRM logic in 10 minutes.
                </p>
              </div>
            </div>
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <GeminiImage 
                prompt="Abstract luxury financial orchestration visualization, glowing orange lines connecting complex nodes, deep blue background" 
                className="w-full h-full"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 2) Pain-to-light bridge */}
      <section className="py-24 lg:py-32 border-b border-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Infrastructure Gap</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us after realizing their CRM is an expensive spreadsheet rather than a revenue engine.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              When leads are lost in transit or sales teams manually route inquiries, your growth is capped by operational friction. Most agencies focus on "lead volume," ignoring the 80% of revenue leakage occurring inside the tech stack.
            </p>
            <p>
              We solve this through architectural integrity. By mapping the technical customer journey and establishing automated qualification protocols, we ensure your high-intent pipeline reaches your sales team with zero manual decay.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">Infrastructure FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-slate-200 py-6">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 uppercase tracking-widest text-xs">
                  {faq.question}
                  <svg className="w-4 h-4 text-[#FF6B00] transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p className="mt-6 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-32 text-center border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">Your revenue infrastructure <br/>is <span className="text-[#FF6B00]">leaking data.</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Request your revenue infrastructure audit today. I will record a personal video walk-through of your current lead flow and show you exactly where your operational friction is costing you money.
          </p>
          <Link to="/contact" className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
            Get a review video
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RevenueOrchestration;