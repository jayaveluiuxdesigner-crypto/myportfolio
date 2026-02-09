
import React from 'react';

const services = [
  { title: 'User Experience (UX)', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.' },
  { title: 'User Interface (UI)', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.' },
  { title: 'Web Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-5xl font-extrabold text-gray-900">What I do?</h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendisse imperdiet.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
          </div>
          <button className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-purple-700 transition-all">
            Say Hello!
          </button>
        </div>

        <div className="space-y-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl card-shadow border border-gray-100 group cursor-pointer hover:border-purple-200 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                {service.title}
                <span className="w-2 h-2 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
