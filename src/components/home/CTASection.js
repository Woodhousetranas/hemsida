'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-white)',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          letterSpacing: '1px',
          marginBottom: '1rem'
        }}
      >
        Ready to explore professional quality?
      </h2>

      <p
        style={{
          fontSize: '1.1rem',
          fontFamily: 'Inter, sans-serif',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}
      >
        Discover our full production process and learn how Wood House AB crafts blades
        for some of the world’s best table tennis brands.
      </p>

      <Link
        href="/production"
        style={{
          background: 'var(--color-white)',
          color: 'var(--color-accent)',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          textDecoration: 'none',
          transition: 'all 0.2s ease'
        }}
      >
        Visit Production →
      </Link>
    </section>
  );
}
