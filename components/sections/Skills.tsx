"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Layers, Database, Code, BrainCircuit, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layers,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-purple-500 to-indigo-400",
    skills: [
      { name: "Node.js (Concepts)", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Data Science", level: 70 },
      { name: "Pandas/NumPy", level: 80 },
      { name: "Scikit-Learn", level: 75 },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Streamlit", level: 80 },
      { name: "Vercel", level: 85 },
    ],
  },
];

// 3D Tilt Card Component
function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass-card h-full p-6 rounded-2xl relative overflow-hidden group border border-white/10 hover:border-white/30 transition-colors"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, white 0%, transparent 70%)`,
          }}
        />
        
        <div className="flex items-center gap-4 mb-6" style={{ transform: "translateZ(30px)" }}>
          <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>

        <div className="space-y-4" style={{ transform: "translateZ(20px)" }}>
          {category.skills.map((skill, i) => (
            <div key={i} className="relative">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 min-h-screen z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and proficiencies across various domains of software engineering and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
