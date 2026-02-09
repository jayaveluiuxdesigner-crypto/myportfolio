
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
       
        </div>

        <div className="flex items-center gap-6 text-sm font-bold text-gray-500">
          <a href="https://dribbble.com/jayavelgg" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Dribbble</a>
          <a href="https://www.linkedin.com/in/jayavelganesan" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">LinkedIn</a>
          <a href="https://medium.com/@jayavel.uiuxdesigner" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Medium</a>
          <a href="https://www.behance.net/jayavelganesan" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Behance</a>
        </div>

        <p className="text-sm text-gray-400">
          Copyright © 2025 Jayavel Ganesan.
        </p>
      </div>
    </footer>
  );
};
