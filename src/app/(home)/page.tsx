import { HeroSection } from "@/components/ui/hero-section/hero-section";
import { IconButton } from "@/components/ui/button";
import { MoveDown } from 'lucide-react';
import ProjectCardWrapper from "@/components/ui/projects/project-card";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-w-full min-h-screen flex flex-col items-center justify-center gap-16">
      <HeroSection />
      <Link href="#projects">
        <IconButton id="projects" variant="ghost" className="text-lg md:text-xl w-fit" size="icon" icon={<MoveDown className="h-4 w-4" />}>
          Featured projects
        </IconButton>
      </Link>
      <ProjectCardWrapper />
    </section>
  );
}
