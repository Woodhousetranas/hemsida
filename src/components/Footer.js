// src/components/Footer.js
"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <Container>
        <div className="text-center space-y-4">
          <p className="text-sm italic">
            Made in Sweden – Powered by Wood House
          </p>

          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://www.instagram.com/yasaka_tt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://www.instagram.com/donicscandinavia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://www.instagram.com/nittakuscandinavia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://se.linkedin.com/company/wood-house-ab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Wood House AB. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
