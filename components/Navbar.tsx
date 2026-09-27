"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown, Terminal, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "experience", "skills", "achievements", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Achievements", href: "/#achievements", id: "achievements" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/#home"
            className="group flex items-center gap-2 text-xs font-mono tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 py-0.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
            <span className="font-bold text-white tracking-widest uppercase group-hover:text-indigo-300 transition-colors">
              PORTFOLIO
            </span>
            <span className="text-zinc-600 font-light">/</span>
            <span className="text-zinc-400 font-normal tracking-wide text-[11px] group-hover:text-zinc-200 transition-colors">
              SHRI VIKRAM
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-zinc-950/50 backdrop-blur-md px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? "text-white bg-white/[0.08] shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Resume CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Shri_Vikram_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-150 active:scale-95 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 border border-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-white bg-indigo-500/15 border-l-2 border-indigo-400"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-900 flex flex-col gap-2">
            <a
              href="/resume.pdf"
              download="Shri_Vikram_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
