"use client";

import { useState, useRef, useEffect } from "react";

const AI_REPLIES = {
  "book an appointment": "Sure! What date and time works best for you? I can check availability right away.",
  "get a quote": "Happy to help with a quote. What service do you need — plumbing, HVAC, or something else?",
  "talk to a human": "Connecting you to a live agent now. Average wait time is under 2 minutes.",
};

const DEFAULT_REPLY = "Got it! Let me look into that for you. One moment...";

const QUICK_REPLIES = ["Book appointment", "Get a quote", "Talk to agent"];

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi! I'm Smart-Chat, your AI assistant. How can I help your business today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: msg },
    ]);

    // Show typing indicator
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const key = msg.toLowerCase();
      const reply = AI_REPLIES[key] || DEFAULT_REPLY;
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "ai", text: reply },
      ]);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="mx-auto max-w-[480px] bg-white border border-green-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-green-50 border-b border-green-100">
        <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
          SC
        </div>
        <div>
          <p className="text-sm font-medium text-black">Smart-Chat AI Assistant</p>
          <p className="text-xs text-green-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Online now
          </p>
        </div>
      </div>

      {/* Chat Body */}
      <div
        ref={bodyRef}
        className="flex flex-col gap-3 px-4 py-4 min-h-[220px] max-h-[320px] overflow-y-auto bg-white"
      >
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-medium
                ${msg.sender === "ai"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500 border border-gray-200"
                }`}
            >
              {msg.sender === "ai" ? "SC" : "U"}
            </div>

            {/* Bubble + Quick Replies */}
            <div className={`flex flex-col gap-2 ${msg.sender === "user" ? "items-end" : "items-start"}`}>
              <div
                className={`max-w-[72%] px-3 py-2 text-sm leading-relaxed
                  ${msg.sender === "ai"
                    ? "bg-green-50 text-black border border-green-100 rounded-2xl rounded-bl-sm"
                    : "bg-black text-white rounded-2xl rounded-br-sm text-center pr-5"
                  }`}
              >
                {msg.text}
              </div>

              {/* Quick replies only on first AI message */}
              {msg.sender === "ai" && idx === 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => sendMessage(qr)}
                      className="text-xs px-3 py-1.5 border border-green-200 rounded-full bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[11px] font-medium flex-shrink-0">
              SC
            </div>
            <div className="px-4 py-3 bg-green-50 border border-green-100 rounded-2xl rounded-bl-sm flex gap-1 items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-green-100 bg-green-50/50">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 bg-transparent outline-none text-sm text-black placeholder-gray-400"
        />
        <button
          onClick={() => sendMessage()}
          className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
