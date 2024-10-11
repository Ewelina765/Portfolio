import { getSortedPostsData } from '@/lib/posts';
import Pagination from '../components/Pagination';
import '../../styles/blog.scss';
import '../../styles/globals.scss';

const ListOfPostsPage = () => {
  const posts = getSortedPostsData();

  return (
    <div className="blog" id="blog">
      <div className="white-bar"></div>
      <section className="blog__container">
        <h2>Blog</h2>
        <div className="pagination-box">
          <Pagination posts={posts} />
        </div>
      </section>
    </div>
  );
};

export default ListOfPostsPage;
