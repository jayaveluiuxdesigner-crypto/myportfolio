
import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold text-gray-900">Testimonial</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative">
             <span className="absolute -top-12 left-0 text-gray-100 text-9xl font-serif">"</span>
             <p className="text-2xl text-gray-600 leading-relaxed italic font-medium relative z-10">
               "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta."
             </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-gray-900">Esther Howard</h4>
            <p className="text-gray-400 font-medium">Managing Director, ABC company</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 bg-purple-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
