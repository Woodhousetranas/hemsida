"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/theme.module.css";

export default function YasakaPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <h1 className={styles.heading}>Yasaka</h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}
          >
            <strong>Japanese innovation meets Swedish craftsmanship.</strong>
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}
        >
          <p className={styles.paragraph}>
            Yasaka combines legendary Japanese innovation with premium Swedish
            craftsmanship. Established in 1947 and renowned for their
            groundbreaking Mark V rubber, Yasaka continues to innovate with
            top-quality products like the Rakza series rubbers and a wide
            selection of blades meticulously crafted at our Tranås facility.
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
            As the exclusive distributor for Yasaka across Europe, we maintain a
            robust network, providing swift and efficient access to retailers
            and clubs. This ensures Yasaka remains a trusted and preferred
            choice for both amateur and professional players throughout the
            continent.
          </p>
        </div>
      </section>

      {/* PRODUCT STRENGTHS */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}
        >
          <h2 className={styles.heading}>Why Players Choose Yasaka</h2>
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
              <strong>Rakza Series</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                Easy-to-play high performance rubbers trusted by pros and
                amateurs.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Made in Tranås</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                Blades built with precision and pride in Sweden.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Mark V Legacy</strong>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                A true classic still used around the world by loyal fans.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sectionLight}>
        <div style={{ textAlign: "center", paddingTop: "1rem" }}>
          <Link
            href="https://yasakatabletennis.com"
            className={styles.btnPrimary}
          >
            Visit YasakaTableTennis.com →
          </Link>
        </div>
      </section>
    </>
  );
}
