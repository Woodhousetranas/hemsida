import './globals.css';
import { Bebas_Neue, Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wood House AB',
  description: 'Table Tennis Blades & Brands - Powered by Wood House',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebas.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}