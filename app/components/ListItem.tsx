import React from 'react';
import Link from 'next/link';
import { getFormattedDate } from '@/lib/getFormattedDate';

interface ListItemProps {
  post: BlogPost;
}

const ListItem: React.FC<ListItemProps> = ({ post }) => {
  const { id, title, date, category } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li>
      <Link href={`/blog/${id}`}>{title}</Link>
      <p>{category}</p>
      <p>{formattedDate}</p>
    </li>
  );
};

export default ListItem;
