import React from 'react';
import SEO from '../components/SEO';

const Proof: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <SEO 
        title="Performance Results & Case Studies"
        description="Verifiable digital outcomes and selected work from Zealous Digital Solutions. Case studies on service brands, healthcare, and real estate in Vancouver."
        path="/proof"
      />
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">Proven Digital Outcomes</h1>
        <p className="text-xl text-slate-600">
          We believe in verifiable results. Here are three examples of diverse businesses where our technical architecture helped scale their digital performance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          {
            url: "https://calderaalc.com",
            name: "Caldera ALC",
            category: "Service Excellence",
            desc: "Full performance overhaul focusing on accessibility and parent engagement."
          },
          {
            url: "https://kidstartpediatrictherapy.com",
            name: "KidStart Pediatric Therapy",
            category: "Healthcare Lead-Gen",
            desc: "Simplified user journeys for families seeking critical medical support."
          },
          {
            url: "https://corevalhomes.com",
            name: "Coreval Homes",
            category: "Real Estate Scale",
            desc: "A high-conversion platform for modern real estate transactions."
          }
        ].map((item, i) => (
          <div key={i} className="group border border-slate-100 p-8 rounded-2xl hover:bg-slate-50 transition-colors">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">{item.category}</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold text-slate-900 underline underline-offset-4"
            >
              Visit Site 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-16">
         <h2 className="text-2xl font-bold text-slate-900 mb-8">What our clients say</h2>
         <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-slate-50 rounded-xl italic text-slate-600 leading-relaxed">
              "They cut through the buzzwords and actually showed us where our site was breaking. Within two months, our lead quality shifted dramatically."
            </div>
            <div className="p-8 bg-slate-50 rounded-xl italic text-slate-600 leading-relaxed">
              "The review video alone was worth more than the entire discovery phase of the previous agency we hired."
            </div>
         </div>
      </div>
    </div>
  );
};

export default Proof;