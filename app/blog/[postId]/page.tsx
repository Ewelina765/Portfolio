import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getFormattedDate } from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import '../../../styles/post.scss';
import '../../../styles/globals.scss';

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ postId: post.id }));
}

export const generateMetadata = ({
  params,
}: {
  params: { postId: string };
}) => {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: 'Post not found',
    };
  }
  return { title: post.title };
};

const PostPage = async ({ params }: { params: { postId: string } }) => {
  const posts = await getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, image, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <>
      <div className="white-bar"></div>
      <div className="post">
        <Link href="/blog" className="back-home-text">
          Back to home
        </Link>
        <h3 className="post__title">{title}</h3>
        <p className="post__date">{pubDate}</p>
        <article className="post-content">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </>
  );
};

export default PostPage;
