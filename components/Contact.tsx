"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  Send,
  Terminal,
  Sparkles,
} from "lucide-react";
import { profileData } from "@/data/profile";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sentState, setSentState] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.socials.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Direct mailto fallback
    const subject = encodeURIComponent(`Engineering Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profileData.socials.email}?subject=${subject}&body=${body}`;

    setSentState(true);
    setTimeout(() => setSentState(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-zinc-950/60 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
            <Terminal className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            I am currently open to software engineering internships, developer roles, and technical collaborations. Whether you have an open position or want to discuss engineering systems, let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Direct Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-sm space-y-4">
              <h3 className="text-base font-semibold text-white">Direct Coordinates</h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${profileData.socials.email}`}
                      className="text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
                    >
                      {profileData.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">PHONE NUMBER</div>
                    <a
                      href={`tel:${profileData.socials.phone.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
                    >
                      {profileData.socials.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  type="button"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center p-3.5 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">BASE LOCATION</div>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                      {profileData.socials.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profiles & Engineering Handles */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/40">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Developer Handles &amp; Profiles
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-950/50 border border-white/[0.06] hover:bg-zinc-800 hover:border-white/20 transition-all text-center"
                >
                  <Github className="w-5 h-5 text-zinc-300 mb-1.5" />
                  <span className="text-xs font-semibold text-white">GitHub</span>
                  <span className="text-[10px] text-zinc-400">Repositories</span>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-950/50 border border-white/[0.06] hover:bg-zinc-800 hover:border-white/20 transition-all text-center"
                >
                  <Linkedin className="w-5 h-5 text-indigo-400 mb-1.5" />
                  <span className="text-xs font-semibold text-white">LinkedIn</span>
                  <span className="text-[10px] text-zinc-400">Professional</span>
                </a>

                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-950/50 border border-white/[0.06] hover:bg-zinc-800 hover:border-white/20 transition-all text-center"
                >
                  <Code2 className="w-5 h-5 text-amber-400 mb-1.5" />
                  <span className="text-xs font-semibold text-white">LeetCode</span>
                  <span className="text-[10px] text-zinc-400">Algorithms</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-sm space-y-4"
            >
              <h3 className="text-base font-semibold text-white">Send Direct Message</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Send a quick note or meeting request directly.
              </p>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5" htmlFor="contact-name">
                  YOUR NAME / ORGANIZATION
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Rivera (Engineering Manager)"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-xs sm:text-sm text-zinc-200 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5" htmlFor="contact-email">
                  YOUR EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-xs sm:text-sm text-zinc-200 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5" htmlFor="contact-message">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project, or opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-white/[0.08] text-xs sm:text-sm text-zinc-200 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-indigo-600/20 active:scale-[0.99]"
              >
                {sentState ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Preparing Email Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
