"use client";

import Image from "next/image";
import styles from "@/styles/theme.module.css";

export default function ProductionPage() {
  return (
    <main className={styles.sectionLight}>
      <h1 className={styles.heading}>Our Production Process</h1>

      <p className={styles.paragraph}>
        At Wood House AB, we combine traditional craftsmanship with modern
        technology to produce high-quality table tennis blades. Our production
        process involves meticulous selection of materials, precision
        engineering, and rigorous quality control to ensure each blade meets
        professional standards.
      </p>

      <p className={styles.paragraph}>
        We take pride in our sustainable practices and commitment to excellence,
        making our products the preferred choice for top brands and players
        worldwide.
      </p>

      <div className={styles.imageGrid}>
        <Image
          src="/images/production1.jpg"
          alt="Blade preparation"
          width={400}
          height={300}
          className={styles.productionImage}
        />
        <Image
          src="/images/production2.jpg"
          alt="Precision craftsmanship"
          width={400}
          height={300}
          className={styles.productionImage}
        />
        <Image
          src="/images/production3.jpg"
          alt="Final blade inspection"
          width={400}
          height={300}
          className={styles.productionImage}
        />
      </div>
    </main>
  );
}
