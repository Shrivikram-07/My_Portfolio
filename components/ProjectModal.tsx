"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Award,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"architecture" | "pipeline" | "contributions" | "challenges">(
    "architecture"
  );

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Container */}
      <div className="relative z-10 w-full max-w-4xl bg-zinc-950 border border-white/[0.12] rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="p-6 border-b border-white/[0.08] bg-zinc-900/50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                {project.category}
              </span>
              {project.demoBadge && (
                <span className="font-mono text-[11px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                  {project.demoBadge}
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/projects/${project.slug}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/[0.06] transition-colors"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/[0.06] bg-zinc-900/30 px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-3 text-xs font-mono font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "architecture"
                ? "border-indigo-400 text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            System Architecture
          </button>
          {project.pipeline && (
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`py-3 px-3 text-xs font-mono font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "pipeline"
                  ? "border-indigo-400 text-white"
                  : "border-transparent text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Technical Pipeline
            </button>
          )}
          <button
            onClick={() => setActiveTab("contributions")}
            className={`py-3 px-3 text-xs font-mono font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "contributions"
                ? "border-indigo-400 text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Engineering Contributions
          </button>
          <button
            onClick={() => setActiveTab("challenges")}
            className={`py-3 px-3 text-xs font-mono font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "challenges"
                ? "border-indigo-400 text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Challenges &amp; Outcomes
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          {/* Overview & Problem / Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
              <div className="text-xs font-mono text-indigo-400 uppercase mb-1">Problem Statement</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
              <div className="text-xs font-mono text-cyan-400 uppercase mb-1">Technical Solution</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tab 1: System Architecture */}
          {activeTab === "architecture" && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Architectural Breakdown
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.architecturePoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-zinc-900/50 border border-white/[0.05] flex items-start gap-3"
                  >
                    <span className="font-mono text-xs text-indigo-400 mt-0.5">[{idx + 1}]</span>
                    <span className="text-xs sm:text-sm text-zinc-200">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Technical Pipeline */}
          {activeTab === "pipeline" && project.pipeline && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-cyan-400" />
                Data &amp; Inference Pipeline
              </h3>
              <div className="relative pl-6 border-l-2 border-indigo-500/30 space-y-6">
                {project.pipeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-indigo-400" />
                    <div className="text-xs font-mono text-indigo-400">STAGE 0{idx + 1}</div>
                    <div className="text-sm font-bold text-white mt-0.5">{step.title}</div>
                    <div className="text-xs text-zinc-400 font-medium">{step.description}</div>
                    <p className="text-xs text-zinc-300 mt-1">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Engineering Contributions */}
          {activeTab === "contributions" && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Key Engineering Contributions
              </h3>
              <div className="space-y-2.5">
                {project.keyContributions.map((contrib, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-zinc-900/50 border border-white/[0.05] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-200">{contrib}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Challenges & Outcomes */}
          {activeTab === "challenges" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Engineering Challenges Solved
                </h3>
                <div className="space-y-2.5">
                  {project.challenges.map((ch, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-zinc-900/50 border border-amber-500/10 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs text-amber-400 shrink-0 mt-0.5">•</span>
                      <span className="text-xs sm:text-sm text-zinc-300">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-indigo-400" />
                  Demonstrated Outcomes &amp; Validation
                </h3>
                <div className="space-y-2.5">
                  {project.outcomes.map((out, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-indigo-950/20 border border-indigo-500/20 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-200">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Technologies Footer Bar */}
          <div className="pt-4 border-t border-white/[0.06]">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-white/[0.05]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-zinc-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-zinc-800/90 text-xs font-medium text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Profile</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-all shadow-md shadow-indigo-600/20"
          >
            <span>Open Dedicated Project Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
