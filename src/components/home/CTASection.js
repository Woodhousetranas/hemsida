"use client";

import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function CTASection() {
  return (
    <section className={styles.sectionDark}>
      <div className={styles.centeredContent}>
        <h2 className={styles.heading}>
          Ready to explore professional quality?
        </h2>
        <p className={styles.paragraph + " " + styles.paragraphLight}>
          Dive into the craftsmanship behind Sweden’s finest table tennis
          blades.
        </p>
        <Link href="/production" className={styles.btnPrimary}>
          Explore Our Production →
        </Link>
      </div>
    </section>
  );
}
