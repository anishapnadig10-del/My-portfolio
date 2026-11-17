import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  badge?: string;
  funLabel?: string;
  accentGradient?: string;
  badgeColor?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  badge = "Project",
  funLabel = "Made with curiosity 💡",
  accentGradient = "from-[#3B82F6] via-cyan-400 to-purple-500",
  badgeColor = "text-blue-300 bg-blue-500/10 border-blue-500/30",
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0B1020]/90 border border-[#3B82F6]/25 backdrop-blur-md hover:border-[#3B82F6]/60 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Top glowing accent bar on hover */}
      <div
        className={`absolute top-0 left-8 right-8 h-1 rounded-t-full bg-gradient-to-r ${accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div>
        {/* Card Header: Category Badge + Fun Label */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${badgeColor}`}
          >
            {badge}
          </span>

          <span className="text-[11px] font-semibold text-gray-400 group-hover:text-cyan-300 transition-colors">
            {funLabel}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-cyan-200 group-hover:to-blue-300 transition-all">
          {title}
        </h3>

        {/* One-line Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-white/[0.04] border border-[#3B82F6]/20 rounded-lg hover:border-[#3B82F6] hover:text-cyan-300 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View on GitHub Button with playful hover */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-[#3B82F6] border border-[#3B82F6]/40 hover:border-[#3B82F6] px-4 py-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm group/btn"
          >
            {/* GitHub SVG Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>View on GitHub</span>
            <svg
              className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <span className="text-xs text-gray-400 font-medium hidden sm:inline">
            Open Source 🚀
          </span>
        </div>
      </div>
    </div>
  );
}
