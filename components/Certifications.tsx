"use client";

import React from "react";
import { CheckCircle, ShieldCheck, Sparkles } from "lucide-react";
import { certificationsData } from "@/data/certifications";

export function Certifications() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Professional Certifications
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            NPTEL &amp; IBM / Coursera Verified
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/[0.08] bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-indigo-500/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-indigo-300 border border-white/[0.06]">
                    {cert.badgeType}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">{cert.issuer}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mt-1">
                  {cert.title}
                </h3>

                {cert.verificationNote && (
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {cert.verificationNote}
                  </p>
                )}
              </div>

              <div className="pt-3 mt-4 border-t border-white/[0.05] flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Curriculum</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
