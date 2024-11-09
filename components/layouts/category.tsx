import getBlogsData from '@/actions/blogs';
import { getClientContext } from '@/context/client-context';
import Navbar from '@/components/navbar/navbar';
import Container from '@/components/container/container';
import BlogItem2 from '@/components/blog/blog-item-2';
import Footer from '@/components/footer/footer';

const getBlogData = async (pathname: string) => {
  const [, , category = 'all', page = 1] = pathname.split('/');
  return getBlogsData(category, page);
};

const CategoryLayout = async () => {
  const { pathname } = getClientContext();

  const blogs = await getBlogData(pathname);

  return (
    <>
      <Navbar />
      <Container>
        <main
          className={
            'transition-all duration-300 ease-linear grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-0'
          }
        >
          {blogs.posts.length > 0 &&
            blogs.posts.map((post) => (
              <BlogItem2
                key={post.slug}
                post={post}
              />
            ))}
        </main>
      </Container>

      <Footer />
    </>
  );
};

export default CategoryLayout;
