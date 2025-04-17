"use client";

import { useState } from "react";
import styles from "@/styles/theme.module.css";

export default function ProductModal({ product, onClose }) {
  const [activeTab, setActiveTab] = useState("details");

  if (!product) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 style={{ marginBottom: "0.5rem" }}>{product.name}</h2>
        <p
          style={{ color: "#666", fontSize: "0.95rem", marginBottom: "1.5rem" }}
        >
          {product.shortDescription}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          {["details", "specs", "testimonials"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.4rem 1rem",
                border: "none",
                background: activeTab === tab ? "var(--color-accent)" : "#eee",
                color: activeTab === tab ? "#fff" : "#444",
                margin: "0 0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ textAlign: "left", fontSize: "0.95rem", color: "#444" }}>
          {activeTab === "details" && <p>{product.details}</p>}
          {activeTab === "specs" && (
            <ul style={{ paddingLeft: "1rem", listStyle: "disc" }}>
              {product.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          )}
          {activeTab === "testimonials" && (
            <blockquote style={{ fontStyle: "italic", color: "#666" }}>
              {product.testimonial ||
                "“Fantastic feel and control.” – Pro Player"}
            </blockquote>
          )}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a href="mailto:info@woodhouse.se" className={styles.btnPrimary}>
            Contact Us About This Product →
          </a>
        </div>
      </div>
    </div>
  );
}
