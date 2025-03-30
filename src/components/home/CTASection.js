'use client';

import Link from 'next/link';
import styles from '@/styles/theme.module.css';

export default function CTASection() {
  return (
    <section className={styles.sectionDark} style={{ marginBottom: '4rem' }}>
  <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
    <h2 className={styles.heading} style={{ color: '#fff' }}>
      Ready to explore professional quality?
    </h2>
    <p className={styles.paragraph} style={{ color: '#ddd', marginBottom: '2rem' }}>
      Dive into the craftsmanship behind Sweden’s finest table tennis blades.
    </p>
    <Link href="/production" className={styles.btnPrimary}>
      Explore Our Production →
    </Link>
  </div>
</section>
  );
}
