"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{ background: "#111", color: "#fff", padding: "3rem 1rem 2rem" }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Column 1 – Logo & Info */}
        <div style={{ flex: "1 1 250px" }}>
          <Image
            src="/images/woodhouse-logo.png"
            alt="Wood House AB"
            width={140}
            height={60}
            style={{ marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "0.9rem", lineHeight: "1.5", color: "#ccc" }}>
            Wood House AB is a premium manufacturer of table tennis blades,
            trusted by global brands and world-class players.
          </p>
        </div>

        {/* Column 2 – Quick Links */}
        <div style={{ flex: "1 1 180px" }}>
          <h4 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            Navigation
          </h4>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
          >
            <Link href="/" style={linkStyle}>
              Home
            </Link>
            <Link href="/about-us" style={linkStyle}>
              About Us
            </Link>
            <Link href="/team" style={linkStyle}>
              Team
            </Link>
            <Link href="/agencies" style={linkStyle}>
              Agencies
            </Link>
            <Link href="/production" style={linkStyle}>
              Production
            </Link>
            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>
          </nav>
        </div>

        {/* Column 3 – Social */}
        <div style={{ flex: "1 1 200px" }}>
          <h4 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
            Follow Us
          </h4>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
          >
            <Link
              href="https://www.instagram.com/yasaka_tt/"
              target="_blank"
              style={linkStyle}
            >
              Yasaka Instagram
            </Link>
            <Link
              href="https://www.instagram.com/donicscandinavia/"
              target="_blank"
              style={linkStyle}
            >
              Donic Instagram
            </Link>
            <Link
              href="https://www.instagram.com/nittakuscandinavia/"
              target="_blank"
              style={linkStyle}
            >
              Nittaku Instagram
            </Link>
            <Link
              href="https://se.linkedin.com/company/wood-house-ab"
              target="_blank"
              style={linkStyle}
            >
              Wood House LinkedIn
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom line – Slogan + Copyright */}
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "0.85rem",
          color: "#aaa",
        }}
      >
        <p style={{ marginBottom: "0.3rem", color: "#fff", fontWeight: 500 }}>
          Made in Sweden – Powered by Wood House
        </p>
        <p>
          &copy; {new Date().getFullYear()} Wood House AB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "color 0.2s ease",
};
