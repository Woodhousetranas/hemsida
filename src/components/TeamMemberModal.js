"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import styles from "@/styles/theme.module.css";

export default function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />

        <h2 style={{ marginBottom: "0.3rem", fontSize: "1.6rem" }}>
          {member.name}
        </h2>
        <p style={{ color: "#666", marginBottom: "1rem" }}>{member.title}</p>

        <p
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            marginBottom: "1.5rem",
          }}
        >
          {member.description}
        </p>

        <div
          style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}
        >
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              style={{
                color: "var(--color-accent)",
                fontSize: "1.5rem",
                transition: "transform 0.2s ease",
              }}
              title="Email"
            >
              <FaEnvelope />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-accent)",
                fontSize: "1.5rem",
                transition: "transform 0.2s ease",
              }}
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
