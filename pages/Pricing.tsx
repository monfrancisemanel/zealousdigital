import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-32 max-w-4xl text-center">
      <SEO 
        title="Engagement Models: Strategic Investment Tiers"
        description="Explore our performance-first engagement models: Fixed Scope Hubs and Retainer Strategy for long-term visibility growth in the AI age."
        path="/pricing"
      />
      <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-8 leading-none">Value-Based <br/><span className="text-[#FF6B00]">Investment.</span></h1>
      <p className="text-xl text-slate-500 mb-16 leading-relaxed max-w-2xl mx-auto">
        We engineer engagement models around the specific ROI objectives of enterprise-tier organizations.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 text-left">
        <div className="p-10 border border-slate-100 rounded-none bg-white shadow-xl">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6B00] mb-4 block">Fixed Scope</span>
           <h3 className="font-bold text-2xl mb-6 text-slate-900 leading-tight text-balance">Operational Orchestration Hubs</h3>
           <p className="text-slate-500 text-sm mb-8 leading-relaxed">Best for organizations requiring rapid deployment of technical assets like identity architecture or CRM logic.</p>
           <ul className="text-xs font-bold text-slate-400 space-y-3 mb-10 uppercase tracking-widest">
              <li className="flex gap-2"><span>—</span> Defined Delivery timeline</li>
              <li className="flex gap-2"><span>—</span> Technical audit included</li>
              <li className="flex gap-2"><span>—</span> Performance first deployment</li>
           </ul>
        </div>
        <div className="p-10 border border-slate-100 rounded-none bg-white shadow-xl">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6B00] mb-4 block">Retainer Scope</span>
           <h3 className="font-bold text-2xl mb-6 text-slate-900 leading-tight text-balance">Visibility Strategy (AEO/GEO)</h3>
           <p className="text-slate-500 text-sm mb-8 leading-relaxed">Strategic management for brands seeking category leadership in generative search and AI discovery engines.</p>
           <ul className="text-xs font-bold text-slate-400 space-y-3 mb-10 uppercase tracking-widest">
              <li className="flex gap-2"><span>—</span> Dedicated Monthly bandwidth</li>
              <li className="flex gap-2"><span>—</span> Ongoing LLM Citation growth</li>
              <li className="flex gap-2"><span>—</span> Quarterly Strategic Reviews</li>
           </ul>
        </div>
      </div>

      <div className="mt-20 p-12 bg-slate-900 text-white">
        <p className="text-lg font-light italic text-slate-400 mb-8 leading-relaxed">
          "If you are looking for the highest return on digital capital, we should talk."
        </p>
        <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-slate-900">
           Request a quote
        </Link>
      </div>
    </div>
  );
};

export default Pricing;