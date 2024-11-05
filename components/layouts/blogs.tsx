import getBlogsData from '@/actions/blog-action';
import { getClientContext } from '@/context/client-context';
import Link from '../link/link';

const getBlogData = async (pathname: string) => {
  const [, , category = 'all', , page = 1] = pathname.split('/');
  return getBlogsData(category, page);
};

const BlogsLayout = async () => {
  const { pathname } = getClientContext();
  const blogs = await getBlogData(pathname);
  return (
    <div>
      <h2>Blogs layout</h2>
      <ul>
        {blogs.posts.length > 0 &&
          blogs.posts.map((post) => (
            <li key={post.slug}>
              <Link href={post.slug}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogsLayout;
