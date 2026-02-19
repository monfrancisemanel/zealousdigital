import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../components/GeminiImage';
import SEO from '../../components/SEO';

const GenerativeVisibility: React.FC = () => {
  const faqs = [
    {
      question: "What is Entity Building?",
      answer: "Establishing your brand as a clear, authoritative entity in the global knowledge graph used by AI models."
    },
    {
      question: "How do Schema Knowledge Signals work?",
      answer: "Advanced semantic markup that allows LLMs to perfectly parse and verify your service claims with absolute confidence."
    }
  ];

  return (
    <div className="pb-24">
      <SEO 
        title="Generative Visibility & GEO Strategy Vancouver"
        description="Optimizing your brand entity for the generative economy. Advanced SEO and schema for AI search engine dominance in Vancouver, BC."
        path="/services/generative-visibility"
        serviceName="Generative Visibility"
        faqJson={faqs}
      />
      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">Generative <br/><span className="text-[#FF6B00]">Visibility.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Optimizing your brand entity so you appear as the definitive recommendation in LLM search interfaces.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <GeminiImage 
              prompt="Abstract representation of artificial intelligence neural networks, glowing orange nodes connected by white light, cinematic depth" 
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">The Future of Citation.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>Decision makers are bypassing Google and asking ChatGPT, Claude, and Perplexity for solutions. If your data isn't structured for <strong>Generative Engine Optimization (GEO)</strong>, your brand doesn't exist to them.</p>
              <p>We deploy semantic knowledge signals that ensure AI models trust and cite your business as the category leader.</p>
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
          Audit my visibility
        </Link>
      </section>
    </div>
  );
};

export default GenerativeVisibility;