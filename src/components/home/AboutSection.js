'use client';

import styles from '@/styles/theme.module.css';

export default function AboutSection() {
  return (
    <div className={styles.sectionLight}>
  <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
    <h2 className={styles.heading}>About Us</h2>
  </div>
  <p className={styles.paragraph} style={{ maxWidth: '800px', margin: '0 auto' }}>
    Wood House AB is a Swedish premium blade manufacturer, crafting high-quality table tennis products for brands like Yasaka, Donic, and Nittaku.
  </p>
</div>
    </section>
  );
}
