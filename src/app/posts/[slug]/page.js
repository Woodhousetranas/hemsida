'use client';

import { useParams } from 'next/navigation';
import { gql, useQuery, ApolloProvider } from '@apollo/client';
import client from '../../../client';
import styles from './Post.module.css'; // ← Importera CSS-modulen
import Link from 'next/link';

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
    }
  }
`;

export default function PostPage() {
  const { slug } = useParams();

  return (
    <ApolloProvider client={client}>
      <SinglePost slug={slug} />
    </ApolloProvider>
  );
}

function SinglePost({ slug }) {
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error fetching post: {error.message}</p>;
  if (!data?.post) return <p>Post not found.</p>;

  const post = data.post;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      {post.date && (
        <p className={styles.date}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
      )}
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link href="/posts" className={styles.backLink}>
        Back to Posts
      </Link>
    </main>
  );
}
