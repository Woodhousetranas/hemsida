'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.slogan}>Made in Sweden – Powered by Wood House</p>

        <p className={styles.title}>Follow our brands</p>
        <ul className={styles.links}>
          <li><Link href="https://www.instagram.com/donicscandinavia/" target="_blank">Donic on Instagram</Link></li>
          <li><Link href="https://www.instagram.com/yasaka_tt/" target="_blank">Yasaka on Instagram</Link></li>
          <li><Link href="https://www.instagram.com/nittakuscandinavia/" target="_blank">Nittaku on Instagram</Link></li>
          <li><Link href="https://se.linkedin.com/company/wood-house-ab" target="_blank">Wood House AB on LinkedIn</Link></li>
        </ul>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Wood House AB – All rights reserved.
        </p>
      </div>
    </footer>
  );
}
