'use client';

import Link from 'next/link';

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
        background: 'rgba(0,0,0,0.6)'
      }}></div>

      <div style={{ zIndex: 1, maxWidth: '800px', padding: '1rem' }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          fontFamily: 'Bebas Neue, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Premium Table Tennis Blades
        </h1>

        <p style={{
          fontSize: '1.2rem',
          marginBottom: '1.5rem',
          fontFamily: 'Bebas Neue, sans-serif',
          color: '#ddd',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Made in Sweden – Powered by Wood House
        </p>

        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          Trusted by professionals. Crafted in Sweden.
        </p>

        <Link href="/production" style={{
          background: '#fff',
          color: '#000',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif'
        }}>
          Explore Our Craft
        </Link>
      </div>
    </section>
  );
}
