'use client';

import Image from 'next/image';

const blades = [
  {
    name: 'Blade Model 1',
    image: '/images/blade1.jpg',
    description: 'High speed, exceptional control, premium craftsmanship.'
  },
  {
    name: 'Blade Model 2',
    image: '/images/blade2.jpg',
    description: 'High speed, exceptional control, premium craftsmanship.'
  },
  {
    name: 'Blade Model 3',
    image: '/images/blade3.jpg',
    description: 'High speed, exceptional control, premium craftsmanship.'
  }
];

export default function ProductsPreview() {
  return (
    <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          textTransform: 'uppercase',
          color: '#0D47A1'
        }}>
          Featured Blades
        </h2>
        <p style={{
          fontSize: '1rem',
          fontFamily: 'Inter, sans-serif',
          color: '#444'
        }}>
          Precision-crafted blades used by elite players around the world.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {blades.map((blade) => (
          <div key={blade.name} style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <Image
              src={blade.image}
              alt={blade.name}
              width={200}
              height={220}
              style={{ objectFit: 'contain', marginBottom: '1rem' }}
            />
            <h3 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.4rem',
              marginBottom: '0.5rem',
              textTransform: 'uppercase'
            }}>
              {blade.name}
            </h3>
            <p style={{
              fontSize: '0.95rem',
              fontFamily: 'Inter, sans-serif',
              color: '#666'
            }}>
              {blade.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
