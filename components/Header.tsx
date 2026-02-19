
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesWrapRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (servicesWrapRef.current && !servicesWrapRef.current.contains(t)) setServicesOpen(false);
      if (mobilePanelRef.current && !mobilePanelRef.current.contains(t)) setMobileOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => { setServicesOpen(false); setMobileOpen(false); }}
        >
          {/* Logo: Fingerprint SVG update */}
          <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FF6B00]">
              <path d="M50 10C35 10 20 20 20 40V45C20 48 22 50 25 50C28 50 30 48 30 45V40C30 30 40 25 50 25C60 25 70 30 70 40V60C70 65 65 70 60 70C55 70 50 65 50 60V55C50 52 48 50 45 50C42 50 40 52 40 55V60C40 75 50 85 60 85C70 85 80 75 80 60V40C80 20 65 10 50 10Z" fill="currentColor"/>
              <path d="M50 35C45 35 40 40 40 45V48C40 51 42 53 45 53C48 53 50 51 50 48V45C50 43 52 41 55 41C58 41 60 43 60 45V60C60 63 58 65 55 65C52 65 50 63 50 60V58C50 55 48 53 45 53C42 53 40 55 40 58V60C40 70 48 78 55 78C62 78 70 70 70 60V45C70 38 60 35 50 35Z" fill="currentColor" opacity="0.7"/>
              <path d="M50 0C30 0 10 15 10 40V60C10 80 25 95 45 95C48 95 50 93 50 90C50 87 48 85 45 85C35 85 20 75 20 60V40C20 25 35 15 50 15C65 15 80 25 80 40V70C80 73 82 75 85 75C88 75 90 73 90 70V40C90 15 70 0 50 0Z" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">ZEALOUS</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#FF6B00] leading-none uppercase">
              Digital Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#FF6B00] transition-colors">Home</Link>

          <div ref={servicesWrapRef} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#FF6B00] transition-colors flex items-center gap-1"
            >
              Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>

            <div
              onMouseLeave={() => setServicesOpen(false)}
              className={["absolute top-full -left-4 w-80 pt-4", servicesOpen ? "block" : "hidden"].join(" ")}
            >
              <div role="menu" className="bg-white border border-slate-100 shadow-2xl p-6 space-y-4 max-h-[85vh] overflow-y-auto rounded-xl">
                <div className="space-y-2">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-900">Identity Architecture</span>
                  <Link to="/services/conversion-hubs" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— Conversion Hubs</Link>
                  <Link to="/services/seo-site-architecture" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— SEO Site Architecture</Link>
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-900">Operational Orchestration</span>
                  <Link to="/services/revenue-orchestration" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— Revenue Orchestration</Link>
                  <Link to="/services/crm-implementation" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— CRM Implementation</Link>
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-900">Visibility Strategy</span>
                  <Link to="/services/technical-seo" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— Technical SEO</Link>
                  <Link to="/services/content-engine" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— Content Engine</Link>
                  <Link to="/services/programmatic-seo" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— Programmatic SEO</Link>
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-900">Generative Visibility</span>
                  <Link to="/services/entity-building" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— Entity Building</Link>
                  <Link to="/services/schema-signals" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— Schema Signals</Link>
                  <Link to="/services/ai-search-optimization" role="menuitem" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-[#FF6B00] pl-4" onClick={() => setServicesOpen(false)}>— AI Search Opt.</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/proof" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#FF6B00] transition-colors">Proof</Link>
          <Link to="/process" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#FF6B00] transition-colors">Process</Link>
          <Link to="/pricing" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#FF6B00] transition-colors">Pricing</Link>
          <Link to="/resources/blog" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-[#FF6B00] transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden h-11 w-11 inline-flex items-center justify-center border border-slate-200 bg-white text-slate-900 hover:border-slate-300 transition"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <Link to="/contact" className="h-11 inline-flex items-center justify-center bg-[#FF6B00] px-6 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-slate-900">
            Get a review video
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md h-[calc(100vh-80px)] overflow-y-auto">
          <div ref={mobilePanelRef} className="container mx-auto px-4 py-6 space-y-6">
            <div className="grid gap-4">
              <Link to="/" className="text-sm font-bold text-slate-900" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/proof" className="text-sm font-bold text-slate-900" onClick={() => setMobileOpen(false)}>Proof</Link>
              <Link to="/process" className="text-sm font-bold text-slate-900" onClick={() => setMobileOpen(false)}>Process</Link>
              <Link to="/pricing" className="text-sm font-bold text-slate-900" onClick={() => setMobileOpen(false)}>Pricing</Link>
              <Link to="/resources/blog" className="text-sm font-bold text-slate-900" onClick={() => setMobileOpen(false)}>Blog</Link>
            </div>
            <div className="border-t border-slate-100 pt-5 space-y-6">
              <div className="text-[11px] font-black uppercase tracking-widest text-slate-900">Services</div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="block text-[12px] font-black text-slate-900">Identity Architecture</span>
                  <Link to="/services/conversion-hubs" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— Conversion Hubs</Link>
                  <Link to="/services/seo-site-architecture" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— SEO Site Architecture</Link>
                </div>
                <div className="space-y-2">
                  <span className="block text-[12px] font-black text-slate-900">Operational Orchestration</span>
                  <Link to="/services/revenue-orchestration" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— Revenue Orchestration</Link>
                  <Link to="/services/crm-implementation" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— CRM Implementation</Link>
                </div>
                <div className="space-y-2">
                  <span className="block text-[12px] font-black text-slate-900">Visibility Strategy</span>
                  <Link to="/services/technical-seo" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— Technical SEO</Link>
                  <Link to="/services/content-engine" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— Content Engine</Link>
                  <Link to="/services/programmatic-seo" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— Programmatic SEO</Link>
                </div>
                <div className="space-y-2">
                  <span className="block text-[12px] font-black text-slate-900">Generative Visibility</span>
                  <Link to="/services/entity-building" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— Entity Building</Link>
                  <Link to="/services/schema-signals" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— Schema Signals</Link>
                  <Link to="/services/ai-search-optimization" className="block text-[11px] font-semibold text-slate-600 pl-2" onClick={() => setMobileOpen(false)}>— AI Search Opt.</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
