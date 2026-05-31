"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, CheckCircle2 } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "awanishverma864@gmail.com", 
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 73900 83864",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ghaziabad, Uttar Pradesh, India",
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/awanish-kumar-verma-33740b295",
    color: "hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Awanish9230",
    color: "hover:text-purple-500 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
  },
];

export function Contact() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="relative py-24 min-h-screen flex items-center z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden border-gradient">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center group"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-cyan mr-4 group-hover:bg-accent-cyan/10 transition-colors">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                      {info.copyable && (
                        <button
                          onClick={() => handleCopy(info.value, index)}
                          className="p-2 text-gray-400 hover:text-white transition-colors hover-target ml-2"
                          title="Copy to clipboard"
                        >
                          {copiedIndex === index ? (
                            <CheckCircle2 size={20} className="text-green-500" />
                          ) : (
                            <Copy size={20} />
                          )}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Social Profiles</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className={`w-14 h-14 rounded-full glass-card border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover-target ${social.color}`}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-white/5">
                <p className="text-gray-300 mb-4">
                  Interested in working together?
                </p>
                <a
                  href="mailto:awanish@example.com"
                  className="inline-block w-full text-center py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors hover-target"
                >
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
