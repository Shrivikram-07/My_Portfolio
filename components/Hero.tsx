"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileDown,
  Github,
  Linkedin,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Positioning */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-zinc-900/80 backdrop-blur-md shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono tracking-wide text-zinc-300">
                Open to Software Engineering &amp; Technology Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2"
            >
              {profileData.name}
            </motion.h1>

            {/* Primary Role with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-zinc-300 mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400 font-bold">
                {profileData.title}
              </span>
            </motion.div>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg text-zinc-200 max-w-2xl mb-4 leading-relaxed font-normal"
            >
              {profileData.supportingLine}
            </motion.p>

            {/* Resume Summary */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-xs sm:text-sm text-zinc-400 max-w-xl mb-8 leading-relaxed font-normal"
            >
              {profileData.summary}
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full"
            >
              {/* Primary CTA */}
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg shadow-white/10 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Link>

              {/* Download Original Resume CTA */}
              <a
                href="/resume.pdf"
                download="Shri_Vikram_M_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-semibold text-xs tracking-wider uppercase hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all shadow-md active:scale-95"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Photo Showcase & Engineering Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-sky-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-50 -z-10" />

            {/* Profile Frame Container */}
            <div className="relative group p-2 rounded-3xl border border-white/[0.12] bg-zinc-950/70 backdrop-blur-xl shadow-2xl shadow-black/80 max-w-sm w-full">
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900">
                <Image
                  src="/shri-vikram.png"
                  alt="Shri Vikram M — Technology Developer"
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.03] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle dark vignette on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                {/* Floating Micro Badge in Image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      SHRI VIKRAM M
                    </div>
                    <div className="text-[11px] font-mono text-indigo-400">
                      Software &amp; AI Developer
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    Chennai
                  </div>
                </div>
              </div>

              {/* Quick Academic Badges below photo */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">SRM B.Tech CSE</div>
                  <div className="text-xs font-bold text-indigo-300">CGPA: 9.3</div>
                </div>
                <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">IIT Madras BS</div>
                  <div className="text-xs font-bold text-cyan-300">Data Science</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Engineering Domain Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">AI &amp; Maritime Vision</div>
              <div className="text-[11px] text-zinc-400">Satellite Anomaly &amp; AIS Attribution</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">Full-Stack Architecture</div>
              <div className="text-[11px] text-zinc-400">React.js, Django &amp; REST Workflows</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-white/[0.08] bg-zinc-900/30 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">DeFi Risk Analytics</div>
              <div className="text-[11px] text-zinc-400">FinBERT NLP &amp; Solana Telemetry</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
