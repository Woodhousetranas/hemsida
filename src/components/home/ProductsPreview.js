'use client';

import Image from 'next/image';

export default function ProductsPreview() {
  return (
    <section className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Featured Blades</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        Precision-crafted blades used by elite players around the world.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <Image src={`/images/blade${i}.jpg`} alt={`Blade ${i}`} width={300} height={180} style={{ borderRadius: '6px' }} />
            <h4 style={{ marginTop: '1rem' }}>Blade Model {i}</h4>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>
              High speed, exceptional control, premium craftsmanship.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
