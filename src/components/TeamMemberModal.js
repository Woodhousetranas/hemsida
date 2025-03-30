"use client";

import Image from "next/image";
import styles from "@/styles/theme.module.css";

export default function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <Image
          src={member.image}
          alt={member.name}
          width={180}
          height={180}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />

        <h2 style={{ fontSize: "1.6rem", marginBottom: "0.3rem" }}>
          {member.name}
        </h2>
        <p style={{ color: "#666", fontWeight: 500, marginBottom: "1rem" }}>
          {member.title}
        </p>

        <p className={styles.paragraph} style={{ marginBottom: "2rem" }}>
          {member.description}
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <a
            href={`mailto:${member.email}`}
            className={styles.btnSecondary}
            style={{ textAlign: "center" }}
          >
            📧 {member.email}
          </a>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              style={{ textAlign: "center" }}
            >
              🔗 LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
