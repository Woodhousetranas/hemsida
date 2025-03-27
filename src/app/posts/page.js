'use client';

import { gql, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import client from '../../client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        excerpt
      }
    }
  }
`;

export default function PostsPage() {
  return (
    <ApolloProvider client={client}>
      <Posts />
    </ApolloProvider>
  );
}

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Laddar inlägg...</p>;
  if (error) return <p>Fel vid hämtning: {error.message}</p>;

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Blogginlägg</h1>
      <ul>
        {data?.posts?.nodes?.map((post) => (
          <li key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem' }}>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
