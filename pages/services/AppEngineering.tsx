import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../components/GeminiImage';
import SEO from '../../components/SEO';

const AppEngineering: React.FC = () => {
  const faqs = [
    {
      question: "What is your Full-Stack Development process?",
      answer: "Building high-performance applications with React, Node.js, and modern cloud infrastructure like AWS and Vercel."
    },
    {
      question: "Do you design SaaS Architecture?",
      answer: "Yes, we design multi-tenant platforms capable of handling global scale with enterprise logic and security."
    }
  ];

  return (
    <div className="pb-24">
      <SEO 
        title="Custom App Engineering & SaaS Solutions Vancouver"
        description="Bespoke software and SaaS development for enterprise logic. High-performance React and Node.js solutions in Vancouver, BC. Build for longevity."
        path="/services/app-engineering"
        serviceName="App Engineering"
        faqJson={faqs}
      />
      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">App <br/><span className="text-[#FF6B00]">Engineering.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Bespoke software and SaaS development for enterprise logic and scale.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Utility as a Strategy.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>We build software that solves business problems. Whether it's a customer portal, a custom SaaS product, or a complex internal dashboard, we engineer for longevity and speed.</p>
              <p>Our stack is modern, our code is clean, and our focus is exclusively on high-utility outcomes.</p>
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
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <GeminiImage 
              prompt="Professional software engineering environment, dual monitors showing complex code, mechanical keyboard, dark aesthetic with orange backlight" 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-20 text-center">
        <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-sm font-bold uppercase tracking-widest text-white hover:bg-slate-900 transition-all">
          Discuss my build
        </Link>
      </section>
    </div>
  );
};

export default AppEngineering;