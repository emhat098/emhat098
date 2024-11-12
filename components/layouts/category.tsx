import { getBlogsData } from '@/data/blog-data';
import { getClientContext } from '@/context/client-context';
import Navbar from '@/components/navbar/navbar';
import Container from '@/components/container/container';
import BlogItem2 from '@/components/blog/blog-item-2';
import Footer from '@/components/footer/footer';
import BlogPagination from '@/components/pagination/blog-pagination';
import InFooter from '@/components/footer/in-footer';

const getBlogData = async (pathname: string) => {
  const [, , category = 'all', , page = 1] = pathname.split('/');

  return getBlogsData(category, page);
};

const CategoryLayout = async () => {
  const { pathname } = getClientContext();
  const { posts, pagination } = await getBlogData(pathname);
  const [, root, category, page = 'page', pageNum = 1] = pathname.split('/');

  return (
    <>
      <Navbar />
      <Container>
        <main
          className={
            'transition-all duration-300 ease-linear grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-0 min-h-full'
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
        <div className={'w-full flex justify-center my-4'}>
          <BlogPagination
            {...pagination}
            pathName={`${root}/${category}/${page}`}
            currentPage={Number(pageNum)}
          />
        </div>
        <InFooter />
        <Footer />
      </Container>
    </>
  );
};

export default CategoryLayout;
