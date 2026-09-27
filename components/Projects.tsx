"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Terminal, Sparkles } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Maritime Systems", "FinTech & Web3", "Full-Stack Enterprise"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              Featured Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Systems &amp; Architecture Showcase
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              In-depth engineering case studies highlighting machine learning telemetry, decentralized finance analytics, and enterprise full-stack systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/30"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase Stack */}
        <div className="space-y-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Modal View */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
