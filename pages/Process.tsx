import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Process: React.FC = () => {
  const faqs = [
    { question: "How quickly do we start seeing results?", answer: "Identity and automation deployments show immediate ROI on conversion speed. Visibility (AEO/GEO) typically shifts trajectory within 60-90 days." },
    { question: "Do you work with existing teams?", answer: "Yes. We often act as the high-level technical orchestrator for internal marketing departments that need an enterprise-grade performance layer." },
    { question: "What is your typical project length?", answer: "Initial deployments range from 6 to 12 weeks depending on complexity. Long-term visibility strategies are managed via strategic retainers." },
    { question: "Do you handle the hosting?", answer: "We utilize global edge networks (Netlify/Vercel) to ensure sub-second loading times worldwide." },
    { question: "Can we start with just one service?", answer: "While our systems are best as an integrated stack, we can initiate with a single high-impact deployment like CRM orchestration." }
  ];

  return (
    <div className="pb-24">
      <SEO 
        title="The ZDS Protocol: Precision Deployment Process"
        description="Learn our three-phase protocol for digital performance: Diagnostic Audit, Systems Blueprint, and Active Deployment for Vancouver enterprises."
        path="/process"
        faqJson={faqs}
      />
      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">Our Deployment <br/><span className="text-[#FF6B00]">Protocol.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Precision execution from diagnostic audit to full-scale orchestration. We move at the speed of your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { 
              step: "01", 
              title: "Diagnostic Audit", 
              desc: "A deep dive into your existing digital logic, identifying visibility gaps and technical friction that prevent conversion." 
            },
            { 
              step: "02", 
              title: "Systems Blueprint", 
              desc: "Engineering the identity architecture and visibility strategy required to capture the generative economy's intent." 
            },
            { 
              step: "03", 
              title: "Active Deployment", 
              desc: "Rapid deployment of performance assets and automated orchestration hubs to ensure zero lead decay." 
            }
          ].map((item, i) => (
            <div key={i} className="border-l border-slate-100 pl-8 pt-4">
              <span className="text-5xl font-black text-slate-100 block mb-6">{item.step}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
           <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 underline decoration-[#FF6B00] decoration-4 underline-offset-8">Execution FAQs</h2>
           <div className="space-y-4">
             {faqs.map((item, i) => (
               <details key={i} className="group border-b border-slate-200 py-6">
                 <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 uppercase tracking-widest text-xs">
                   {item.question}
                   <svg className="w-4 h-4 text-[#FF6B00] transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                 </summary>
                 <p className="mt-6 text-slate-500 leading-relaxed text-sm">{item.answer}</p>
               </details>
             ))}
           </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center py-32">
        <h2 className="text-4xl font-black text-slate-900 mb-8">Ready to initiate?</h2>
        <Link to="/contact" className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-slate-900 transition-all">
          Get a review video
        </Link>
      </section>
    </div>
  );
};

export default Process;