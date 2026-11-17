"use client";

import React from "react";
import { ChatAction } from "./chatbotResponses";

export interface MessageItem {
  id: string;
  sender: "doraemon" | "user";
  text: string;
  timestamp: string;
  actions?: ChatAction[];
}

interface ChatMessageProps {
  message: MessageItem;
  onActionClick: (action: ChatAction) => void;
}

export default function ChatMessage({ message, onActionClick }: ChatMessageProps) {
  const isDoraemon = message.sender === "doraemon";

  return (
    <div
      className={`flex w-full mb-3.5 items-end gap-2 ${
        isDoraemon ? "justify-start" : "justify-end"
      }`}
    >
      {/* Doraemon Avatar Thumbnail */}
      {isDoraemon && (
        <div className="w-8 h-8 rounded-full bg-[#0B1020] border-2 border-[#3B82F6] flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md shadow-blue-500/20">
          <img
            src="/images/doraemon.png"
            alt="Doraemon"
            className="w-full h-full object-contain p-0.5"
            onError={(e) => {
              // Graceful fallback if image is loading or missing
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      {/* Message Bubble Container */}
      <div
        className={`flex flex-col max-w-[82%] sm:max-w-[78%] ${
          isDoraemon ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-md ${
            isDoraemon
              ? "bg-[#0B1020] text-gray-100 border border-blue-500/30 rounded-bl-sm shadow-blue-900/10"
              : "bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-br-sm shadow-blue-600/25"
          }`}
        >
          {message.text}
        </div>

        {/* Action Buttons (for Doraemon messages that offer links or scrolling) */}
        {isDoraemon && message.actions && message.actions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {message.actions.map((act, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onActionClick(act)}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-[#111936] text-blue-300 border border-[#3B82F6]/40 hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
              >
                {act.label}
              </button>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <span className="text-[10px] text-gray-400 mt-1 px-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}
