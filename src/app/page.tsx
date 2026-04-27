import { ContactSection } from "@/components/contact-section";
import { FloatingBackground } from "@/components/floating-background";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <FloatingBackground />
      <Navbar />
      <main className="relative z-10 pb-8">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
