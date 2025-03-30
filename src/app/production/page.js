"use client";

import Image from "next/image";
import styles from "@/styles/theme.module.css";

export default function ProductionPage() {
  return (
    <main className={styles.sectionLight}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h1 className={styles.heading}>Our Production</h1>
        <p className={styles.paragraph}>
          At Wood House AB, Swedish craftsmanship meets precision technology.
          From raw wood to world-class blades, our facility ensures every detail
          is perfected.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.8rem",
          maxWidth: "1000px",
          margin: "3rem auto",
        }}
      >
        {[
          { src: "/images/production1.jpg", alt: "Cutting wood" },
          { src: "/images/production2.jpg", alt: "Detail work" },
          { src: "/images/production3.jpg", alt: "Gluing layers" },
          { src: "/images/falck-ponti.jpg", alt: "Mattias Falck with Ponti" },
        ].map((img) => (
          <div
            key={img.src}
            style={{
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <p className={styles.paragraph}>
          We are proud to be the production engine behind leading brands like
          Yasaka, Donic and Nittaku. Every blade we deliver is a result of
          generations of experience and a deep passion for table tennis.
        </p>
      </div>
    </main>
  );
}
