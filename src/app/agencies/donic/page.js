export default function DonicPage() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '2.5rem',
        color: '#0D47A1',
        marginBottom: '1rem',
        textTransform: 'uppercase'
      }}>
        Donic
      </h1>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.1rem',
        color: '#444',
        marginBottom: '2rem',
        lineHeight: 1.6
      }}>
        Donic stands for German engineering, speed and power. Used by former world champions,
        Donic products push the limits of modern table tennis. Whether it’s rubbers, blades or textiles,
        Donic delivers with quality and precision.
      </p>
      <img
        src="/images/donic-banner.jpg"
        alt="Donic Brand"
        style={{
          width: '100%',
          maxWidth: '700px',
          borderRadius: '10px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}
      />
    </main>
  );
}
