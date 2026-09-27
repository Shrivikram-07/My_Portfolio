"use client";

import React, { useState } from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Search,
  Sparkles,
} from "lucide-react";
import { skillsData } from "@/data/skills";

export function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="w-4 h-4 text-sky-400" />,
    "Frontend Engineering": <Layout className="w-4 h-4 text-indigo-400" />,
    "Backend & Systems": <Server className="w-4 h-4 text-cyan-400" />,
    "Databases & Storage": <Database className="w-4 h-4 text-emerald-400" />,
    "Data & Machine Learning": <Brain className="w-4 h-4 text-violet-400" />,
    "Developer Tools & Environment": <Wrench className="w-4 h-4 text-amber-400" />,
  };

  const filteredCategories = skillsData
    .map((category) => ({
      ...category,
      skills: category.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.skills.length > 0);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Search Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Languages, Frameworks &amp; Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              Categorized technologies utilized in full-stack architecture, machine learning pipelines, and database engineering.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-xs text-zinc-200 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-xl border border-white/[0.08] bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-indigo-500/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-white/[0.06]">
                    {categoryIcons[category.name] || <Code2 className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-zinc-800/80 text-zinc-200 border border-white/[0.06] hover:border-indigo-400/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
