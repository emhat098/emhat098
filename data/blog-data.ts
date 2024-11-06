import generateBlogData from '@/generator/blog.mjs';
import { BLOGS_POST_LATEST, BLOGS_POST_PER_PAGE } from '@/next.constants.mjs';
import { BlogPost, BlogPostsRSC } from '@/types';
import { cache } from 'react';

const { categories, posts } = await generateBlogData();

/**
 * Cached blog post based on category;
 */
export const provideBlogCategories = cache(() => categories);

/**
 * Get full blog posts.
 *
 * @returns {BlogPostsRSC}
 */
export const provideBlogPosts = cache((category: string): BlogPostsRSC => {
  const categoryPosts = posts
    .filter((p) => p.categories.includes(category))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const total = categoryPosts.length / BLOGS_POST_PER_PAGE;

  return {
    posts: categoryPosts,
    pagination: {
      prev: null,
      next: null,
      pages: Math.floor(total % 1 === 0 ? total : total + 1),
      total: categoryPosts.length,
    },
  };
});

/**
 * Get the list of blog post with pagination.
 *
 * @return {BlogPostsRSC}
 */
export const providePaginationBlogPosts = cache(
  (category: string, page: number): BlogPostsRSC => {
    const { posts, pagination } = provideBlogPosts(category);

    const actualPage = page < 1 ? 1 : page;

    if (actualPage <= pagination.pages) {
      return {
        posts: posts.slice(
          BLOGS_POST_PER_PAGE * (actualPage - 1),
          BLOGS_POST_PER_PAGE * actualPage,
        ),
        pagination: {
          prev: actualPage > 1 ? actualPage - 1 : null,
          next: actualPage < pagination.pages ? actualPage + 1 : null,
          pages: pagination.pages,
          total: posts.length,
        },
      };
    }
    return {
      posts: [],
      pagination: {
        prev: pagination.total,
        next: null,
        pages: pagination.pages,
        total: posts.length,
      },
    };
  },
);

/**
 * Get the latest blog post.
 * Default is {BLOGS_POST_LATEST} items.
 *
 * @returns {Array<BlogPost>}
 */
export const provideLatestBlogOfPosts = cache((): Array<BlogPost> => {
  const data = posts
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, BLOGS_POST_LATEST);

  return data;
});
