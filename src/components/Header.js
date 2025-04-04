"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/theme.module.css";

export default function Header() {
  return (
    <header
      style={{
        padding: "2rem 1rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ marginBottom: "1rem" }}>
        <Image
          src="/images/woodhouse-logo.png"
          alt="Wood House Logo"
          width={280}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/team">Team</Link>
        <Link href="/agencies">Agencies</Link>
        <Link href="/production">Production</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
