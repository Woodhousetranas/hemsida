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
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/team">Team</Link>
        <Link href="/agencies">Agencies</Link>
        <Link href="/production">Production</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <button className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link href="/agencies" onClick={() => setMenuOpen(false)}>Agencies</Link>
          <Link href="/production" onClick={() => setMenuOpen(false)}>Production</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/posts" onClick={() => setMenuOpen(false)}>Posts</Link>
        </div>
      )}
    </header>
  );
}
