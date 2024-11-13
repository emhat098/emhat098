import { getBlogsData } from '@/data/blog-data';
import { getClientContext } from '@/context/client-context';
import Navbar from '../navbar/navbar';
import Container from '../container/container';
import BlogItem2 from '../blog/blog-item-2';
import BlogPagination from '../pagination/blog-pagination';
import InFooter from '../footer/in-footer';
import Footer from '../footer/footer';

const getBlogData = async (pathname: string) => {
  const [, , category = 'all', , page = 1] = pathname.split('/');
  return getBlogsData(category, page);
};

const BlogsLayout = async () => {
  const { pathname } = getClientContext();
  const { posts, pagination } = await getBlogData(pathname);
  const [, root, category = 'all', page = 'page', pageNum = 1] =
    pathname.split('/');

  return (
    <>
      <Navbar />
      <Container>
        <main
          className={
            'transition-all duration-300 ease-linear grid grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-0 min-h-full'
          }
        >
          {posts.length > 0 &&
            posts.map((post) => (
              <BlogItem2
                key={post.slug}
                {...post}
              />
            ))}
        </main>
        <div className='flex justify-center items-center my-4'>
          <BlogPagination
            {...pagination}
            currentPage={Number(pageNum)}
            pathName={`${root}/${category}/${page}`}
          />
        </div>
        <InFooter />
        <Footer />
      </Container>
    </>
  );
};

export default BlogsLayout;
