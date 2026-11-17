import React from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "AlgoVisualizer",
      description:
        "Interactive algorithm visualizer showcasing sorting routines, graph traversal logic, and step-by-step memory playback.",
      techStack: ["C++", "Python", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/anishapnadig10-del/algo-visualizer",
      badge: "Algorithms & Web",
      funLabel: "Made with curiosity 💡",
      accentGradient: "from-[#3B82F6] via-cyan-400 to-blue-600",
      badgeColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "CodeForge Playground",
      description:
        "Lightweight coding sandbox and execution environment designed for students to write, compile, and debug C/C++ in real-time.",
      techStack: ["C", "C++", "Python", "Next.js", "Docker"],
      githubUrl: "https://github.com/anishapnadig10-del/codeforge-sandbox",
      badge: "Systems & Sandbox",
      funLabel: "Built with late-night logic ⚡",
      accentGradient: "from-blue-500 via-indigo-500 to-purple-500",
      badgeColor: "text-blue-300 bg-blue-500/10 border-blue-500/30",
    },
    {
      title: "CampusConnect Hub",
      description:
        "Community-driven collaborative portal for BIT CSE students to share study notes, track project repositories, and organize coding sessions.",
      techStack: ["Python", "FastAPI", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/anishapnadig10-del/campus-connect",
      badge: "Full Stack Web",
      funLabel: "Campus Favorite 🌟",
      accentGradient: "from-amber-400 via-pink-500 to-[#3B82F6]",
      badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/30",
    },
  ];

  return (
    <section id="projects" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#3B82F6]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Floating sparkles */}
      <div className="absolute top-16 left-[8%] text-2xl text-blue-400/20 animate-sparkle-1 pointer-events-none">🚀</div>
      <div className="absolute bottom-12 right-[8%] text-2xl text-cyan-400/20 animate-sparkle-3 pointer-events-none">💻</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B1020] border border-[#3B82F6]/40 text-[#3B82F6] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>🚀 Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Hand-crafted with clean code, algorithmic logic, and a passion for learning new technologies.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              badge={project.badge}
              funLabel={project.funLabel}
              accentGradient={project.accentGradient}
              badgeColor={project.badgeColor}
            />
          ))}
        </div>

        {/* Bottom GitHub CTA link with Doraemon encouragement */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/anishapnadig10-del"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-gray-200 hover:text-white bg-[#0B1020]/90 hover:bg-[#3B82F6] border border-[#3B82F6]/40 hover:border-[#3B82F6] px-6 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/15 group"
          >
            <span>Explore more repositories on GitHub</span>
            <span className="text-[#3B82F6] group-hover:text-white transition-colors">🐙</span>
            <svg
              className="w-4 h-4 text-cyan-400 group-hover:text-white group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
