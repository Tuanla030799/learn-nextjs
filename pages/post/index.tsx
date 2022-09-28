import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';

export interface PostListPageProps {
  posts: any[];
}

const PostListPage = (props: PostListPageProps) => {
  return (
    <>
      <div>Post list page</div>
      <ul>
        {props.posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostListPage;

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build time

  const response = await fetch('http://localhost:3000/posts');
  const data = await response.json();

  // console.log('static props', data);

  return {
    props: {
      posts: data,
    },
  };
};
