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
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Premium Table Tennis Blades</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Trusted by professionals. Crafted in Sweden.
        </p>
        <Link href="/production" style={{
          background: '#fff',
          color: '#000',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 600
        }}>
          Explore Our Craft
        </Link>
      </div>
    </section>
  );
}
