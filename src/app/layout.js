import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Faust Blogg',
  description: 'En WordPress-driven React-blogg',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
