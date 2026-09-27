"use client";

import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Radio,
  Activity,
  Workflow,
  Sparkles,
  CheckCircle2,
  Terminal,
  Layers,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpenModal, index }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-white/[0.08] bg-zinc-950/70 hover:bg-zinc-950/90 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden shadow-2xl shadow-black/40">
      {/* Subtle Ambient Glow on Hover */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-8">
        {/* Left Column: Structured Project Information */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category & Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                {project.category}
              </span>
              {project.demoBadge && (
                <span className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  {project.demoBadge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {project.tagline}
            </p>

            {/* Structured Highlights instead of a big dense text blob */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Key Technical Capabilities
                </div>
                <div className="space-y-2">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-zinc-200">{h.label}: </span>
                        <span className="text-zinc-400">{h.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Badges */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900/80 text-zinc-300 border border-white/[0.06] hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
            <button
              onClick={() => onOpenModal(project)}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-indigo-600/25 active:scale-95"
            >
              <span>Explore Architecture &amp; Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub for ${project.title}`}
                  className="p-2 rounded-lg border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  title="View GitHub repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="p-2 rounded-lg border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Open dedicated case study page"
                aria-label={`Dedicated page for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Expansive Engineering Telemetry Workbench */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="rounded-xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur-md overflow-hidden shadow-inner">
            {/* Workbench Top Bar */}
            <div className="px-4 py-3 border-b border-white/[0.06] bg-zinc-950/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-zinc-400">
                  system://{project.slug}
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ENGINEERING VERIFIED
              </div>
            </div>

            {/* Workbench Content Preview */}
            <div className="p-5 sm:p-6">
              {/* Type 1: Visual Pipeline for Oil Spill Project */}
              {project.previewType === "pipeline" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      Multimodal Satellite &amp; AIS Pipeline
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">Sequential Flow</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase">Stage 01 • Input</div>
                      <div className="text-xs font-bold text-white">Satellite SAR</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Ingests marine satellite imagery for high-density shipping lanes.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-indigo-400 uppercase">Stage 02 • Filter</div>
                      <div className="text-xs font-bold text-white">Look-Alike Filter</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Distinguishes petroleum slicks from natural algae &amp; low wind zones.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-sky-400 uppercase">Stage 03 • Vision ML</div>
                      <div className="text-xs font-bold text-white">Spill Detection</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Segments slick boundary, computing surface area &amp; intensity centroid.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-violet-400 uppercase">Stage 04 • Telemetry</div>
                      <div className="text-xs font-bold text-white">AIS Vessel Stream</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Decodes real-time coordinates, speed records &amp; MMSI ship trails.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-amber-400 uppercase">Stage 05 • Anomaly</div>
                      <div className="text-xs font-bold text-white">Dark Period Scan</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Identifies transponder blackouts &amp; suspicious velocity drops.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase">Stage 06 • Attribution</div>
                      <div className="text-xs font-bold text-white">Ocean Drift Model</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Factors currents &amp; winds to isolate suspect vessel release point.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Type 2: FinTech Risk Dashboard for YieldSense */}
              {project.previewType === "dashboard" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                      <Activity className="w-3.5 h-3.5" />
                      DeFi Liquidity Risk Terminal
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">Cluster: Solana Mainnet</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] space-y-2">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Safety Score</div>
                      <div className="text-2xl font-extrabold text-emerald-400">92 / 100</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        ML-based multi-factor safety evaluation.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] space-y-2">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">FinBERT Sentiment</div>
                      <div className="text-xl font-bold text-sky-400">Bullish (0.78)</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Real-time NLP sentiment analysis.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] space-y-2">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Impermanent Loss</div>
                      <div className="text-xl font-bold text-indigo-300">Simulated</div>
                      <div className="text-[11px] text-zinc-400 leading-snug">
                        Token pair divergence model.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-950/50 border border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                      Solana Web3 Wallet Adapter
                    </span>
                    <span className="text-emerald-400 font-semibold">Active &amp; Linked</span>
                  </div>
                </div>
              )}

              {/* Type 3: Enterprise Workflow for Task Management */}
              {project.previewType === "workflow" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <Workflow className="w-3.5 h-3.5" />
                      Task Lifecycle &amp; State Machine
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">React + Django REST</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Step 01</div>
                      <div className="text-xs font-bold text-white">Task Creation</div>
                      <div className="text-[11px] text-zinc-400">Validated payload submission</div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-indigo-400 uppercase">Step 02</div>
                      <div className="text-xs font-bold text-white">Assignment</div>
                      <div className="text-[11px] text-zinc-400">Role-based team routing</div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase">Step 03</div>
                      <div className="text-xs font-bold text-white">In Progress</div>
                      <div className="text-[11px] text-zinc-400">Status &amp; milestone monitor</div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase">Step 04</div>
                      <div className="text-xs font-bold text-white">Review &amp; Done</div>
                      <div className="text-[11px] text-zinc-400">Tested &amp; verified closure</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-950/50 border border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Django REST Framework Backend
                    </span>
                    <span className="text-zinc-400 font-semibold">TANSAM Internal Tool</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
