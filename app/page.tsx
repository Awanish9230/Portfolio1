import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Scene } from "@/components/canvas/Scene";

export default function Home() {
  return (
    <main className="relative bg-background flex flex-col min-h-screen">
      {/* Global 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <Scene />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
