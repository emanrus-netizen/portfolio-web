import About from "@/components/about";
import ExperienceSection from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { experiences } from "@/data/experience";



export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <ExperienceSection />
    </main>
  );
}
