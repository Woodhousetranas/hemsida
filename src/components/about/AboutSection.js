// src/components/about/AboutSection.js
"use client";

import styles from "@/styles/theme.module.css";

export default function AboutSection() {
  return (
    <section className={styles.sectionLight}>
      <div className={styles.centeredContent}>
        <h1 className={styles.heading}>About Wood House i Tranås AB</h1>
        <p className={styles.paragraph}>
          Wood House i Tranås AB is a Swedish company renowned for its extensive
          expertise and experience in the table tennis industry. Established in
          the early 1990s, our company has evolved significantly over the years,
          continuously expanding our presence and reputation. Today, as Wood
          House i Tranås AB, we proudly serve as a key player in the
          international table tennis market.
        </p>
        <p className={styles.paragraph}>
          With over 25 years of dedicated experience, we manufacture and
          distribute some of the world's most prestigious table tennis brands –
          Donic, Nittaku, and Yasaka. Our team in Tranås combines traditional
          Swedish craftsmanship with advanced production techniques, delivering
          premium‑quality table tennis blades. Through our international
          partnerships with Germany (Donic) and Japan (Nittaku and Yasaka), we
          continuously drive innovation and excellence.
        </p>
      </div>
    </section>
  );
}
