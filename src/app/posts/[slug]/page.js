'use client';

import { gql, useQuery, ApolloProvider } from '@apollo/client';
import Link from 'next/link';
import client from '../../../client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        excerpt
        slug
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

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Blog Posts</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data?.posts?.nodes?.map((post) => (
          <li key={post.id} style={{ marginBottom: '1.5rem' }}>
            <Link href={`/posts/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ fontSize: '1.5rem' }}>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
