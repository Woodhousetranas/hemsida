'use client';

import { gql, useQuery, ApolloProvider } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';
import client from '../../client';

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
  const [search, setSearch] = useState('');

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  // Filtrera inläggen baserat på söksträngen
  const filteredPosts = data.posts.nodes.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredPosts.map((post) => (
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
