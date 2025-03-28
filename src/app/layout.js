import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wood House AB',
  description: 'A sleek and modern website for Wood House AB',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()} // Du kan byta ut detta mot en mer stabil key
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
