
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 bg-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-6 h-8 bg-slate-900 rounded-full opacity-10"></div>
              <span className="text-xl font-black tracking-tighter text-slate-900">ZEALOUS<span className="text-[#FF6B00]">DIGITAL</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              An enterprise-grade strategy house. We engineer high-performance web presences and visibility systems that bridge the gap between legacy SEO and the generative economy.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-6">Core Capabilities</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-400">
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">Visibility Strategy (AEO/GEO)</Link></li>
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">AI-Centric Web Presence</Link></li>
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">Custom App Engineering</Link></li>
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">Workflow Automation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-400">
              <li><Link to="/about" className="hover:text-[#FF6B00] transition-colors">About Us</Link></li>
              <li><Link to="/proof" className="hover:text-[#FF6B00] transition-colors">Selected Work</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF6B00] transition-colors">Get Started</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            © {new Date().getFullYear()} Zealous Digital Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-10">
             <Link to="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900">Privacy Policy</Link>
             <Link to="/terms" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
