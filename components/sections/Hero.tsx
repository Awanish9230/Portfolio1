"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Data Science Learner",
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple-light text-sm font-medium tracking-wide">
              Welcome to my universe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">
              Awanish Kumar Verma
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-12 text-xl md:text-3xl text-gray-400 font-medium flex items-center"
          >
            <span>{text}</span>
            <span className="ml-1 w-1 h-6 md:h-8 bg-accent-cyan animate-pulse"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 max-w-lg text-lg"
          >
            I build futuristic digital experiences with modern web technologies, AI, and a passion for continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pt-4"
          >
            <a
              href="#projects"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden hover-target transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
              <ArrowRight className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 w-5 h-5" />
            </a>
            
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover-target hover:scale-105 active:scale-95"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-5 h-5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        {/* 3D Model / Abstract graphic area on the right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center relative hidden md:flex"
        >
          {/* A glowing orb placeholder if 3D shapes don't cover it well */}
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan blur-[100px] opacity-40 animate-pulse"></div>
            <div className="w-full h-full rounded-full border border-white/10 glass-card flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10"></div>
               {/* Tech icons floating */}
               <motion.div 
                 animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-10 left-10 text-4xl"
               >
                 ⚛️
               </motion.div>
               <motion.div 
                 animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }} 
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="absolute bottom-16 right-10 text-4xl"
               >
                 🤖
               </motion.div>
               <div className="text-9xl font-bold text-white/5 opacity-50 select-none">AV</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-600 overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-white"
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
