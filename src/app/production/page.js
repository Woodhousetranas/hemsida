'use client';

import Image from 'next/image';

export default function ProductionPage() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          color: '#0D47A1',
          marginBottom: '1rem'
        }}>
          Our Production
        </h1>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.1rem',
          color: '#444',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '1.5rem'
        }}>
          Made in Sweden – Powered by Wood House
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.7,
          fontFamily: 'Inter, sans-serif',
          color: '#333'
        }}>
          All of our blades are designed and manufactured in Sweden at our production facility in Tranås.
          With decades of craftsmanship experience, we combine premium wood selections with advanced techniques
          to ensure every blade meets professional standards. Each step — from material selection to final finishing —
          is handled with precision, care, and pride.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {[
          { src: '/images/production1.jpg', alt: 'Workshop Overview' },
          { src: '/images/production2.jpg', alt: 'Blade Finishing' },
          { src: '/images/production3.jpg', alt: 'Material Selection' }
        ].map(({ src, alt }) => (
          <div key={src} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Image
              src={src}
              alt={alt}
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
