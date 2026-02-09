import React, { useState, useEffect } from "react";

export const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Senior UI/UX Designer",
    "Enterprise Product Designer",
    "UX & Interaction Designer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Hello, I'm
              <br />
              <span className="text-purple-600">Jayavel Ganesan</span>
            </h1>
            <div className="h-12 text-2xl md:text-3xl font-bold text-gray-700">
              I'm a{" "}
              <span className="border-r-4 border-purple-600 pr-1 animate-pulse">
                {text}
              </span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              A high-performance UI/UX professional dedicated to crafting
              secure, scalable digital products and immersive user experiences.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all inline-block"
          >
            Let's Talk
          </a>

          <div className="flex flex-wrap gap-8 pt-4">
            <div className="bg-white p-6 rounded-2xl text-center border border-gray-100 shadow-sm min-w-[140px]">
              <div className="text-3xl font-black text-gray-900">5+</div>
              <div className="text-xs font-bold text-purple-600 uppercase mt-1">
                Years Exp.
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center border border-gray-100 shadow-sm min-w-[140px]">
              <div className="text-3xl font-black text-gray-900">Ui/Ux</div>
              <div className="text-xs font-bold text-purple-600 uppercase mt-1">
                Designer
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100">
    
            <img
              src="/images/profile.png" // path relative to public folder
              alt="Jayavel Ganesan"
              className="rounded-[30px] w-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
