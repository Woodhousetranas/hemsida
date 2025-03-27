'use client';

import { FaustProvider } from '@faustwp/core';
import { client } from '../client';

export default function FaustWrapper({ children }) {
  return (
    <FaustProvider client={client}>
      {children}
    </FaustProvider>
  );
}
