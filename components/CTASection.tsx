
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Do you have Project Idea?<br />
          Let's discuss your project!
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Passionate about building digital products that make an impact. Let's combine my design expertise with your vision.
        </p>
        <a 
          href="#contact" 
          className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold inline-flex items-center gap-3 hover:bg-purple-700 transition-all group"
        >
          Let's work Together
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
