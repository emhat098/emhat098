import { getBlogsData } from '@/data/blog-data';
import { getClientContext } from '@/context/client-context';
import Navbar from '../navbar/navbar';
import Container from '../container/container';
import BlogItem2 from '../blog/blog-item-2';

const getBlogData = async (pathname: string) => {
  const [, , category = 'all', , page = 0] = pathname.split('/');
  return getBlogsData(category, page);
};

const BlogsLayout = async () => {
  const { pathname } = getClientContext();
  const blogs = await getBlogData(pathname);

  return (
    <>
      <Navbar />
      <Container>
        <main
          className={
            'transition-all duration-300 ease-linear grid gap-2 grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-0'
          }
        >
          {blogs.posts.length > 0 &&
            blogs.posts.map((post) => (
              <BlogItem2
                key={post.slug}
                {...post}
              />
            ))}
        </main>
      </Container>
    </>
  );
};

export default BlogsLayout;
