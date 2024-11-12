export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * The constants of items display the post per page.
 */
export const BLOGS_POST_PER_PAGE = 6;

/**
 * The constants of blog post latest.
 */
export const BLOGS_POST_LATEST = 5;

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'https://nodejs.org';

export const BASE_URL_API = BASE_URL + '/api';

export const VERCEL_REVALIDATE = Number(
  process.env.NEXT_PUBLIC_VERCEL_REVALIDATE_TIME || 300,
);
