"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Github, Linkedin, Code2 } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-white">
            <span className="font-bold text-white tracking-widest uppercase">
              PORTFOLIO
            </span>
            <span className="text-zinc-600 font-light">/</span>
            <span className="text-zinc-400 font-normal tracking-wide text-xs">
              SHRI VIKRAM
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-400">
            Technology Developer • B.Tech CSE Core (SRM) &amp; BS Data Science (IIT Madras)
          </p>
        </div>

        {/* Center System Status */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-zinc-900/60 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Portfolio Architecture v2.0 • Ready for Production</span>
        </div>

        {/* Right Navigation & Scroll to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-lg border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
