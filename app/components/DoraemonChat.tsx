"use client";

import React, { useState, useRef, useEffect } from "react";
import ChatMessage, { MessageItem } from "./ChatMessage";
import {
  getDoraemonResponse,
  SUGGESTED_QUESTIONS,
  ChatAction,
} from "./chatbotResponses";

interface DoraemonChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DoraemonChat({ isOpen, onClose }: DoraemonChatProps) {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: "initial-greeting",
      sender: "doraemon",
      text: "Konnichiwa! 💙 I'm Doraemon, Anisha's 22nd-century portfolio guide!\n\nI can show you her cool projects, inspect her coding skills in C++ & Python, or help you send her a message. What would you like to explore?",
      timestamp: "Just now",
      actions: [
        { label: "🚀 Show Projects", type: "scroll", target: "projects" },
        { label: "✨ View Skills", type: "scroll", target: "about" },
        { label: "📬 Contact Anisha", type: "scroll", target: "contact" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMessage: MessageItem = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate Doraemon searching his 4D pocket & typing response
    setTimeout(() => {
      const response = getDoraemonResponse(query);
      const doraemonMessage: MessageItem = {
        id: "doraemon-" + Date.now(),
        sender: "doraemon",
        text: response.text,
        timestamp: getCurrentTime(),
        actions: response.actions,
      };

      setMessages((prev) => [...prev, doraemonMessage]);
      setIsTyping(false);

      // Auto-trigger scroll if the user explicitly commanded navigation
      if (
        query.toLowerCase().includes("take me to") ||
        query.toLowerCase().includes("scroll to") ||
        query.toLowerCase().includes("go to")
      ) {
        const action = response.actions?.find((a) => a.type === "scroll");
        if (action) {
          executeAction(action);
        }
      }
    }, 650);
  };

  const executeAction = (action: ChatAction) => {
    if (action.type === "scroll") {
      // Dispatch custom guide event so Doraemon plays flying animation
      window.dispatchEvent(
        new CustomEvent("doraemon-guide", { detail: { section: action.target } })
      );

      const element = document.getElementById(action.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // On mobile screens, close the chat window so the visitor can see the target section
      if (window.innerWidth < 640) {
        onClose();
      }
    } else if (action.type === "link") {
      window.open(action.target, "_blank", "noopener,noreferrer");
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "cleared-greeting",
        sender: "doraemon",
        text: "Pocket cleared! ✨ Fresh conversation started. What would you like to know about Anisha's portfolio?",
        timestamp: getCurrentTime(),
        actions: [
          { label: "🚀 Show Projects", type: "scroll", target: "projects" },
          { label: "✨ View Skills", type: "scroll", target: "about" },
        ],
      },
    ]);
    setShowSuggestions(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Doraemon Virtual Assistant Chat Window"
      className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] md:w-[440px] h-[550px] max-h-[82vh] flex flex-col bg-[#0B1020] text-white rounded-3xl border-2 border-[#3B82F6]/40 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.35)] backdrop-blur-2xl overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95"
    >
      {/* 1. Chat Header */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#0B1020] via-[#131b38] to-[#0B1020] border-b border-[#3B82F6]/30 select-none">
        <div className="flex items-center gap-3">
          {/* Doraemon Character Icon */}
          <div className="relative w-10 h-10 rounded-full bg-[#0d162f] border-2 border-[#3B82F6] flex items-center justify-center p-0.5 shadow-md shadow-blue-500/30">
            <img
              src="/images/doraemon.png"
              alt="Doraemon Icon"
              className="w-full h-full object-contain"
            />
            {/* Online Status Indicator */}
            <span
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0B1020] rounded-full shadow-sm"
              title="Online"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>Doraemon Assistant</span>
              <span className="text-[#3B82F6]">💙</span>
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Online &bull; Ready to guide</span>
            </div>
          </div>
        </div>

        {/* Action Controls: Clear Chat & Close */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleClearChat}
            className="p-2 text-xs text-gray-400 hover:text-blue-300 hover:bg-white/5 rounded-xl transition-colors"
            title="Clear Chat"
            aria-label="Clear conversation history"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close chat window"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </div>

      {/* 2. Scrollable Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scroll-smooth">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onActionClick={executeAction}
          />
        ))}

        {/* Typing indicator with 3 animated bouncing dots */}
        {isTyping && (
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-[#0B1020] border border-[#3B82F6]/50 flex items-center justify-center p-0.5">
              <img
                src="/images/doraemon.png"
                alt="Typing"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-[#0B1020] border border-blue-500/30 rounded-bl-sm flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Suggested Questions Chips */}
      {showSuggestions && (
        <div className="px-3 py-2 bg-[#0d152e]/95 border-t border-[#3B82F6]/20">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1">
              <span>💡 Suggested Questions</span>
            </span>
            <button
              type="button"
              onClick={() => setShowSuggestions(false)}
              className="text-[10px] text-gray-400 hover:text-white"
            >
              Hide
            </button>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {SUGGESTED_QUESTIONS.map((question, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(question)}
                className="whitespace-nowrap px-3 py-1.5 text-xs font-semibold bg-[#131d3d] hover:bg-[#3B82F6] text-blue-200 hover:text-white rounded-full border border-[#3B82F6]/35 hover:border-[#3B82F6] transition-all duration-150 flex-shrink-0 active:scale-95 shadow-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. Chat Input & Send Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-[#0B1020] border-t border-[#3B82F6]/25 flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Doraemon about Anisha..."
          className="flex-1 bg-[#101730] border border-[#3B82F6]/35 focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 outline-none placeholder-gray-400 transition-all"
        />

        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="p-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white hover:from-blue-600 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-blue-500/30 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
          aria-label="Send message"
        >
          <svg
            className="w-4 h-4 fill-current transform rotate-45 -translate-y-0.5 translate-x-0.5"
            viewBox="0 0 24 24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
