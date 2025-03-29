'use client';

import Link from 'next/link';
import styles from '@/styles/theme.module.css';

export default function CTASection() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <h2 className={styles.heading}>Ready to explore professional quality?</h2>

      <p className={styles.paragraph}>
        Discover our full production process and learn how Wood House AB crafts blades
        for some of the world’s best table tennis brands.
      </p>

      <Link href="/production" className={styles.btnPrimary}>
        Visit Production →
      </Link>
    </section>
  );
}
