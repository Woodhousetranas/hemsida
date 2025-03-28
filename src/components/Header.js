import Link from 'next/link';
import styles from './Header.module.css';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/team">Team</Link>
        <Link href="/agencies">Agencies</Link>
        <Link href="/production">Production</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <DarkModeToggle />
    </header>
  );
}
