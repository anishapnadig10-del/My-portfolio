"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section calculation based on scroll position
      const sections = ["contact", "projects", "about", "hero"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    // Dispatch guide event for Doraemon assistant
    window.dispatchEvent(
      new CustomEvent("doraemon-guide", { detail: { section: sectionId } })
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1020]/95 backdrop-blur-md border-b border-[#3B82F6]/20 shadow-lg shadow-black/60 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name with Playful Doraemon Bell & Gadget Touch */}
          <a
            href="#"
            onClick={() => handleNavClick("hero")}
            className="group flex items-center space-x-2 text-2xl font-black tracking-tight text-white transition-all duration-200"
          >
            <div className="relative flex items-center">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:opacity-90">
                Anisha
              </span>
              {/* Cute mini golden bell / gadget indicator */}
              <span
                className="inline-flex items-center justify-center w-5 h-5 ml-1.5 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-[10px] shadow-sm shadow-yellow-500/50 group-hover:rotate-12 transition-transform duration-200"
                title="Doraemon Gadget Bell"
              >
                🔔
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Active Section Highlighting */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "text-white bg-[#3B82F6]/15 border border-[#3B82F6]/40 shadow-sm shadow-blue-500/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Subtle active / hover underline */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-cyan-400 transition-all duration-200 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}

            {/* Quick action button */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="ml-3 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-blue-600 hover:to-blue-500 rounded-full transition-all duration-200 shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Let&apos;s Talk</span>
              <span>✨</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors border border-white/10"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#3B82F6]/20 bg-[#0B1020]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-[#3B82F6]/30">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2.5 text-base font-semibold rounded-xl transition-all ${
                      isActive
                        ? "text-white bg-[#3B82F6]/20 border border-[#3B82F6]/40"
                        : "text-gray-200 hover:text-cyan-400 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="mt-2 text-center px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl hover:from-blue-600 hover:to-blue-500 transition-all shadow-md shadow-blue-500/30"
              >
                Contact Me 📬
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
