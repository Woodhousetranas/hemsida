'use client';

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '4rem 1rem',
        backgroundColor: 'var(--color-light)',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2rem',
          color: 'var(--color-heading)',
          marginBottom: '1.5rem'
        }}
      >
        About Wood House AB
      </h2>

      <p
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          fontFamily: 'Inter, sans-serif',
          color: 'var(--color-text)'
        }}
      >
        Wood House AB is a Swedish manufacturer of high-performance table tennis blades.
        We are proud producers behind some of the most respected brands in the sport:
        <strong> Yasaka</strong>, <strong> Donic</strong>, and
        <strong> Nittaku</strong>. Our mission is to combine tradition, innovation,
        and world-class materials to craft blades trusted by players at every level.
      </p>
    </section>
  );
}
