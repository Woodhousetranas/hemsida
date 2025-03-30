"use client";

import styles from "@/styles/theme.module.css";

export default function AboutSection() {
  return (
    <section className={styles.sectionLight}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 className={styles.heading}>About Wood House AB</h2>
        <p className={styles.paragraph}>
          Wood House AB is a Swedish manufacturer of high-performance table
          tennis blades. We proudly produce blades for some of the most
          respected brands in the sport:
          <strong> Yasaka, Donic, and Nittaku.</strong>
          <br />
          <br />
          Our mission is to blend tradition, cutting-edge technology and
          world-class materials to craft blades that meet the highest standards
          for professional play.
        </p>
      </div>
    </section>
  );
}
