import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Lights from "../components/Lights";
import { useReveal } from "../components/useReveal";

export default function Home() {
  useReveal();

  return (
    <main>
      <Hero />

      <Lights />
      <div className="divider divider--labeled" />

      <About />
      <div className="divider" />

      <Projects />
      <div className="divider" />

      <Contact />
    </main>
  );
}
