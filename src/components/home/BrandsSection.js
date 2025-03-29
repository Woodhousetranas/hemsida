'use client';

import Image from 'next/image';

const brands = [
  {
    name: 'Yasaka',
    logo: '/images/yasaka-logo.png'
  },
  {
    name: 'Donic',
    logo: '/images/donic-logo.png'
  },
  {
    name: 'Nittaku',
    logo: '/images/nittaku-logo.png'
  }
];

export default function BrandsSection() {
  return (
    <section style={{ padding: '4rem 1rem', backgroundColor: '#f9f9f9' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.6px',
          color: '#0D47A1'
        }}>
          Our Brands
        </h2>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {brands.map((brand) => (
          <div key={brand.name} style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '220px',
            height: '130px'
          }}>
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
