// /src/client.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
});

export default client;
