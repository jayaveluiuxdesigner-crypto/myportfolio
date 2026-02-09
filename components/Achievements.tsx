import React from "react";
import { Trophy, Award, Languages, ExternalLink } from "lucide-react";

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Awards Appreciation Awards",
      issuer: "mPura Inc, Chennai",
      year: "2023-2024",
      icon: <Award className="w-8 h-8" />,
      desc: "Recognized for exceptional contribution and design leadership in fintech application development.",
    },
    {
      title: "Promotion to Senior UI/UX Designer",
      issuer: "Tevel Cyber Corps",
      year: "2025",
      icon: <Trophy className="w-8 h-8" />,
      desc: "Recognized for consistently delivering intuitive, user-centered design solutions while translating complex cybersecurity requirements into clear and effective user experiences.",
    },
    // {
    //   title: "Multilingual Proficiency",
    //   issuer: "Communication Skills",
    //   year: "Global",
    //   icon: <Languages className="w-8 h-8" />,
    //   desc: "Fluent in English, Tamil, Kannada, and Basic German, enabling seamless cross-border collaboration.",
    // },
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-gray-50/50 align-center justify-center overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-16">
          <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">
            Recognitions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Awards & <span className="text-purple-600">Appreciations</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group p-10 rounded-[56px] bg-white border border-gray-100 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-[24px] shadow-sm flex items-center justify-center text-purple-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 font-bold text-xs uppercase tracking-widest">
                    {item.year}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-purple-600 transition-colors" />
                </div>

                <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-900 font-bold text-sm">{item.issuer}</p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
