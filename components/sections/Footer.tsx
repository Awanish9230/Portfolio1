"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#020617]/80 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tighter text-white mb-2">Awanish Kumar Verma</span>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with Next.js, Tailwind CSS & <Heart size={14} className="text-red-500 animate-pulse" />
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Awanish9230" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover-target p-2">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/awanish-kumar-verma-33740b295" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors hover-target p-2">
              <Linkedin size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover-target transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>

        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Awanish Kumar Verma. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0">
            Premium Developer Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
