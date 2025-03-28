// /src/app/page.js
export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section id="hero" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to Wood House AB
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          We create unique wood products with passion and precision.
        </p>
      </section>

      {/* About Us Summary */}
      <section id="about" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>About Us</h2>
        <p>
          Wood House AB is a leading company in the wood industry, committed to quality, sustainability, and innovative design.
        </p>
      </section>

      {/* Team Summary */}
      <section id="team" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Our Team</h2>
        <p>
          Meet our dedicated team of experts who drive Wood House AB forward.
        </p>
      </section>

      {/* Agencies & Retailers Summary */}
      <section id="agencies" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Agencies & Retailers</h2>
        <p>
          Discover our partner agencies and official retailers. Click the links to learn more.
        </p>
      </section>

      {/* Production Summary */}
      <section id="production" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Production</h2>
        <p>
          See how our products are made with top quality from raw material to finished product.
        </p>
      </section>

      {/* Contact Summary */}
      <section id="contact" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Contact</h2>
        <p>
          Get in touch with us for more information or partnerships. We are here to help.
        </p>
      </section>
    </main>
  );
}
