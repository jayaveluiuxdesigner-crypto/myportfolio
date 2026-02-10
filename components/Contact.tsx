import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Dribbble,
  ExternalLink,
} from "lucide-react";
import { FaDribbble, FaMedium, FaBehance } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white/40">
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Contact Info */}
        <div className="p-12 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Let’s discuss your Project
            </h2>
            <p className="text-gray-500 mb-8">
              I’m always open to new opportunities and collaborations. Reach out
              through the form below and let’s create something amazing
              together.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Address:
                </p>
                <p className="text-lg font-bold">Tnagar Chennai</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  My Email:
                </p>
                <p className="text-lg font-bold">
                  jayavel.uiuxdesigner@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Call Me Now:
                </p>
                <p className="text-lg font-bold">+91-9597857951</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <div className="flex gap-2">
              {/* Dribbble */}
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 cursor-pointer hover:bg-purple-600 hover:text-white transition-all">
                <a
                  href="https://dribbble.com/jayavelgg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Dribbble />
                </a>
              </div>

              {/* Medium */}
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 cursor-pointer hover:bg-purple-600 hover:text-white transition-all">
                <a
                  href="https://medium.com/@jayavel.uiuxdesigner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMedium />
                </a>
              </div>

              {/* Behance */}
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 cursor-pointer hover:bg-purple-600 hover:text-white transition-all">
                <a
                  href="https://www.behance.net/jayavelganesan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance />
                </a>
              </div>
            </div>
            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 cursor-pointer hover:bg-purple-600 hover:text-white transition-all">
              <a
                href="https://www.linkedin.com/in/jayavelganesan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-12">
          <form className="space-y-6">
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Name*"
                className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-purple-600 transition-colors"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-purple-600 transition-colors"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Budget*"
                className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-purple-600 transition-colors"
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>
            <textarea
              placeholder="Message*"
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-purple-600 transition-colors resize-none"
            />
            <button className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-purple-700 transition-all shadow-lg shadow-purple-200">
              Submit
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
