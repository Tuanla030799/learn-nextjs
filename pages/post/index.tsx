import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';
import { MainLayout } from '../../components/layout';

export interface PostListPageProps {
  posts: any[];
}

const PostListPage = (props: PostListPageProps) => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default PostListPage;

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build time

  const response = await fetch('http://localhost:5000/tasks');
  const data = await response.json();

  // console.log('static props', data);

  return {
    props: {
      posts: data,
    },
  };
};
