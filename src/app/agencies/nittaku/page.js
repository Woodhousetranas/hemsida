"use client";

import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function NittakuPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <h1 className={styles.heading}>Nittaku</h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}
          >
            <strong>Japanese precision. Olympic performance.</strong>
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}
        >
          <p className={styles.paragraph}>
            Nittaku is a premium Japanese brand known for exceptional
            craftsmanship and global recognition. Their competition-grade balls
            are frequently used at World Championships and Olympic Games. Their
            rubbers and blades are trusted by elite players around the world.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY & DISTRIBUTION */}
      <section className={styles.sectionDark}>
        <div
          style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}
        >
          <p
            className={styles.paragraph}
            style={{ color: "var(--color-white)" }}
          >
            As the official Nittaku agent in Scandinavia, we ensure local
            support and fast logistics. Products like the Violin and Acoustic
            blade series reach passionate players who value precision, quality,
            and performance.
          </p>
        </div>
      </section>

      {/* PRODUCT STRENGTHS */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}
        >
          <h2 className={styles.heading}>Why Players Choose Nittaku</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <li className={styles.tile}>
              <strong>Competition Balls</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                Used in Olympics and World Championships for unmatched
                consistency.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Violin & Acoustic Blades</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                Crafted with musical wood technology for feel and precision.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Japanese Excellence</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                Meticulously engineered for professional-level play.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sectionLight}>
        <div style={{ textAlign: "center", paddingTop: "1rem" }}>
          <Link href="https://www.nittaku.com/" className={styles.btnPrimary}>
            Visit Nittaku.com →
          </Link>
        </div>
      </section>
    </>
  );
}
