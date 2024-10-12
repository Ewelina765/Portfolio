import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { getFormattedDate } from '@/lib/getFormattedDate';
import '../../styles/globals.scss';
import '../../styles/blog.scss';

interface ListItemProps {
  post: BlogPost;
}

const ListItem: React.FC<ListItemProps> = ({ post }) => {
  const { id, title, date, image, category } = post;

  const formattedDate = date ? getFormattedDate(date) : 'No Date Available';

  return (
    <li>
      <Link href={`/blog/${id}`}>
        <Image
          src={image}
          alt="post image"
          width={350}
          height={350}
          className="blog__foto"
        />
        <p className="p-green">{title}</p>
        <p>{category}</p>
        <p>{formattedDate}</p>
      </Link>
    </li>
  );
};

export default ListItem;
