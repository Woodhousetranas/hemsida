'use client';

import Image from 'next/image';

export default function YasakaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '60vh',
        backgroundImage: 'url(/images/yasaka-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.5)'
        }}></div>
        <div style={{ zIndex: 1, textAlign: 'center' }}>
          <Image
            src="/images/yasaka-logo.png"
            alt="Yasaka"
            width={200}
            height={80}
            style={{ objectFit: 'contain', margin: '0 auto' }}
          />
          <h1 style={{
            marginTop: '1rem',
            fontSize: '2rem',
            color: '#fff',
            fontFamily: 'Bebas Neue, sans-serif',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Tradition & Innovation in Table Tennis
          </h1>
        </div>
      </section>

      {/* Brand Description */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontFamily: 'Bebas Neue, sans-serif',
          marginBottom: '1rem',
          color: '#0D47A1'
        }}>
          About Yasaka
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.7,
          fontFamily: 'Inter, sans-serif',
          color: '#333'
        }}>
          Yasaka is one of the world’s most iconic brands in table tennis, combining Japanese precision with Swedish craftsmanship. Known for legendary rubbers like **Mark V** and **Rakza**, Yasaka continues to innovate while staying true to its roots.
        </p>
      </section>

      {/* Featured Products */}
      <section style={{
        padding: '2rem 1rem',
        background: '#f9f9f9'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '1.5rem',
            color: '#0D47A1',
            marginBottom: '2rem'
          }}>
            Featured Products
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: 'Rakza XX', image: '/images/rakza-xx.jpg' },
              { name: 'Mark V', image: '/images/mark-v.jpg' },
              { name: 'Ma Lin Soft Carbon', image: '/images/malin-soft-carbon.jpg' }
            ].map((product) => (
              <div key={product.name} style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={160}
                  style={{ objectFit: 'contain', marginBottom: '1rem' }}
                />
                <h4 style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '1.2rem',
                  color: '#333'
                }}>
                  {product.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
