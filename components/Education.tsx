
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Master of Technology',
      field: 'Information Technology',
      university: 'Anna University',
      duration: '2018 - 2020',
      accent: 'bg-blue-50 text-blue-600'
    },
    {
      degree: 'Bachelor’s of Engineering',
      field: 'Computer Science and Engineering',
      university: 'Anna University',
      duration: '2011 - 2014',
      accent: 'bg-emerald-50 text-emerald-600'
    },
    {
      degree: 'UI/UX Design',
      field: 'Certification',
      university: 'Buff Creative College',
      duration: '2023',
      accent: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">My Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Education <span className="text-purple-600">Timeline</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="group relative bg-gray-50/50 p-10 rounded-[48px] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl group-hover:bg-purple-600/10 transition-colors"></div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${edu.accent}`}>
                <GraduationCap className="w-7 h-7" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.duration}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 leading-tight">
                  {edu.degree}
                </h3>
                
                <p className="text-purple-600 font-bold text-lg">
                  {edu.field}
                </p>

                <div className="pt-6 flex items-center gap-2 text-gray-500 font-medium">
                  <MapPin className="w-4 h-4 text-gray-300" />
                  {edu.university}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
