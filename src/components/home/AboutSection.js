'use client';

import styles from '@/styles/theme.module.css';

export default function AboutSection() {
  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="about">
      <h2 className={styles.heading}>About Wood House AB</h2>

      <p className={styles.paragraph}>
        Wood House AB is a Swedish manufacturer of high-performance table tennis blades.
        We are proud producers behind some of the most respected brands in the sport:
        <strong> Yasaka</strong>, <strong> Donic</strong>, and
        <strong> Nittaku</strong>. Our mission is to combine tradition, innovation,
        and world-class materials to craft blades trusted by players at every level.
      </p>
    </section>
  );
}
