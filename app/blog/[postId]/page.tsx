import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getFormattedDate } from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import "../../../styles/post.scss"

export const generateMetadata = async ({
  params,
}: {
  params: { postId: string };
}) => {
  const posts = await getSortedPostsData();
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

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <div className='post'>
      <h3 className='post-title'>{title}</h3>
      <p className='post-date'>{pubDate}</p>
      <article className='post-content'>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Link href="/blog" className='back-home-text'>Back to home</Link>
      </article>
    </div>
  );
};

export default PostPage;
