import { getSortedPostsData } from '@/lib/posts';
import '../../styles/blog.scss';
import ListItem from '../components/ListItem';

const ListOfPostsPage = () => {
  const posts = getSortedPostsData();
  //   console.log('posts', posts);

  return (
    <section className="blog" id="blog">
      <h2>Blog</h2>
      <div className="blog-container">
        <ul>
          {posts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ListOfPostsPage;
