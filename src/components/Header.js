'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo centered on top */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.png" alt="Wood House AB" width={180} height={45} />
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/agencies">Agencies</Link>
          <Link href="/production">Production</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </div>
    </header>
  );
}
