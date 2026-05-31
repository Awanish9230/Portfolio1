"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Sparkles, Server } from "lucide-react";

const interests = [
  { icon: Code2, label: "Full Stack Development" },
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Sparkles, label: "Data Science" },
  { icon: Server, label: "Cloud Technologies" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 min-h-screen flex items-center z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Profile Details / Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-500 group-hover:scale-150"></div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I am a passionate Computer Science student dedicated to creating innovative solutions. With a strong foundation in <span className="text-white font-medium">Full Stack Development</span> and an ever-growing interest in <span className="text-white font-medium">AI & Data Science</span>, I strive to bridge the gap between complex algorithms and user-friendly applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I enjoy building scalable projects, solving real-world problems, and staying ahead of the curve by continuously learning modern technologies. My ultimate goal is to leverage AI to make the web smarter and more accessible.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 border border-white/5 hover:border-accent-purple/50 transition-colors cursor-pointer"
                  >
                    <div className="p-3 bg-white/5 rounded-full text-accent-cyan">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{interest.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats / Education Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 rounded-2xl border-gradient relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5"></div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <GraduationCap className="text-accent-blue" />
                Education
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="relative pl-6 border-l-2 border-white/10">
                  <div className="absolute w-4 h-4 bg-accent-blue rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  <h4 className="text-lg font-bold text-white">B.Tech in Computer Science</h4>
                  <p className="text-accent-purple-light font-medium text-sm mb-2">2021 - 2025 (Expected)</p>
                  <p className="text-gray-400 text-sm">Focusing on algorithms, artificial intelligence, and software engineering principles.</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-transparent">
                  <div className="absolute w-4 h-4 bg-white/20 rounded-full -left-[9px] top-1"></div>
                  <h4 className="text-lg font-bold text-gray-300">Continuous Learning</h4>
                  <p className="text-gray-500 font-medium text-sm mb-2">Present</p>
                  <p className="text-gray-400 text-sm">Actively expanding knowledge in machine learning models and modern web frameworks.</p>
                </div>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
