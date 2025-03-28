// /src/components/Footer.js
export default function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      textAlign: 'center',
      background: 'var(--color-surface)',
      borderTop: '1px solid #ddd',
      marginTop: '2rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Wood House AB. All rights reserved.</p>
      <nav>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}
