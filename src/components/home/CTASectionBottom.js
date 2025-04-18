// src/components/home/CTASectionBottom.js
"use client";

import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function CTASectionBottom() {
  return (
    <section className={styles.sectionLight}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.heading}>Let’s Talk Table Tennis</h2>
        <p className={styles.paragraph}>
          Whether you’re looking for a long-term partnership or just want to
          learn more about what we do — we’re happy to hear from you.
        </p>
        <Link href="/contact" className={styles.btnPrimary}>
          Contact Us via Email →
        </Link>
      </div>
    </section>
  );
}
