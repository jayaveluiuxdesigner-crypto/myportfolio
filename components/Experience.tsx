import React from "react";
import {
  Shield,
  CreditCard,
  ShoppingBag,
  Newspaper,
  CheckCircle2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const ExperienceItem = ({ role, isLast }: { role: any; isLast: boolean }) => {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes("cyber"))
      return <Shield className="w-6 h-6" />;
    if (title.toLowerCase().includes("pura"))
      return <CreditCard className="w-6 h-6" />;
    if (title.toLowerCase().includes("freelance"))
      return <ShoppingBag className="w-6 h-6" />;
    return <Newspaper className="w-6 h-6" />;
  };
const handleView = () => {
  window.open("/resume.pdf", "_blank"); // opens in new tab
};

  return (
    <div className="relative flex gap-8 md:gap-12 group">
      {/* Timeline Line & Node */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 shadow-xl ${
            role.id === "01"
              ? "bg-purple-600 text-white scale-110"
              : "bg-white text-gray-400 group-hover:text-purple-600 border border-gray-100"
          }`}
        >
          {getIcon(role.company)}
        </div>
        {!isLast && (
          <div className="w-[2px] h-full bg-gradient-to-b from-purple-200 to-transparent my-2"></div>
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header Info */}
          <div className="lg:w-1/3 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-widest">
              {role.period}
              {role.id === "01" && (
                <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-ping"></span>
              )}
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                {role.title}
              </h3>
              <p className="text-lg font-bold text-gray-600 mt-1 flex items-center gap-2">
                {role.company}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              {role.location}
            </div>
          </div>

          {/* Impact Details */}
          <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:border-purple-100 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6 block">
              Professional Impact
            </h4>
            <ul className="grid md:grid-cols-1 gap-4">
              {role.points.map((point: string, idx: number) => (
                <li
                  key={idx}
                  className="flex gap-4 text-gray-600 leading-relaxed text-sm"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {

  const handleView = () => {
  window.open("/resume.pdf", "_blank"); // opens in new tab
};

  const roles = [
    {
      id: "01",
      period: "March 2025 – Present",
      title: "Senior UI/UX Designer",
      company: "Tevel Cyber Corps Private Limited, Chennai",
      location: "Chennai, India",
      points: [
        "Designed user interfaces for cybersecurity products and internal enterprise tools with a strong emphasis on clarity, security, and usability.",
        "Conducted user research, interviews, and usability testing to identify pain points and optimize end-to-end user flows.",
        "Built and maintained scalable design systems to ensure visual consistency and efficiency across multiple products.",
        "Collaborated closely with developers and security analysts to translate complex technical requirements into intuitive user experiences.",
        "Ensured all design systems aligned with brand guidelines while supporting product scalability and long-term maintainability.",
      ],
    },
    {
      id: "02",
      period: "June 2021 – Dec 2024",
      title: "UI/UX Designer",
      company: "mPura Inc (Fintech)",
      location: "Chennai, India",
      points: [
        "Led end-to-end UI/UX design for two large-scale fintech applications serving US-based clients.",
        "Designed and delivered data-driven dashboards, user portals, and mobile applications with a strong focus on usability and performance.",
        "Owned the design of two internal enterprise applications from concept and wireframing through final deployment.",
        "Conducted usability testing and continuously incorporated user feedback to refine workflows and enhance overall user experience.",
      ],
    },
    {
      id: "03",
      
      title: "Freelance UI/UX Designer",
      company: "Energeate",
      location: "Remote",
      points: [
        "Designed a responsive website and mobile application for a GCC-based retail client, ensuring a seamless cross-device experience.",
        "Delivered end-to-end UX strategy, including user research, user flows, wireframes, and interaction design aligned with business goals",
      ],
    },
    {
      id: "04",
      period: "2015 – 2018",
      title: "Content Writer",
      company: "Dinakaran Daily News – Chennai (Sun Network)",
      location: "Chennai, India",
      points: [
        "Led the creation of daily editorial content and long-form feature articles, ensuring quality, consistency, and relevance",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 space-y-4">
          <div className="w-12 h-1.5 bg-purple-600 rounded-full"></div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
            PROFESSIONAL{" "}
            <span className="text-purple-600 italic">EXPERIENCE</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-xl font-medium">
            Strategic design leadership across Fintech, Cybersecurity, and Media
            sectors.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12">
          {roles.map((role, idx) => (
            <ExperienceItem
              key={idx}
              role={role}
              isLast={idx === roles.length - 1}
            />
          ))}
        </div>

        {/* Call to Action Mini-Card */}
        <div className="mt-12 bg-white p-8 rounded-[40px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-purple-900/5">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">
              5+
            </div>
            <div>
              <h4 className="text-xl font-black text-gray-900 leading-tight">
                Years of Experience
              </h4>
              <p className="text-gray-500 text-sm font-bold">
                Total professional journey in design & content.
              </p>
            </div>
          </div>
          <a
            href="#contact"
             onClick={handleView}
            className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-600 transition-colors"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};
