import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  );
}
