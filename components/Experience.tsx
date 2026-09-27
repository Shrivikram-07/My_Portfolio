"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-zinc-950/40 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Engineering Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Industry &amp; Practical Roles
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            Software development and data engineering roles focused on delivering real-world functionality, reliable APIs, and analytical insights.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all shadow-sm shadow-indigo-500/50" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-xl border border-white/[0.08] bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-indigo-500/30 transition-all duration-200 space-y-4">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5 group-hover:text-indigo-200 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-300">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-xs font-mono text-zinc-400 shrink-0">
                    <span className="flex items-center gap-1.5 text-zinc-300 bg-zinc-800/80 px-2.5 py-1 rounded border border-white/[0.05]">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2">
                  {item.descriptionPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Footer */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
