"use client";

import React from "react";
import { Award, Trophy, Compass, ArrowUpRight } from "lucide-react";
import { achievementsData } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-zinc-950/40 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
            <Trophy className="w-3.5 h-3.5" />
            Engineering Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Hackathons &amp; Technical Competitions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            Demonstrated engineering performance across competitive multi-disciplinary hackathons in maritime AI and financial technology.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/[0.08] bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-indigo-500/30 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {item.highlightBadge}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">{item.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-semibold text-indigo-300 mt-1">
                  {item.position}
                </div>

                <div className="text-xs text-zinc-400 mt-0.5">
                  {item.domain} • {item.organization}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Verified Competition</span>
                <Award className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
