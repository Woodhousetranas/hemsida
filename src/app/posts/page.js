'use client';

import { gql, useQuery, ApolloProvider } from '@apollo/client';
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
  if (error) return <p>Fel vid hämtning av inlägg: {error.message}</p>;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blogginlägg</h1>
      <ul>
        {data?.posts?.nodes?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </li>
        ))}
      </ul>
    </main>
  );
}
