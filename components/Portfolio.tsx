
import React from 'react';
import { ArrowRight, Globe, Layout, Smartphone } from 'lucide-react';

const projects = [
  { 
    title: 'Energeate', 
    category: 'Website', 
    type: 'Retail & UX Strategy',
    icon: <Globe className="w-4 h-4" />,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600' 
    // Retail, e-commerce, UX
  },
  { 
    title: 'Tevel Technology', 
    category: 'Website', 
    type: 'Enterprise Security',
    icon: <Globe className="w-4 h-4" />,
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=600' 
    // Cybersecurity, enterprise tech
  },
  { 
    title: 'Cyberbay LMS', 
    category: 'Dashboard', 
    type: 'LMS, HRMS Portal',
    icon: <Layout className="w-4 h-4" />,
    img: 'https://cdn.dribbble.com/userupload/46459053/file/6e302a30cba2d941633ca2712d61dfa5.png?resize=752x&vertical=center' 
    // Learning platform, dashboard UI
  },
  { 
    title: 'SmartMoney Investment', 
    category: 'Mobile App & Web', 
    type: 'Fintech Advisors',
    icon: <Smartphone className="w-4 h-4" />,
    img: 'https://assets2.chatbotsplace.com/images/0_0-6130-9.webp' 
    // Fintech, mobile investing
  },
  { 
    title: 'SmartMoney Ventures', 
    category: 'Dashboard', 
    type: 'Crowd Funding Platform',
    icon: <Layout className="w-4 h-4" />,
    img: 'https://pikwizard.com/pw/medium/fd9d972e940bf3eba053e8f2642855e5.jpg' 
    // Startup, funding, business dashboards
  },
  { 
    title: 'mPura Dashboard', 
    category: 'Dashboard', 
    type: 'Fintech Analytics',
    icon: <Layout className="w-4 h-4" />,
    img: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&q=80&w=800&h=600' 
    // Analytics, charts, data visualization
  }
];


export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-black text-gray-900">Projects (Live)</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A selection of live web, dashboard, and mobile products delivered for enterprises and retail clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    {project.icon}
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="mt-8 px-2 space-y-2">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 font-bold text-sm tracking-tight">{project.type}</p>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-600 transition-all translate-x-0 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
