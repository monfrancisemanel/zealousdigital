import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-32 max-w-6xl">
      <SEO 
        title="Initiate Project: Request Technical Audit"
        description="Get a personalized review video and technical visibility audit from our senior strategists in Vancouver. Direct feedback, no sales pitches."
        path="/contact"
        pageType="ContactPage"
      />
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-8 leading-none">
            Scale your <br/><span className="text-[#FF6B00]">Visibility.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed">
            Send us your domain. I personally record a custom audit of your digital presence and provide a clear roadmap for AEO and GEO implementation.
          </p>
          
          <div className="space-y-12">
            <div>
               <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF6B00] mb-4">Direct Communication</h4>
               <p className="text-2xl font-bold text-slate-900 underline decoration-[#FF6B00] decoration-2 underline-offset-8">info@zealousseo.com</p>
            </div>
            <div className="p-8 border-l-2 border-slate-100 italic text-slate-400">
               "No sales pitches. Just 10 minutes of direct, actionable technical feedback."
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-12 shadow-sm border border-slate-100">
test
        </div>
      </div>
    </div>
  );
};

export default Contact;