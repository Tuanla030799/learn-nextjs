import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface PostDetailPageProps {
  post: any;
}

const PostDetailPage = ({ post }: PostDetailPageProps) => {
  return (
    <ul>
      <li>{post.title}</li>
      <li>{post.description}</li>
    </ul>
  );
};

export default PostDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/posts');
  const data = await response.json();

  return {
    paths: data.map((post: any) => ({ params: { postId: post.id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build time

  const postId = context.params?.postId;

  if (postId) {
    return { notFound: true };
  }

  console.log('postId', postId);

  const response = await fetch(`http://localhost:3000/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
