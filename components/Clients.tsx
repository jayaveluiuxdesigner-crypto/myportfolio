
import React from 'react';

export const Clients: React.FC = () => {
  const logos = ['Google', 'Dribbble', 'LinkedIn', 'Amazon', 'Medium', 'Spotify'];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900">Happy Clients</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex justify-center">
            {logo === 'LinkedIn' ? (
                <div className="flex items-center gap-1 font-bold text-xl text-blue-700">
                    Linked<span className="bg-blue-700 text-white px-1 rounded">in</span>
                </div>
            ) : (
                <span className="text-3xl font-bold text-gray-600 tracking-tighter">{logo}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
