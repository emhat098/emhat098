import { provideBlogPosts, providePaginationBlogPosts } from '@/data/blog-data';
import { BlogPostsRSC } from '@/types';

const getBlogsData = (
  category: string,
  page: number | string,
): BlogPostsRSC => {
  const requestedPage = Number(page);
  const data =
    requestedPage >= 1
      ? providePaginationBlogPosts(category, requestedPage)
      : provideBlogPosts(category);

  return data;
};

export default getBlogsData;
