"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Terminal, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-zinc-950/60 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            Profile &amp; Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering Rigor &amp; Technical Foundation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Pursuing dual technical degrees in Computer Science and Data Science while building production software, ML telemetry pipelines, and decentralized systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Engineering Profile Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-sm space-y-5">
              {/* Profile Card Header with Mini Photo Badge */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-indigo-500/30 shrink-0 shadow-md">
                  <Image
                    src="/shri-vikram.png"
                    alt="Shri Vikram M"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    {profileData.name}
                  </div>
                  <div className="text-xs font-mono text-indigo-400 flex items-center gap-1.5">
                    <span>{profileData.title}</span>
                    <span>•</span>
                    <span className="text-zinc-400">Chennai, India</span>
                  </div>
                </div>
              </div>

              {profileData.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-xs sm:text-sm leading-relaxed text-zinc-300 font-normal">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.06] grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">PRIMARY FOCUS</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">
                    Full-Stack Systems &amp; Applied AI
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-zinc-400 font-mono">LOCATION</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">
                    {profileData.socials.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-white/[0.06] bg-zinc-900/30">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  Full-Stack Systems
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineering complete systems using React.js frontend interfaces and Django/Node.js REST backends.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.06] bg-zinc-900/30">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Telemetry &amp; Applied ML
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Processing satellite imagery, AIS vessel streams, and financial sentiment models into actionable data.
                </p>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Academic Credentials
            </div>

            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-indigo-500/30 transition-all duration-200 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {edu.institution}
                    </h4>
                    <div className="text-xs font-semibold text-indigo-300 mt-0.5">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono font-bold text-indigo-300">
                      CGPA: {edu.cgpa}
                    </span>
                    <div className="text-[11px] font-mono text-zinc-400 mt-1">{edu.period}</div>
                  </div>
                </div>

                <div className="text-xs text-zinc-400">{edu.location}</div>

                <div className="border-t border-white/[0.05] pt-3">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Key Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focus.map((item, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/80 text-zinc-300 border border-white/[0.05]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
