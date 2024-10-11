'use client';

import React from 'react';
import { useState } from 'react';

import ListItem from '../components/ListItem';
import '../../styles/blog.scss';

interface PaginationProps {
  posts: BlogPost[];
}

const Pagination: React.FC<PaginationProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const postsPerPage = 3; 

  const totalPages = Math.ceil(posts.length / 3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="blog__posts-and-pagination">
      <div className="blog__list">
        <ul>
          {currentPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
      <div className="blog__pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="blog__button"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="blog__button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
