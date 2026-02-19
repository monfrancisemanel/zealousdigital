import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <SEO 
        title="Our Ethos: Performance Over Vague Metrics"
        description="Learn about the elite team of strategists and developers behind Zealous Digital Solutions in Vancouver. Committed to direct, technically proficient partnership."
        path="/about"
        pageType="AboutPage"
      />
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-12">Clarity over Complexity.</h1>
      
      <div className="grid md:grid-cols-3 gap-12 items-start mb-24">
        <div className="md:col-span-2 space-y-6 text-lg text-slate-600 leading-relaxed">
           <p>
            Zealous Digital Solutions was founded on a simple observation: most businesses are drowning in data but starving for results.
           </p>
           <p>
            Agencies often hide behind vague metrics and complex reports because it makes them seem indispensable. We take the opposite approach. We aim to be the most direct, transparent, and technically proficient partner you’ve ever had.
           </p>
           <p>
            Our focus is narrow because we value precision. We don’t do "everything for everyone." We build high-performance systems for businesses that need their digital assets to work as hard as their sales team.
           </p>
        </div>
        <div className="space-y-8">
           <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">Our Values</h4>
              <ul className="text-sm text-slate-500 space-y-1 italic">
                 <li>— Technical excellence</li>
                 <li>— Extreme ownership</li>
                 <li>— Speed of execution</li>
                 <li>— Radical transparency</li>
              </ul>
           </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-12 text-center">
         <h2 className="text-2xl font-bold text-slate-900 mb-4">No Hype. Just Performance.</h2>
         <p className="text-slate-600 max-w-lg mx-auto">
            We are a small, elite team of developers and strategists who believe the internet should be faster, cleaner, and more profitable for everyone.
         </p>
      </div>
    </div>
  );
};

export default About;