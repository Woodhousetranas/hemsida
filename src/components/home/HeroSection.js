'use client';

import Link from 'next/link';
import styles from '@/styles/theme.module.css'; // säkerställ att denna sökväg är korrekt

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      height: '90vh',
      backgroundImage: 'url(/images/hero.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.6)' // Mörkare overlay
      }}></div>

      <div style={{ zIndex: 1, maxWidth: '800px', padding: '1rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 700 }}>
          MADE IN SWEDEN 
          <br />POWERED BY WOOD HOUSE
        </h1>

        <Link href="/production" className={styles.buttonAnimate}>
          Explore Our Craft
        </Link>
      </div>
    </section>
  );
}
