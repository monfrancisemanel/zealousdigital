import React from 'react';
import { Link } from 'react-router-dom';
import GeminiImage from '../../../components/GeminiImage';
import SEO from '../../../components/SEO';

const ReviewGeneration: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      <SEO 
        title="Reputation Authority & Review Automation Vancouver"
        description="Engineering automated feedback loops that turn customer success into market-dominating social proof. Automated review generation for Vancouver, BC businesses."
        path="/services/review-generation"
        serviceName="Review Generation"
      />
      {/* 1) Hero */}
      <section className="bg-slate-900 text-white py-32 lg:py-48 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
                Reputation <br/><span className="text-[#FF6B00]">Authority Engineering.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-2xl mb-12">
                Engineering the automated feedback loops that turn customer success into market-dominating social proof. Velocity is your competitive moat.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link to="/contact" className="inline-flex h-14 items-center bg-[#FF6B00] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-slate-900 transition-all">
                  Get a review video
                </Link>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Review velocity audit in 24 hours.
                </p>
              </div>
            </div>
            <div className="hidden lg:block aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <GeminiImage 
                prompt="Five star ratings appearing on a sleek smartphone screen, glowing orange accents, macro photography" 
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) Pain-to-light bridge */}
      <section className="py-24 lg:py-32 border-b border-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-8">The Trust Gap</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
            Most businesses come to us when they provide world-class service but look like amateurs online.
          </p>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              Your best customers are often the quietest. Without a system to capture their sentiment, your digital footprint is dictated by the loudest 1%. Review velocity is a primary ranking factor in both traditional search and AI discovery.
            </p>
            <p>
              We deploy automated review orchestration that identifies high-sentiment customers and secures public feedback at the peak of their satisfaction, while surfacing negative sentiment internally for resolution.
            </p>
          </div>
        </div>
      </section>

      {/* 3) Mechanism */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-video order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
               <GeminiImage 
                prompt="Abstract digital network showing trust signals and social proof nodes, glowing orange and white" 
                className="w-full h-full"
               />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-8">Reputation Scaling Logic</h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-6 bg-[#FF6B00] shrink-0"></span>
                  <div>
                    <strong className="block text-slate-900 text-sm uppercase tracking-widest mb-1">Sentiment Filtering</strong>
                    <p className="text-slate-500 text-sm">Identifying satisfied customers before asking for public reviews to protect brand integrity.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-6 bg-[#FF6B00] shrink-0"></span>
                  <div>
                    <strong className="block text-slate-900 text-sm uppercase tracking-widest mb-1">Crawlable Social Proof</strong>
                    <p className="text-slate-500 text-sm">Review velocity that search engines and LLMs use to verify your market leadership.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-32 text-center border-t border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter">Your reputation is <span className="text-[#FF6B00]">stagnant.</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Send me your Google Business Profile URL. I'll record a technical audit of your review velocity and show you exactly how your competitors are out-ranking you through social proof.
          </p>
          <Link to="/contact" className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all">
            Get a review video
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ReviewGeneration;