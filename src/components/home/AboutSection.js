export default function AboutSection() {
  return (
    <section style={{
      padding: '4rem 1rem',
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          marginBottom: '1.2rem',
          color: '#0D47A1'
        }}>
          About Wood House AB
        </h2>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.7,
          fontFamily: 'Inter, sans-serif',
          color: '#333'
        }}>
          Wood House AB is a Swedish manufacturer of high-performance table tennis blades.  
          We are proud producers behind some of the most respected brands in the sport:  
          <strong> Yasaka, Donic, and Nittaku</strong>.  
          Our mission is to combine tradition, innovation, and world-class materials to craft blades trusted by players at every level.
        </p>
      </div>
    </section>
  );
}
