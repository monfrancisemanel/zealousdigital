import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const CRMSetup: React.FC = () => {
  const faqs = [
    {
      question: "Which CRM platforms do you support?",
      answer:
        "We specialize in HubSpot and Salesforce, but we also build custom CRM bridges for specialized industries that require proprietary database logic.",
    },
    {
      question: "Can you migrate our legacy data?",
      answer:
        "Yes. We handle technical data cleaning and mapping to ensure your historical context is preserved while eliminating the 'garbage in, garbage out' cycle.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <SEO
        title="CRM Implementation & Lead Lifecycle Logic Vancouver"
        description="Engineering high-performance CRM infrastructure and lead lifecycle logic. Specialized technical CRM implementation in Vancouver, BC."
        path="/services/crm-implementation"
        serviceName="CRM Implementation"
        faqJson={faqs}
      />

      {/* 1) Hero */}
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                CRM <br />
                <span className="text-[#FF6B00]">Engineering.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12">
                We engineer the internal data infrastructure that turns marketing spend into predictable revenue. Stop guessing at your attribution. Start owning your pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all"
                >
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Infrastructure audit in 48 hours.
                </p>
              </div>
            </div>

            {/* Static hero image */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/crm-hero.jpg"
                alt="CRM dashboard and database visualization"
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
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">
            The Operational Friction
          </h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us when their CRM is just a glorified, expensive spreadsheet.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              If your sales team is manually entering data or leads are "getting lost" between your website and your inbox, you don't have a lead problem—you have a logic problem. Legacy setups ignore 80% of the customer journey.
            </p>
            <p>
              Here’s what actually happens when this is set up right: We deploy automated lead-routing protocols, deep lifecycle stage mapping, and real-time ROI dashboards that connect every dollar of spend to a specific customer record.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center text-balance">
            Infrastructure FAQ
          </h2>
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
            Your pipeline is <span className="text-[#FF6B00]">leaking.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send me your current CRM process. I'll record a technical audit of your lead flow and show you exactly where your operational friction is costing you revenue.
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

export default CRMSetup;