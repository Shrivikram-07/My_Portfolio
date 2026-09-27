import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Award,
  GitBranch,
  Terminal,
  Activity,
  Workflow,
  Radio,
} from "lucide-react";
import { projectsData } from "@/data/projects";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Shri Vikram M`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Engineering Case Study`,
      description: project.summary,
    },
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject =
    projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

  return (
    <div className="min-h-screen bg-background text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation & Back Action */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/[0.08]">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-zinc-900 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Header Hero */}
        <div className="space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded">
              {project.category}
            </span>
            {project.demoBadge && (
              <span className="font-mono text-xs text-zinc-300 bg-zinc-800 px-2.5 py-0.5 rounded border border-white/[0.06]">
                {project.demoBadge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Meta */}
          <div className="pt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 text-zinc-300 border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Engineering Spotlight Widget */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-zinc-950/80 shadow-xl shadow-black/40">
          {project.previewType === "pipeline" && project.pipeline && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                  <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                  Satellite &amp; Telemetry Data Pipeline
                </div>
                <div className="text-xs font-mono text-zinc-400">Sequential Architecture</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.pipeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05] space-y-1.5"
                  >
                    <div className="font-mono text-[11px] text-cyan-400">STAGE 0{idx + 1}</div>
                    <div className="text-sm font-bold text-white">{step.title}</div>
                    <div className="text-xs text-indigo-300 font-medium">{step.description}</div>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.previewType === "dashboard" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  DeFi Risk Analytics Engine
                </div>
                <div className="text-xs font-mono text-emerald-400">Solana Telemetry Live</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-xs font-mono text-zinc-400 uppercase">ML Safety Score</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">92 / 100</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Multi-factor evaluation blending on-chain volatility and sentiment.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-xs font-mono text-zinc-400 uppercase">FinBERT Sentiment</div>
                  <div className="text-2xl font-bold text-sky-400 mt-1">Positive (0.78)</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    NLP analysis across financial discussions and market disclosures.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-xs font-mono text-zinc-400 uppercase">Impermanent Loss</div>
                  <div className="text-2xl font-bold text-indigo-300 mt-1">Simulated</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Dynamic model forecasting divergence against single-asset holding.
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.previewType === "workflow" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                  <Workflow className="w-4 h-4 text-indigo-400" />
                  Enterprise Task Orchestration Lifecycle
                </div>
                <div className="text-xs font-mono text-zinc-400">React + Django REST</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-[11px] font-mono text-zinc-400">PHASE 01</div>
                  <div className="text-sm font-semibold text-white mt-1">Task Creation</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Form validation &amp; payload serialization via Django REST.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-[11px] font-mono text-indigo-400">PHASE 02</div>
                  <div className="text-sm font-semibold text-white mt-1">Assignment</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Department routing and user permission verification.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-[11px] font-mono text-cyan-400">PHASE 03</div>
                  <div className="text-sm font-semibold text-white mt-1">Execution</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Dynamic status updates and progress monitoring hooks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <div className="text-[11px] font-mono text-emerald-400">PHASE 04</div>
                  <div className="text-sm font-semibold text-white mt-1">Completion</div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Feedback integration, verification, and audit closure.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Case Study Body Sections */}
        <div className="space-y-12">
          {/* Overview & Context */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Problem & Solution */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-indigo-400">
                The Problem
              </div>
              <h3 className="text-base font-semibold text-white">Core Challenge</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/[0.08] space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                The Solution
              </div>
              <h3 className="text-base font-semibold text-white">Engineering Approach</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Architecture Points */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              Technical Architecture &amp; System Flow
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {project.architecturePoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06] flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-indigo-400 mt-0.5">[{idx + 1}]</span>
                  <span className="text-sm text-zinc-200 leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Engineering Contributions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              Key Engineering Contributions
            </h2>
            <div className="space-y-3">
              {project.keyContributions.map((contrib, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-200 leading-relaxed">{contrib}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Engineering Challenges
            </h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-amber-500/10 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-amber-400 mt-0.5">•</span>
                  <span className="text-sm text-zinc-300 leading-relaxed">{challenge}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Demonstrated Outcomes */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              Demonstrated Outcomes &amp; Validation
            </h2>
            <div className="space-y-3">
              {project.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-200 leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Project Pagination Controls */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col items-start p-4 rounded-xl border border-white/[0.06] hover:bg-zinc-900/60 hover:border-white/20 transition-all max-w-[48%]"
          >
            <span className="text-xs font-mono text-zinc-400">← PREVIOUS CASE STUDY</span>
            <span className="text-sm font-semibold text-zinc-200 group-hover:text-white mt-1 truncate max-w-full">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col items-end p-4 rounded-xl border border-white/[0.06] hover:bg-zinc-900/60 hover:border-white/20 transition-all max-w-[48%]"
          >
            <span className="text-xs font-mono text-zinc-400">NEXT CASE STUDY →</span>
            <span className="text-sm font-semibold text-zinc-200 group-hover:text-white mt-1 truncate max-w-full">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
