'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section style={{
      background: '#0D47A1',
      color: '#fff',
      padding: '4rem 1rem',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interested in Collaboration?</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Reach out to us for partnership, distribution or OEM production.
      </p>
      <Link href="/contact" style={{
        background: '#fff',
        color: '#0D47A1',
        padding: '0.75rem 1.5rem',
        borderRadius: '4px',
        fontWeight: 'bold',
        textDecoration: 'none'
      }}>
        Contact Us
      </Link>
    </section>
  );
}
