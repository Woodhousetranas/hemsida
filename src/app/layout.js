import { FaustProvider } from '@faustwp/core';
import client from '../client';

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        <FaustProvider client={client}>{children}</FaustProvider>
      </body>
    </html>
  );
}
