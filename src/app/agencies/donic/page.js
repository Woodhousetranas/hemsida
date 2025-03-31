"use client";

import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function DonicPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <h1 className={styles.heading}>Donic</h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}
          >
            <strong>German engineering meets world-class champions.</strong>
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}
        >
          <p className={styles.paragraph}>
            Donic is a world-renowned German table tennis brand celebrated for
            innovation and a complete product range catering to players of all
            levels. Established in the 1970s, Donic's elite reputation is
            reinforced by close collaborations with legendary Swedish champions
            like Jan-Ove Waldner and Jörgen Persson.
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
            As the official agent of Donic in Scandinavia, we provide seamless
            logistics, storage, and marketing. Scandinavian retailers and clubs
            rely on us to access Donic’s acclaimed Original Senso blade series
            and Formula DONIC rubbers with built-in speed glue effect.
          </p>
        </div>
      </section>

      {/* PRODUCT STRENGTHS */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}
        >
          <h2 className={styles.heading}>Why Players Choose Donic</h2>
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
              <strong>Original Senso Series</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                A top choice for competitive players seeking control and power.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Formula Donic</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                Advanced rubbers with built-in speed glue effect.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Champions' Legacy</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                Trusted by Waldner, Persson, and generations of elite players.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sectionLight}>
        <div style={{ textAlign: "center", paddingTop: "1rem" }}>
          <Link href="https://www.donic.com/" className={styles.btnPrimary}>
            Visit Donic.com →
          </Link>
        </div>
      </section>
    </>
  );
}
