'use client';

import Link from 'next/link';
import styles from '@/styles/theme.module.css';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        height: '85vh',
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--color-dark-overlay)'
        }}
      ></div>

      <div style={{ zIndex: 1, padding: '1rem', maxWidth: '800px' }}>
        <h1 className={`${styles.heading} ${styles.textWhite}`} style={{ fontSize: '3rem' }}>
          Made in Sweden – Powered by Wood House
        </h1>

        <Link href="/production" className={styles.btnSecondary}>
          Explore Our Craft
        </Link>

        {/* Scroll cue */}
        <Link
          href="#about"
          style={{
            display: 'block',
            marginTop: '2.5rem',
            fontSize: '1.5rem',
            color: 'var(--color-white)',
            animation: 'bounce 1.5s infinite'
          }}
        >
          ↓
        </Link>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
