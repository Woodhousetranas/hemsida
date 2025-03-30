"use client";

import { useState } from "react";
import styles from "./Chatbot.module.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! 👋 What can I help you with today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Fake bot reply for now
    const botMessage = {
      role: "bot",
      content:
        "Thanks! I'm still learning, but soon I’ll help you find the perfect blade!",
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatbox}>
          <div className={styles.header}>
            <span>🤖 Wood House Assistant</span>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.role === "user" ? styles.userMsg : styles.botMsg}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <button className={styles.chatButton} onClick={toggleChat}>
        💬
      </button>
    </div>
  );
}
