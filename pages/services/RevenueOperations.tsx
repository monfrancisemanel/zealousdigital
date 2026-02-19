import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../components/GeminiImage';
import SEO from '../../components/SEO';

const RevenueOperations: React.FC = () => {
  const faqs = [
    {
      question: "What is CRM Engineering?",
      answer: "Deep technical configuration of your sales stack to capture every data point from the first click, ensuring data integrity across the pipeline."
    },
    {
      question: "How does Pipeline Orchestration improve ROI?",
      answer: "Automated logic ensures leads move through your funnel with zero manual intervention, reducing response time and increasing conversion probability."
    }
  ];

  return (
    <div className="pb-24">
      <SEO 
        title="Revenue Operations & CRM Engineering Vancouver"
        description="Engineering high-performance Revenue Operations frameworks and CRM logic. Eliminate lead friction and scale your pipeline in Vancouver, BC."
        path="/services/revenue-operations"
        serviceName="Revenue Operations"
        faqJson={faqs}
      />
      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">Revenue <br/><span className="text-[#FF6B00]">Operations.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Engineering the internal infrastructure that turns traffic into predictable revenue streams.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <GeminiImage 
              prompt="High-tech enterprise operations center, dashboard screens with orange and blue data visualizations, professional workspace" 
              className="w-full h-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Intelligence at the Core.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>Your CRM shouldn't just be a database; it should be an intelligence hub. We engineer <strong>Revenue Operations</strong> frameworks that eliminate lead friction and provide absolute clarity on your customer acquisition costs.</p>
              <p>We specialize in HubSpot, Salesforce, and custom CRM engineering, ensuring your sales team only talks to qualified leads.</p>
            </div>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border-b border-slate-100 py-4">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 uppercase tracking-widest text-xs">
                    {faq.question}
                    <svg className="w-4 h-4 text-[#FF6B00] transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <p className="mt-4 text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-20 text-center">
        <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-sm font-bold uppercase tracking-widest text-white hover:bg-slate-900 transition-all">
          Audit my CRM stack
        </Link>
      </section>
    </div>
  );
};

export default RevenueOperations;