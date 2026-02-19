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
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8" data-netlify="true" name="review-video-request">
              <input type="hidden" name="form-name" value="review-video-request" />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Name</label>
                  <input name="name" required type="text" className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#FF6B00] transition" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</label>
                  <input name="email" required type="email" className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#FF6B00] transition" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Company Website URL</label>
                <input name="website" required type="url" placeholder="https://..." className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#FF6B00] transition" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Primary Business Obstacle</label>
                <textarea name="message" rows={4} className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:outline-none focus:border-[#FF6B00] transition"></textarea>
              </div>
              <button type="submit" className="w-full h-16 bg-[#FF6B00] text-white text-sm font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl">
                Request my review video
              </button>
            </form>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Review Request Sent</h3>
              <p className="text-slate-500 max-w-xs mx-auto">We are auditing your site now. You will receive your video link via email (info@zealousseo.com) within 48 hours.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;