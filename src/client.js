import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { createClient } from '@faustwp/core';

export const client = createClient({
  apolloClient: new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
  }),
});
