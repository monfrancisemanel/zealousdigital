import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

const SEOSiteArchitecture: React.FC = () => {
  const faqs = [
    {
      question: "Isn't SEO just about publishing more content?",
      answer:
        "Content without architecture is just noise. If search engines can't understand the relationship between your pages, they won't assign you authority, no matter how much you write.",
    },
    {
      question: "Why use static sites for SEO?",
      answer:
        "Google prioritizes speed and structural clarity. Static architectures eliminate the database lag inherent in WordPress, providing instant response times that boost rankings.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <SEO
        title="SEO Site Architecture & Structural Authority Vancouver"
        description="Engineering semantic foundations and crawl logic for enterprise search dominance. Optimize path logic and schema for AI knowledge graphs in Vancouver, BC."
        path="/services/seo-site-architecture"
        serviceName="SEO Site Architecture"
        faqJson={faqs}
      />

      {/* 1) Hero */}
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Structural <br/><span className="text-[#FF6B00]">Authority.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12">
                We engineer the semantic foundation and crawl logic required for enterprise brands to dominate search and AI knowledge graphs. No fluff. Just hard-wired visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all"
                >
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Technical structural audit in 48 hours.
                </p>
              </div>
            </div>

            {/* Static hero image */}
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/seo-architecture-hero.jpg"
                alt="Website hierarchy and internal linking architecture"
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
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Technical Friction</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us after realizing their content is buried by bad site logic.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              If your high-quality content isn&apos;t ranking, it’s usually because your site’s architecture is semantically broken. Crawlers are wasting budget on low-value pages while your primary revenue drivers remain invisible.
            </p>
            <p>
              Here’s what actually happens when this is set up right: We deploy optimized URL taxonomies, deep internal linking clusters, and semantic schema that tells search engines exactly what you represent.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center text-balance">Structural Integrity FAQ</h2>
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
            Your foundation is <span className="text-[#FF6B00]">leaking data.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send me your domain. I&apos;ll record a technical audit of your site structure and show you exactly where search bots are getting lost.
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

export default SEOSiteArchitecture;