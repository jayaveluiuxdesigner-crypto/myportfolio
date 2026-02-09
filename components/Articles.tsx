import React from "react";
import { ArrowUpRight, Linkedin, BookOpen } from "lucide-react";

const articles = [
  {
    title:
      "Designing Intimate Interfaces: How AI Creates Personalized UX in 2026",
    platform: "Medium",
    tags: ["Trends", "UX Design"],
    excerpt:
      "Exploring how digital interfaces are evolving beyond flat screens into 3D environments...",
    link: "https://medium.com/@jayavel.uiuxdesigner",
  },
  {
    title:
      "UI/UX Design Trends 2026: Designing for Clarity, Intelligence, and Emotion",
    platform: "Medium",
    tags: ["Design · Trends · 2026"],
    excerpt:
      "Design is evolving faster than ever. Here’s what will define the future of digital experiences.",
    link: "https://medium.com/@jayavel.uiuxdesigner/design-trends-2026-70308c25a54a",
  },
  {
    title: "UX Breakdown: Why Users Drop Off During Onboarding",
    platform: "Medium",
    tags: ["UI/UX", "User Research", "Onboarding"],
    excerpt:
      "Exploring usability gaps, cognitive overload, and design decisions that contribute to high user drop-off during onboarding experiences...",
    link: "https://medium.com/@jayavel.uiuxdesigner",
  },
];

export const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-end mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Thought Leadership & <br />
              <span className="text-purple-600">Professional Engagement</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              I create and publish design-focused articles on Medium and
              LinkedIn on UI/UX trends, branding tactics, and digital product
              insights to engage and educate the design community.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <a
              href="https://www.linkedin.com/in/jayavelganesan"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://medium.com/@jayavel.uiuxdesigner"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-6 h-6 text-black" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-widest bg-purple-50 text-purple-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400">
                    {article.platform}
                  </span>
                </div>
                <h3 className="text-2xl font-black leading-tight group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center gap-2 font-bold text-gray-900 group/link"
              >
                Read Full Article
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
