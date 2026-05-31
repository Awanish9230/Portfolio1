"use client";

import { motion } from "framer-motion";
import { ExternalLink, Video, Code2, LineChart, CheckCircle2, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "IntelliCred",
    category: "AI + Banking + FinTech",
    description: "An AI-powered video loan platform utilizing advanced biometric verification and financial data analytics to streamline the lending process securely and efficiently.",
    icon: Video,
    color: "from-blue-600 via-purple-600 to-cyan-500",
    shadow: "shadow-blue-500/20",
    border: "group-hover:border-blue-500/50",
    tags: ["React", "AI Integration", "WebRTC", "Node.js", "Python", "Computer Vision"],
    stats: ["AI Integrations", "Video KYC System", "Real-Time Processing"],
    features: [
      "Real-time video KYC verification",
      "Automated AI credit scoring",
      "Secure biometric authentication",
      "Financial dashboard analytics",
    ],
    github: "https://github.com/Awanish9230/IntelliCred",
    demo: "https://intellicred.onrender.com/",
    visualType: "intellicred",
  },
  {
    title: "KRYZO",
    category: "AI + Education + Coding Platform",
    description: "A next-generation AI-powered test series and coding platform designed to provide real-time competitive battles, intelligent diagnostics, and interactive learning environments.",
    icon: Code2,
    color: "from-purple-600 via-indigo-600 to-cyan-500",
    shadow: "shadow-purple-500/20",
    border: "group-hover:border-purple-500/50",
    tags: ["Next.js", "TypeScript", "Socket.io", "Monaco Editor", "AI Diagnostics"],
    stats: ["AI Diagnostics", "Coding Engine", "Real-Time Battles"],
    features: [
      "Live multiplayer coding battles",
      "AI-driven performance diagnostics",
      "Integrated Monaco editor",
      "Automated test case evaluation",
    ],
    github: "https://github.com/Awanish9230/Kryzo",
    demo: "https://kryzo-z6z8.onrender.com/",
    visualType: "kryzo",
  },
  {
    title: "Arelix",
    category: "FinTech • Stock Analytics",
    description: "A modern stock analysis platform that helps users analyze market trends, monitor stock performance, and visualize financial data for smarter investment decisions.",
    icon: LineChart,
    color: "from-green-500 via-emerald-600 to-blue-600",
    shadow: "shadow-green-500/20",
    border: "group-hover:border-green-500/50",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart Libraries"],
    stats: ["Stock Analytics", "Dashboard Visualizations", "Market Tracking"],
    features: [
      "Real-Time Stock Analysis",
      "Interactive Financial Dashboard",
      "Market Trend Visualization",
      "Data-Driven Investment Insights",
    ],
    github: "https://github.com/Awanish9230/Personal_Stock_Analysis_Tool",
    demo: "https://arelix.onrender.com/",
    visualType: "arelix",
  },
];

const ProjectVisual = ({ type, color }: { type: string, color: string }) => {
  if (type === "intellicred") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-slate-950/80 rounded-3xl">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/30 rounded-full flex items-center justify-center"
        >
          <div className="w-48 h-48 border border-purple-500/40 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border border-cyan-500/50 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md flex items-center justify-center">
              <Video className="w-12 h-12 text-blue-400" />
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [-150, 150, -150] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 blur-[2px]"
        />
      </div>
    );
  }
  
  if (type === "kryzo") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-slate-950/80 rounded-3xl">
        <div className="absolute inset-0 opacity-20 font-mono text-xs text-purple-400 p-4 whitespace-pre select-none overflow-hidden flex flex-col gap-2">
          <motion.div animate={{ x: [-20, 0, -20] }} transition={{ duration: 5, repeat: Infinity }}>
            {`function diagnose(code) { \n  return ai.analyze(code);\n}` }
          </motion.div>
          <motion.div animate={{ x: [20, 0, 20] }} transition={{ duration: 6, repeat: Infinity }}>
            {`const battle = new Battle({\n  players: [p1, p2],\n  timeLimit: '30m'\n});`}
          </motion.div>
          <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}>
            {`import { Monaco } from '@monaco-editor/react';`}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-indigo-500/30 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)]"
        >
          <Code2 className="w-16 h-16 text-purple-400" />
        </motion.div>
      </div>
    );
  }

  if (type === "arelix") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-slate-950/80 rounded-3xl flex items-end">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="absolute inset-0 flex items-end justify-around px-8 pb-12 opacity-40">
           {[40, 70, 45, 90, 60, 110, 80].map((h, i) => (
             <motion.div
               key={i}
               initial={{ height: 0 }}
               animate={{ height: `${h}%` }}
               transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
               className={`w-4 md:w-8 rounded-t-sm ${i % 2 === 0 ? 'bg-green-500' : 'bg-emerald-700'}`}
             />
           ))}
        </div>
        <motion.svg
          className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M0,80 Q15,60 30,70 T60,40 T100,20"
            fill="none"
            stroke="url(#greenGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full backdrop-blur-md flex items-center justify-center">
           <LineChart className="w-16 h-16 text-green-400" />
        </div>
      </div>
    );
  }

  return null;
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 min-h-screen z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Premium case-study showcase of AI Development, Full Stack Engineering, FinTech Innovation, EdTech Platforms, and Data Analytics.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700 rounded-3xl -z-10`}></div>

                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
                  
                  <div className="w-full lg:w-[50%] h-[400px] lg:h-[500px] relative rounded-3xl p-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-3xl`}></div>
                    <div className={`relative w-full h-full rounded-3xl border border-white/10 ${project.border} transition-colors duration-500 overflow-hidden shadow-2xl ${project.shadow}`}>
                       <ProjectVisual type={project.visualType} color={project.color} />
                    </div>
                  </div>

                  <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-8">
                    
                    <div>
                      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 text-transparent bg-clip-text bg-gradient-to-r ${project.color} mb-4`}>
                        {project.category}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/5">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span className="text-white font-bold text-lg md:text-xl">0{i + 1}</span>
                          <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{stat}</span>
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover-target`}
                      >
                        <FaGithub size={20} />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold transition-all duration-300 hover:scale-105 hover-target ${project.shadow} shadow-lg`}
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-40 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent"></div>
          
          <div className="relative z-10 glass-card border border-white/10 p-12 md:p-20 text-center rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Building AI-Powered, Full Stack & <br className="hidden md:block"/> Data-Driven Digital Products
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              I specialize in developing modern web applications, AI-integrated platforms, analytics systems, and scalable full-stack solutions focused on performance, user experience, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors hover-target"
              >
                <span>Contact Me</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Awanish9230"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors hover-target"
              >
                <FaGithub className="w-5 h-5" />
                <span>Explore GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
