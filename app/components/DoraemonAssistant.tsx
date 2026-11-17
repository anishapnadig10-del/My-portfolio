"use client";

import React, { useState, useEffect, useRef } from "react";
import DoraemonChat from "./DoraemonChat";
import { SECTION_COMMENTS, IDLE_SPEECH_MESSAGES } from "./chatbotResponses";

export default function DoraemonAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [isWiggling, setIsWiggling] = useState(false);
  const [isGuiding, setIsGuiding] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("hero");
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const [showSparkles, setShowSparkles] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSectionRef = useRef<string>("hero");
  const commentIndexMapRef = useRef<Record<string, number>>({
    hero: 0,
    about: 0,
    projects: 0,
    contact: 0,
  });

  const showBubbleWithTimeout = (text: string, durationMs: number = 6500) => {
    if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
    setSpeechBubble(text);
    bubbleTimeoutRef.current = setTimeout(() => {
      setSpeechBubble(null);
    }, durationMs);
  };

  useEffect(() => {
    setIsMounted(true);

    // Initial Welcome Message
    const welcomeTimer = setTimeout(() => {
      showBubbleWithTimeout(
        "Hey there! I'm Doraemon! 💙 Need help exploring this portfolio?",
        8000
      );
    }, 1200);

    return () => {
      clearTimeout(welcomeTimer);
      if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
    };
  }, []);

  // 1. Detect scroll position & active section using IntersectionObserver
  useEffect(() => {
    if (!isMounted) return;

    const sections = ["hero", "about", "projects", "contact"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setCurrentSection(sectionId);

            // If entering a new section while chat is closed, display a contextual comment
            if (sectionId !== lastSectionRef.current && !isOpen) {
              lastSectionRef.current = sectionId;
              const comments = SECTION_COMMENTS[sectionId] || [];
              if (comments.length > 0) {
                const idx = commentIndexMapRef.current[sectionId] % comments.length;
                commentIndexMapRef.current[sectionId]++;
                showBubbleWithTimeout(comments[idx], 6000);
              }
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isMounted, isOpen]);

  // 2. Listen to custom navigation "doraemon-guide" events
  useEffect(() => {
    const handleGuideEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ section: string }>;
      const targetSection = customEvent.detail?.section || "projects";

      setIsGuiding(true);
      setShowSparkles(true);

      const guidePhrases: Record<string, string> = {
        about: "Vroom! 🚁 Flying over to the About section to meet Anisha!",
        projects: "Anywhere Door opened! 🚪 Let's inspect her awesome projects!",
        contact: "Zooming down to Contact! 📬 Faster than a Time Machine!",
      };

      showBubbleWithTimeout(
        guidePhrases[targetSection] || `Guiding you right to ${targetSection}! 🚀`,
        5500
      );

      setTimeout(() => {
        setIsGuiding(false);
        setShowSparkles(false);
      }, 2200);
    };

    window.addEventListener("doraemon-guide", handleGuideEvent);
    return () => window.removeEventListener("doraemon-guide", handleGuideEvent);
  }, []);

  // 3. Random idle chatter when closed and user is inactive
  useEffect(() => {
    if (!isMounted || isOpen) return;

    let chatterIndex = 0;
    const interval = setInterval(() => {
      if (!isOpen && !speechBubble && Math.random() > 0.25) {
        const msg = IDLE_SPEECH_MESSAGES[chatterIndex % IDLE_SPEECH_MESSAGES.length];
        chatterIndex++;
        showBubbleWithTimeout(msg, 6000);
      }
    }, 24000);

    return () => clearInterval(interval);
  }, [isOpen, isMounted, speechBubble]);

  const handleDoraemonClick = () => {
    // Joyful wiggle animation & sparkle burst
    setIsWiggling(true);
    setShowSparkles(true);
    setTimeout(() => {
      setIsWiggling(false);
      setShowSparkles(false);
    }, 600);

    setIsOpen((prev) => !prev);
    setSpeechBubble(null);
    setHasNewNotification(false);
  };

  const handleDismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSpeechBubble(null);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Interactive Chat Window */}
      <DoraemonChat isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Floating Doraemon Guide Container (Bottom-Right) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end select-none pointer-events-none">
        {/* Playful Contextual Speech Bubble */}
        {speechBubble && !isOpen && (
          <div
            onClick={handleDoraemonClick}
            className="pointer-events-auto mb-3 max-w-[250px] sm:max-w-[310px] p-3 sm:p-3.5 bg-[#0B1020]/95 text-white text-xs sm:text-sm font-medium rounded-2xl rounded-br-none border-2 border-[#3B82F6]/60 shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(59,130,246,0.35)] backdrop-blur-xl cursor-pointer hover:border-[#3B82F6] hover:scale-105 active:scale-95 transition-all duration-200 animate-in fade-in slide-in-from-bottom-3 relative group"
            role="status"
            aria-live="polite"
          >
            {/* Dismiss button */}
            <button
              type="button"
              onClick={handleDismissBubble}
              className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white flex items-center justify-center text-[11px] transition-colors"
              title="Dismiss comment"
            >
              &times;
            </button>

            <div className="pr-4">
              <p className="leading-snug text-gray-100">{speechBubble}</p>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#3B82F6] font-bold mt-1.5 group-hover:text-cyan-300 transition-colors">
                <span>Click Doraemon to chat!</span>
                <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </span>
            </div>

            {/* Bubble Tail pointing to Doraemon */}
            <div className="absolute -bottom-2.5 right-6 sm:right-8 w-0 h-0 border-l-[9px] border-l-transparent border-t-[9px] border-t-[#0B1020] border-r-[9px] border-r-transparent filter drop-shadow(0 2px 3px rgba(0,0,0,0.6))" />
          </div>
        )}

        {/* Floating Doraemon Sticker Button (Slightly Bigger, Noticeable & Interactive) */}
        <div className="relative pointer-events-auto">
          {/* Sparkles on click or during guide mode */}
          {showSparkles && (
            <div className="absolute -inset-4 pointer-events-none flex items-center justify-center">
              <span className="absolute -top-3 left-2 text-cyan-300 text-lg animate-ping">✨</span>
              <span className="absolute -top-2 right-4 text-yellow-300 text-base animate-bounce">🌟</span>
              <span className="absolute bottom-1 -left-3 text-pink-400 text-sm animate-pulse">💙</span>
            </div>
          )}

          <button
            type="button"
            onClick={handleDoraemonClick}
            aria-label={isOpen ? "Close Doraemon Assistant" : "Open Doraemon Assistant"}
            aria-expanded={isOpen}
            className={`relative group p-1 rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060608] transition-transform duration-300 ${
              isWiggling ? "animate-doraemon-wiggle" : "hover:scale-110 active:scale-95"
            }`}
          >
            {/* Ambient Electric Blue Aura */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-300 pointer-events-none ${
                isGuiding
                  ? "bg-[#3B82F6]/60 blur-2xl scale-125"
                  : "bg-[#3B82F6]/30 blur-xl group-hover:bg-[#3B82F6]/55 group-hover:scale-110"
              }`}
            />

            {/* Animation Wrapper: Floating or Guiding Flying */}
            <div
              className={`relative ${
                isGuiding ? "animate-doraemon-guide" : "animate-doraemon-float"
              }`}
            >
              {/* Cute Little Bamboo-Copter Gadget on Head */}
              <div
                className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-300 ${
                  isGuiding ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="relative flex flex-col items-center">
                  {/* Propeller Blade */}
                  <div
                    className={`w-10 h-1.5 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 shadow-md ${
                      isGuiding ? "animate-propeller" : "animate-spin [animation-duration:2s]"
                    }`}
                  />
                  {/* Stem */}
                  <div className="w-1 h-2.5 bg-yellow-500 rounded-b" />
                </div>
              </div>

              {/* Doraemon Character Image (Noticeable, responsive size) */}
              <img
                src="/images/doraemon.png"
                alt="Doraemon Portfolio Guide"
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_12px_20px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:drop-shadow-[0_16px_30px_rgba(59,130,246,0.7)]"
                loading="eager"
              />

              {/* Notification Badge Dot */}
              {hasNewNotification && !isOpen && (
                <span className="absolute top-2 right-2 sm:top-3 sm:right-3 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-blue-500 to-cyan-400 border-2 border-[#0B1020] shadow-md shadow-blue-500/50" />
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
