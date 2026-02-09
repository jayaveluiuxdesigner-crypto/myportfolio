
import React, { useEffect, useState } from 'react';
import { Zap, Monitor, PenTool, Sparkles } from 'lucide-react';

interface SkillItemProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillItemProps> = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-end">
        <span className="text-gray-800 font-bold text-sm tracking-tight group-hover:text-purple-600 transition-colors">
          {name}
        </span>
        <span className="text-purple-600 font-black text-xs tabular-nums">
          {percentage}%
        </span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${width}%` }}
        >
          {/* Glowing tip for "something different" */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-[2px]"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></div>
        </div>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
 const designSkills = [
  { name: "User Research & Personas", percentage: 95 },
  { name: "Information Architecture", percentage: 92 },
  { name: "Wireframing & Storyboarding", percentage: 96 },
  { name: "Prototyping & High-Fidelity Design", percentage: 98 },
  { name: "Design Systems & Accessibility", percentage: 94 },
  { name: "Responsive Design & A/B Testing", percentage: 90 }
];

const toolsAndTech = [
  { name: "Figma / Sketch / Adobe XD", percentage: 98 },
  { name: "Adobe Creative Suite", percentage: 92 },
  { name: "InVision / Balsamiq", percentage: 88 },
  { name: "Miro / Collaboration Tools", percentage: 90 },
  { name: "HTML / CSS / Bootstrap", percentage: 86 },
  { name: "Canva & Visual Design Tools", percentage: 85 }
];


  return (
    <section id="skills" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-20">
          <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
            <Zap className="w-8 h-8 fill-purple-600/20" />
          </div>
          <div className="space-y-1">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Technical Skills</h2>
            <p className="text-gray-500 font-medium">Tools and technologies I use to build world-class products.</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {/* Design Category */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 border-l-4 border-purple-600 pl-4 py-1">
              <PenTool className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest text-sm">Design Strategy</h3>
            </div>
            <div className="space-y-8">
              {designSkills.map((skill, idx) => (
                <SkillBar key={idx} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>

          {/* Tools & Tech Category */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 border-l-4 border-purple-600 pl-4 py-1">
              <Monitor className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest text-sm">Tools & Technical</h3>
            </div>
            <div className="space-y-8">
              {toolsAndTech.map((skill, idx) => (
                <SkillBar key={idx} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Banner - The "Something Different" addition */}
        <div className="mt-24 p-12 bg-gray-50 rounded-[48px] border border-gray-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
            <Sparkles className="w-32 h-32 text-purple-600" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-black text-gray-900">Professional Qualities</h4>
              <p className="text-gray-500 font-medium">Beyond pixels: Problem-solving, cross-functional collaboration, and team leadership.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Problem Solving", "Collaboration", "Leadership", "Creative Thinking"].map((item, i) => (
                <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 shadow-sm group-hover:border-purple-200 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
