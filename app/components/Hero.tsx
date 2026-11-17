"use client";

import React from "react";

export default function Hero() {
  const triggerGuide = (target: string) => {
    window.dispatchEvent(
      new CustomEvent("doraemon-guide", { detail: { section: target } })
    );
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Midnight Navy & Electric Blue Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[380px] sm:h-[480px] bg-gradient-to-tr from-[#3B82F6]/25 via-purple-600/20 to-cyan-400/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/15 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Floating Sparkles & Stars */}
      <div className="absolute top-24 left-[12%] text-blue-400/50 text-xl animate-sparkle-1 pointer-events-none">✨</div>
      <div className="absolute top-36 right-[15%] text-cyan-300/40 text-2xl animate-sparkle-2 pointer-events-none">⭐</div>
      <div className="absolute bottom-28 left-[20%] text-yellow-300/40 text-lg animate-sparkle-3 pointer-events-none">🌟</div>
      <div className="absolute bottom-36 right-[22%] text-pink-400/40 text-xl animate-sparkle-1 pointer-events-none">✨</div>

      {/* Decorative subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Playful Gadget Badge: Anywhere Door Active */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1020]/90 border border-[#3B82F6]/40 backdrop-blur-md mb-8 hover:border-[#3B82F6] hover:scale-105 transition-all duration-300 shadow-md shadow-blue-500/15 cursor-default group">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-200">
            🚪 Anywhere Door: Active &bull; Exploring Anisha&apos;s Portfolio
          </span>
          <span className="text-xs group-hover:rotate-12 transition-transform">✨</span>
        </div>

        {/* Large Name with Bold Gradient Typography */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="text-white block sm:inline">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent inline-block hover:scale-[1.03] transition-transform duration-300 cursor-default">
            Anisha
          </span>
        </h1>

        {/* One-line Intro */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium max-w-3xl mx-auto mb-6 leading-relaxed">
          &ldquo;CS student who loves building web apps and wants to learn something new everyday&rdquo;
        </p>

        {/* College & Department Subtitle with Playful Gadget Micro-Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-sm sm:text-base text-gray-400 font-normal mb-10">
          <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold bg-[#0B1020]/90 border border-cyan-800/50 px-3.5 py-1.5 rounded-full shadow-sm hover:scale-105 transition-transform">
            <svg
              className="w-4 h-4 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            BIT &bull; CSE Branch
          </span>

          <span className="inline-flex items-center gap-1.5 text-purple-300 font-semibold bg-[#0B1020]/90 border border-purple-800/50 px-3.5 py-1.5 rounded-full shadow-sm hover:scale-105 transition-transform">
            <span>⚡ Problem Solver &amp; Web Builder</span>
          </span>

          <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold bg-[#0B1020]/90 border border-amber-800/50 px-3.5 py-1.5 rounded-full shadow-sm hover:scale-105 transition-transform">
            <span>🤖 Doraemon Guided</span>
          </span>
        </div>

        {/* Two Animated Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Button 1: View my work -> scrolls to Projects */}
          <a
            href="#projects"
            onClick={() => triggerGuide("projects")}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-[#2563EB] via-blue-600 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>View my work</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>

          {/* Button 2: Contact me -> scrolls to Contact */}
          <a
            href="#contact"
            onClick={() => triggerGuide("contact")}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-gray-200 bg-[#0B1020]/90 hover:text-white hover:bg-[#111936] border border-[#3B82F6]/40 hover:border-[#3B82F6] rounded-2xl backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Contact me</span>
            <svg
              className="w-4 h-4 text-[#3B82F6] group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
