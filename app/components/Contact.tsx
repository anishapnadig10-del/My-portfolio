"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [copied, setCopied] = useState(false);

  const emailAddress = "anishapnadig10@gmail.com";
  const githubUrl = "https://github.com/anishapnadig10-del";
  const linkedinUrl = "https://linkedin.com/in/anishapnadig10-del";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate UI submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[420px] bg-gradient-to-r from-[#3B82F6]/20 via-cyan-500/15 to-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Floating sparkles */}
      <div className="absolute top-20 right-[15%] text-2xl text-blue-400/20 animate-sparkle-2 pointer-events-none">📬</div>
      <div className="absolute bottom-16 left-[12%] text-2xl text-cyan-400/20 animate-sparkle-1 pointer-events-none">✨</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B1020] border border-[#3B82F6]/40 text-[#3B82F6] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span>📬 Say Hello</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Faster than sending a letter through a Time Machine! Whether you have an internship opportunity, a project idea, or just want to talk tech, feel free to drop a message! ⏳✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-bold text-white">Direct Connect</h3>
              <span className="text-xs text-blue-400 font-semibold">Open to opportunities 🚀</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              I&apos;m always excited to connect with developers, tech mentors, recruiters, and fellow students.
            </p>

            {/* Email Card with 1-click copy */}
            <div className="p-5 rounded-3xl bg-[#0B1020]/90 border border-[#3B82F6]/30 backdrop-blur-md hover:border-[#3B82F6] transition-all duration-300 shadow-md group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center text-[#3B82F6] text-xl group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block">Email</span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-bold rounded-xl bg-white/5 hover:bg-[#3B82F6] text-gray-200 hover:text-white border border-[#3B82F6]/40 transition-all hover:scale-105 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-[#0B1020]/90 border border-[#3B82F6]/30 backdrop-blur-md hover:border-purple-400 transition-all duration-300 flex items-center justify-between group block hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/15"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/40 flex items-center justify-center text-purple-400 text-xl group-hover:scale-110 transition-transform">
                  🐙
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block">GitHub</span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    anishapnadig10-del
                  </span>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-[#0B1020]/90 border border-[#3B82F6]/30 backdrop-blur-md hover:border-cyan-400 transition-all duration-300 flex items-center justify-between group block hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/15"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                  💼
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block">LinkedIn</span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    anishapnadig10-del
                  </span>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Column: Welcoming Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1020]/95 border-2 border-[#3B82F6]/35 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-2xl font-black text-white mb-1 flex items-center gap-2">
                <span>Send a Message</span>
                <span className="text-[#3B82F6]">💬</span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill out the form below and I&apos;ll get back to you promptly!
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 shadow-md animate-in fade-in">
                  <svg className="w-6 h-6 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Thank you! Your message has been prepared. Anisha will get back to you soon! ✨</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Nobita Nobi"
                    className="w-full px-4 py-3 rounded-xl bg-[#101730] border border-[#3B82F6]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-sm"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. nobita@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#101730] border border-[#3B82F6]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-sm"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Say hello, share an internship role, or ask about a project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#101730] border border-[#3B82F6]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all text-sm resize-none"
                  />
                </div>

                {/* Send Button with satisfying feedback */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-blue-600 hover:to-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message 🚀</span>
                      <svg
                        className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform"
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
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
