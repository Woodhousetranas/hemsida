'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="Wood House AB" width={120} height={32} />
          </Link>
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link href="/agencies" onClick={() => setMenuOpen(false)}>Agencies</Link>
          <Link href="/production" onClick={() => setMenuOpen(false)}>Production</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/posts" onClick={() => setMenuOpen(false)}>Posts</Link>
        </nav>
      </div>
    </header>
  );
}
