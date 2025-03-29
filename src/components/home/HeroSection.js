'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      height: '85vh',
      backgroundImage: 'url(/images/hero.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--color-dark-overlay)'
      }}></div>

      <div style={{
        zIndex: 1,
        padding: '1rem',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontFamily: 'Bebas Neue, sans-serif',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          color: 'var(--color-white)',
          textShadow: '0 2px 6px rgba(0,0,0,0.5)'
        }}>
          Made in Sweden – Powered by Wood House
        </h1>

        <Link href="/production" style={{
          background: 'transparent',
          color: 'var(--color-white)',
          border: '2px solid var(--color-white)',
          padding: '0.75rem 1.6rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          transition: 'all 0.2s ease'
        }}>
          Explore Our Craft
        </Link>

        {/* Scroll cue */}
        <Link href="#about" style={{
          display: 'block',
          marginTop: '2.5rem',
          fontSize: '1.5rem',
          color: 'var(--color-white)',
          animation: 'bounce 1.5s infinite'
        }}>
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
