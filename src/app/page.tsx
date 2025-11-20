import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ElevatorButton } from "@/components/ElevatorButton";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GridBackground />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <ElevatorButton />
    </main>
  );
}
