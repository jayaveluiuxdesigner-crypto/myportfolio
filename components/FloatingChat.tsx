
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Mail, Linkedin, Send, MessageSquare } from 'lucide-react';

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the initial greeting popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPopup(false);
  };

  const contactLinks = [
    {
      name: 'Email Me',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:jayavel.uiuxdesigner@gmail.com',
      color: 'bg-red-50 text-red-600',
      label: 'jayavel.uiuxdesigner@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/jayavelganesan',
      color: 'bg-blue-50 text-blue-600',
      label: 'Connect on LinkedIn'
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-5 h-5" />,
      url: 'https://wa.me/919597857951', // Placeholder number
      color: 'bg-green-50 text-green-600',
      label: 'Direct Message'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Initial Greeting Popup */}
      {showPopup && !isOpen && (
        <div className="mb-4 mr-2 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-[280px] animate-bounce-subtle relative">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
          <p className="text-sm font-bold text-gray-800 leading-relaxed">
            Hi Recruiters! 👋 <br/>
            <span className="text-purple-600">I'm Jayavel</span>, a Senior UI/UX Designer. Available for conversations around senior UI/UX roles and impactful product design work.
          </p>
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"></div>
        </div>
      )}

      {/* Chat Options Card */}
      {isOpen && (
        <div className="mb-6 bg-white rounded-[32px] shadow-2xl border border-gray-100 w-[320px] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-purple-600 p-6 text-white">
            <h3 className="text-xl font-bold">Let's Connect</h3>
            <p className="text-purple-100 text-xs mt-1">Choose your preferred way to reach out.</p>
          </div>
          <div className="p-4 space-y-3">
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900">{link.name}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{link.label}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="p-4 bg-gray-50 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Typical response time: &lt; 2 hours</p>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform active:scale-90 ${
          isOpen ? 'bg-gray-900 rotate-90' : 'bg-purple-600 hover:bg-purple-700'
        }`}
      >
        {isOpen ? (
          <X className="text-white w-8 h-8" />
        ) : (
          <div className="relative">
            <MessageCircle className="text-white w-8 h-8" />
            {!showPopup && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
            )}
          </div>
        )}
      </button>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
