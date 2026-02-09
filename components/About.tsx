import React from "react";
import { Linkedin, Download, PenTool, Instagram, Dribbble } from "lucide-react";
import MyProfileImage from "../public/images/profile.png";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-purple-50 rounded-[40px] transition-all group-hover:-inset-6"></div>
          <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src={MyProfileImage}
              alt="Jayavel Ganesan"
              className="w-full h-auto"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
              <a
                href="https://www.linkedin.com/in/jayavelganesan"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600" />
              </a>
              <a
                href="https://medium.com/@jayavel.uiuxdesigner"
                target="_blank"
                rel="noreferrer"
              >
                <PenTool className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600" />
              </a>

                <a
                href="https://dribbble.com/jayavelgg"
                target="_blank"
                rel="noreferrer"
              >
                <Dribbble className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Professional Senior UI/UX Designer <br />& Content Strategist
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <p className="text-left">
              Senior UI/UX Designer with 5+ years of experience creating
              intuitive, responsive, and accessible digital products for web and
              mobile platforms. Strong background in user-centered design,
              design systems, wireframing, and high-fidelity prototyping, with
              hands-on expertise in Figma, HTML, CSS, and modern design tools.
              Proven ability to collaborate with cross-functional teams to
              optimize onboarding journeys, build scalable dashboards, and
              translate complex requirements into clear, effective solutions
              that deliver measurable business value. Recognized for clear
              communication, collaborative teamwork, and a product-focused
              mindset balancing creativity, usability, and performance. Seeking
              opportunities to contribute design leadership within innovative
              organizations.
            </p>

            <div className="bg-purple-50 p-5 md:p-6 rounded-xl border-l-4 border-purple-600 italic text-gray-700">
              Created and published design-focused articles on Medium and
              LinkedIn covering UI/UX trends, branding strategies, and digital
              product insights to educate and engage the design community.
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://medium.com/@jayavel.uiuxdesigner"
              target="_blank"
              rel="noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all"
            >
              View Articles
            </a>
            <a
              href="/resume.pdf" // path relative to public folder
              download // this triggers download
              className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
