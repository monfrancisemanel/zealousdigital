import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const IdentityArchitecture: React.FC = () => {
  const faqs = [
    {
      question: "What is AI-Centric Web Presence?",
      answer:
        "Websites built for machine parsing and human conversion using modern static stacks, ensuring consistency across all AI search engines."
    },
    {
      question: "What does your Visual Design System include?",
      answer:
        "Comprehensive UI kits and visual guidelines built for rapid deployment across multi-stack platforms, maintaining brand integrity."
    }
  ];

  return (
    <div className="pb-24">
      <SEO
        title="Identity Architecture & Brand Systems Vancouver"
        description="Engineering visual and linguistic systems that allow enterprise brands to scale in the AI age. Machine-readable identity for Vancouver businesses."
        path="/services/identity-architecture"
        serviceName="Identity Architecture"
        faqJson={faqs}
      />

      <section className="bg-slate-900 text-white py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">
              Identity <br /><span className="text-[#FF6B00]">Architecture.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              We define the visual and linguistic systems that allow enterprise brands to scale without losing coherence in the AI-centric age.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Systems, not just styles.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Most branding projects end with a logo. Our <strong>Identity Architecture</strong> ends with a deployable system. We build
                the frameworks that ensure every digital touchpoint—from your UI to your automated emails—speaks the same high-level language.
              </p>
              <p>
                In the age of AI, brand consistency is a technical requirement. We ensure your brand identity is machine-readable and human-compelling.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border-b border-slate-100 py-4">
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
                  <p className="mt-4 text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Static image */}
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img
              src="/images/identity-architecture.jpg"
              alt="Brand guidelines and identity system"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <section className="bg-slate-50 py-20 text-center">
        <Link
          to="/contact"
          className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-sm font-bold uppercase tracking-widest text-white hover:bg-slate-900 transition-all"
        >
          Request a brand audit
        </Link>
      </section>
    </div>
  );
};

export default IdentityArchitecture;