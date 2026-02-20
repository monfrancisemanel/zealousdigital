import React from 'react';
import { Link } from 'react-router-dom';
import VisualCard from '../components/VisualCard';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Enterprise Digital Orchestration & AI-Driven Growth"
        description="Zealous Digital Solutions deploys elite technical infrastructure, SEO performance, and AEO strategies for ambitious brands in Vancouver and globally."
        path="/"
      />

      {/* 1) Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
              Digital <span className="text-[#FF6B00]">Orchestration</span> for the AI Economy.
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
              We deploy elite digital visibility and infrastructure for brands that refuse to settle for legacy performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex h-16 items-center justify-center bg-[#FF6B00] px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-slate-900"
              >
                Get a review video
              </Link>
              <Link
                to="/services"
                className="inline-flex h-16 items-center justify-center border-2 border-slate-900 px-10 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
              >
                Our Capabilities
              </Link>
            </div>
          </div>

          {/* Replace this image with your actual file in /public/images/ */}
          <div className="relative h-[600px] w-full hidden lg:block overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="Enterprise technology infrastructure"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 2) Success Story Section */}
      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FF6B00] mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Results that define markets.
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-10 bg-white shadow-xl border-l-4 border-[#FF6B00]">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Scale Study: Caldera ALC
                </span>
                <p className="text-2xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                  From legacy visibility to category-defining AEO authority.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  By deploying our technical visibility strategy, we positioned Caldera as the primary cited source for their
                  specific education niche in generative search.
                </p>
                <Link
                  to="/proof"
                  className="text-xs font-black uppercase tracking-widest text-[#FF6B00] underline decoration-2 underline-offset-4"
                >
                  Read Case Study
                </Link>
              </div>

              <div className="flex gap-12 pt-8">
                <div>
                  <p className="text-3xl font-black text-slate-900">312%</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Visibility Gain</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">4.1x</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead Quality</p>
                </div>
              </div>
            </div>

            {/* Replace this image with your actual file in /public/images/ */}
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/success-story.jpg"
                alt="Technology detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm border border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">AEO TRANSITION</h4>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">
                  Semantic node mapping for legacy migration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Blog Section Preview */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-slate-900">Strategic Insights</h2>
            <Link to="/resources/blog" className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "GEO: The New SEO Strategy for 2025", category: "Strategy", date: "FEB 12, 2025", img: "/images/blog-geo.jpg" },
              { title: "Building Revenue Infrastructure with CRM Hubs", category: "Operations", date: "JAN 28, 2025", img: "/images/blog-crm.jpg" },
              { title: "Answer Engine Optimization for Service Brands", category: "Visibility", date: "JAN 15, 2025", img: "/images/blog-aeo.jpg" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] mb-6 overflow-hidden rounded-xl bg-slate-100 border border-slate-100">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest">{post.category}</span>
                <h4 className="text-xl font-bold text-slate-900 mt-2 mb-4 leading-tight group-hover:underline">
                  {post.title}
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to shift trajectory?</h2>
          <Link
            to="/contact"
            className="inline-flex h-16 items-center bg-[#FF6B00] px-12 text-lg font-bold uppercase tracking-widest text-white hover:bg-white hover:text-slate-900 transition-all"
          >
            Get a review video
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;