"use client";

import React from "react";

export default function About() {
  const primarySkills = [
    {
      name: "C++",
      category: "Algorithms & Systems",
      badge: "Primary Weapon ⚡",
      color: "from-blue-600/20 to-cyan-500/20 text-cyan-300 border-[#3B82F6]/40 hover:border-cyan-400 hover:shadow-cyan-500/25",
      dotColor: "bg-cyan-400",
      doraemonNote: "Super fast, like a mini rocket!",
    },
    {
      name: "C",
      category: "Memory & Core Logic",
      badge: "Rock-Solid Foundation 🧱",
      color: "from-indigo-600/20 to-blue-500/20 text-blue-300 border-indigo-500/40 hover:border-blue-400 hover:shadow-blue-500/25",
      dotColor: "bg-blue-400",
      doraemonNote: "Pointer mastery & systems depth!",
    },
    {
      name: "Python",
      category: "Scripting & Automation",
      badge: "Pocket Swiss Knife 🐍",
      color: "from-amber-500/20 to-emerald-500/20 text-amber-300 border-amber-500/40 hover:border-amber-400 hover:shadow-amber-500/25",
      dotColor: "bg-amber-400",
      doraemonNote: "Versatile like a 4D gadget!",
    },
  ];

  const complementarySkills = [
    { name: "Web Development", badge: "Interactive UI 🌐", color: "border-blue-500/30 text-blue-300 hover:border-blue-400 bg-blue-500/10" },
    { name: "Data Structures & Algorithms", badge: "Problem Solving 🧠", color: "border-purple-500/30 text-purple-300 hover:border-purple-400 bg-purple-500/10" },
    { name: "React & Next.js", badge: "Modern Web ⚛️", color: "border-cyan-500/30 text-cyan-300 hover:border-cyan-400 bg-cyan-500/10" },
    { name: "Tailwind CSS", badge: "Speedy Styling 🎨", color: "border-teal-500/30 text-teal-300 hover:border-teal-400 bg-teal-500/10" },
    { name: "HTML5 / CSS3", badge: "Web Basics 📄", color: "border-orange-500/30 text-orange-300 hover:border-orange-400 bg-orange-500/10" },
    { name: "JavaScript / TypeScript", badge: "Typed Code 🛡️", color: "border-yellow-500/30 text-yellow-300 hover:border-yellow-400 bg-yellow-500/10" },
    { name: "Git & GitHub", badge: "Version Control 🐙", color: "border-rose-500/30 text-rose-300 hover:border-rose-400 bg-rose-500/10" },
    { name: "Object-Oriented Programming", badge: "Clean Architecture 📐", color: "border-indigo-500/30 text-indigo-300 hover:border-indigo-400 bg-indigo-500/10" },
  ];

  return (
    <section id="about" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3B82F6]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Floating playful background elements */}
      <div className="absolute top-20 right-[10%] text-2xl text-blue-400/25 animate-sparkle-2 pointer-events-none">🎓</div>
      <div className="absolute bottom-16 left-[5%] text-2xl text-cyan-400/25 animate-sparkle-1 pointer-events-none">💡</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B1020] border border-[#3B82F6]/40 text-[#3B82F6] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>✨ Get to know Anisha</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            A peek into my journey, mindset, and technical toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1020]/90 border border-[#3B82F6]/25 backdrop-blur-md hover:border-[#3B82F6]/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/15 group relative overflow-hidden">
              {/* Subtle decorative corner glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#3B82F6]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-cyan-400 flex items-center justify-center text-white text-xl shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Engineering Undergrad</span>
                  </h3>
                  <p className="text-xs text-[#3B82F6] font-semibold tracking-wide uppercase">
                    Bangalore Institute of Technology (BIT)
                  </p>
                </div>
              </div>

              {/* 2-3 Line Bio with friendly phrasing */}
              <div className="space-y-3.5 text-gray-300 text-base leading-relaxed">
                <p>
                  I am a computer science engineering student studying at{" "}
                  <strong className="text-white font-semibold">BIT in the CSE branch</strong>, deeply
                  interested in coding, solving algorithmic challenges, and building practical projects.
                </p>
                <p>
                  I love turning ideas into real, interactive web applications and pushing myself to
                  learn something new every single day with curiosity and dedication.
                </p>
              </div>

              {/* Playful Highlights & Badges */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#3B82F6]/40 transition-colors">
                  <span className="text-xs text-gray-400 block font-medium">College Campus</span>
                  <span className="text-sm font-bold text-cyan-300">BIT Bangalore 🏛️</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#3B82F6]/40 transition-colors">
                  <span className="text-xs text-gray-400 block font-medium">Department</span>
                  <span className="text-sm font-bold text-blue-300">CSE Branch 💻</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#3B82F6]/40 transition-colors">
                  <span className="text-xs text-gray-400 block font-medium">Secret Gadget</span>
                  <span className="text-sm font-bold text-amber-300">Curiosity &amp; Coffee ☕</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#3B82F6]/40 transition-colors">
                  <span className="text-xs text-gray-400 block font-medium">Daily Mission</span>
                  <span className="text-sm font-bold text-emerald-300">Learn Something New 🚀</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1020]/90 border border-[#3B82F6]/25 backdrop-blur-md hover:border-[#3B82F6]/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/15">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-[#2563EB] flex items-center justify-center text-white text-xl shadow-md shadow-cyan-500/30">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Technical Toolkit</h3>
                    <p className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">
                      Languages &amp; Practical Skills
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary Core Skills: C++, C, Python */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Core Languages (Featured)
                  </h4>
                  <span className="text-[11px] text-[#3B82F6] font-semibold">Doraemon Approved 💙</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {primarySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-2xl bg-gradient-to-br border transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-lg cursor-pointer group ${skill.color}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl font-black text-white">{skill.name}</span>
                        <span className={`w-2.5 h-2.5 rounded-full ${skill.dotColor} animate-pulse`} />
                      </div>
                      <span className="text-xs font-bold block text-white/90 mb-1">{skill.badge}</span>
                      <span className="text-[10px] text-gray-300 block">{skill.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Tags / Chips */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Tools &amp; Modern Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {complementarySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl border backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default flex items-center gap-1.5 ${skill.color}`}
                    >
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
