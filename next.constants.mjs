export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export const BLOGS_POST_PER_PAGE = 10;

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'https://nodejs.org';

export const BASE_URL_API = BASE_URL + '/api';
