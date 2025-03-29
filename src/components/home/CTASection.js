'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section style={{
      backgroundColor: '#0D47A1',
      color: '#fff',
      padding: '4rem 1rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Interested in a collaboration?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '2rem'
        }}>
          Reach out to us for partnership, distribution or OEM production.
        </p>
        <Link href="/contact" style={{
          backgroundColor: '#fff',
          color: '#0D47A1',
          padding: '0.8rem 1.6rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif'
        }}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
