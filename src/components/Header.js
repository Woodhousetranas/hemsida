'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Wood House AB</Link>
      </div>
      <nav className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/team">Team</Link>
        <Link href="/agencies">Agencies</Link>
        <Link href="/production">Production</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <div className={styles.controls}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </header>
  );
}
