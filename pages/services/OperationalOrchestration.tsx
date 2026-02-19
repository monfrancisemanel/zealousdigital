import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../components/GeminiImage';
import SEO from '../../components/SEO';

const OperationalOrchestration: React.FC = () => {
  const faqs = [
    {
      question: "What is Workflow Logic Design?",
      answer: "Mapping and automating complex business processes using Zapier, Make, and custom Node.js bridges to eliminate manual work."
    },
    {
      question: "How do you deploy AI Agents?",
      answer: "We integrate generative AI agents into your communication channels to handle front-line inquiries and automate operational reporting."
    }
  ];

  return (
    <div className="pb-24">
      <SEO 
        title="Operational Orchestration & Intelligent Automation Vancouver"
        description="Automating high-value workflows for enterprise efficiency. Logic bridges and AI agents for Vancouver based business systems. Eliminate manual friction."
        path="/services/operational-orchestration"
        serviceName="Operational Orchestration"
        faqJson={faqs}
      />
      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">Operational <br/><span className="text-[#FF6B00]">Orchestration.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Automating the high-value workflows that define your competitive edge.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Profit through Efficiency.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>Manual work is the silent killer of enterprise growth. We deploy <strong>Intelligent Automation</strong> systems that handle everything from multi-step lead processing to automated operational reporting.</p>
              <p>We build logic bridges between your siloed tools, creating a unified ecosystem that operates 24/7 without fatigue.</p>
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
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <GeminiImage 
              prompt="Abstract circuit board design with glowing orange energy flow, futuristic digital orchestration, metallic textures" 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-20 text-center">
        <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-sm font-bold uppercase tracking-widest text-white hover:bg-slate-900 transition-all">
          Request an automation audit
        </Link>
      </section>
    </div>
  );
};

export default OperationalOrchestration;