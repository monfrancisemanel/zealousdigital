import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const LeadNurture: React.FC = () => {
  const faqs = [
    {
      question: "How do you prevent SMS spam filters?",
      answer:
        "We utilize A2P 10DLC registration and strict opt-in logic to ensure high delivery rates and brand compliance with carrier regulations."
    },
    {
      question: "Can these systems integrate with our existing CRM?",
      answer:
        "Yes. We primarily build logic inside HubSpot or Salesforce, but can also bridge data between custom stacks using API orchestration."
    }
  ];

  return (
    <main className="bg-white text-slate-900">
      <SEO
        title="Lead Nurture Automation & Pipeline Persistence Vancouver"
        description="Engineering automated communication systems that ensure zero lead decay. Multi-channel behavioral SMS and email for Vancouver, BC organizations."
        path="/services/lead-nurture"
        serviceName="Lead Nurture"
        faqJson={faqs}
      />

      {/* 1) Hero */}
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Persistent Lead <br />
                <span className="text-[#FF6B00]">Nurture Orchestration.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl mb-12">
                Engineering the automated communication systems that ensure zero lead decay. Multi-channel persistence delivered with surgical precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all"
                >
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Audit your nurture speed in 48 hours.
                </p>
              </div>
            </div>

            {/* Static hero image */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/lead-nurture-hero.jpg"
                alt="Automated lead nurture notifications"
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
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Response Gap</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us when their leads are dying in the "follow-up black hole."
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              Lead conversion is a function of time. If your response time exceeds 5 minutes, your probability of conversion drops by 400%. Manual follow-up is not a strategy; it is a liability.
            </p>
            <p>
              We solve this by engineering behavioral-triggered SMS and email sequences that adapt based on recipient engagement, ensuring your brand stays front-of-mind until the point of sale.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">Nurture FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-slate-200 py-6">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 uppercase tracking-widest text-xs">
                  {faq.question}
                  <svg className="w-4 h-4 text-[#FF6B00] transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Your leads are <span className="text-[#FF6B00]">cooling off.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send me your current follow-up process. I'll record a technical audit of your lead decay points and show you exactly where automation can recover lost revenue.
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

export default LeadNurture;