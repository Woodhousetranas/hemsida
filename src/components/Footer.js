'use client';

import styles from '@/styles/theme.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.slogan}>Made in Sweden – Powered by Wood House</p>
      <p>&copy; {new Date().getFullYear()} Wood House AB. All rights reserved.</p>
      <p>
        <a href="https://www.instagram.com/yasaka_tt/" target="_blank">Yasaka</a> |{' '}
        <a href="https://www.instagram.com/donicscandinavia/" target="_blank">Donic</a> |{' '}
        <a href="https://www.instagram.com/nittakuscandinavia/" target="_blank">Nittaku</a> |{' '}
        <a href="https://se.linkedin.com/company/wood-house-ab" target="_blank">LinkedIn</a>
      </p>
    </footer>
  );
}
