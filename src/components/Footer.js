// /src/components/Footer.js
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Wood House AB. All rights reserved.</p>
      <nav>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}
