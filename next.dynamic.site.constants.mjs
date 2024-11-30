'use strict';

import { siteConfig } from './next.site.config.mjs';
import { BASE_URL } from './next.constants.mjs';
import { provideBlogCategories, provideBlogPosts } from './data/blog-data';

/**
 * The default category route.
 *
 * @param {string} category The category
 * @returns string
 */
export const getCategoryRoute = (category) => `/blog/${category}`;

/**
 * This constant is used to create static routes in the system.
 *
 * @type {Map<string, import('./types').Layouts>} A Map of pathname and Layout Name
 */
export const DYNAMIC_ROUTES = new Map([
  ...provideBlogCategories().map((c) => [`blog/${c ?? 1}`, 'category']),
  ...provideBlogCategories()
    .map((c) => [c, provideBlogPosts(c).pagination.pages])
    .map(([c, t]) => [...Array(t).keys()].map((p) => `blog/${c}/page/${p + 1}`))
    .map((paths) => paths.map((path) => [path, 'category']))
    .flat(),
]);

/**
 * This is the default Next.js Page Metadata for all pages
 *
 * @type {import('next').Metadata}
 */
export const PAGE_METADATA = {
  metadataBase: new URL(`${BASE_URL}`),
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  twitter: {
    card: siteConfig?.twitter?.card,
    title: siteConfig?.twitter?.title,
    creator: siteConfig?.twitter?.username,
    images: {
      url: siteConfig?.twitter?.img,
      alt: siteConfig?.twitter?.imgAlt,
    },
  },
  icons: { icon: siteConfig?.favicon },
  openGraph: { images: siteConfig?.twitter?.img },
};

/**
 * This is the default Next.js Viewport Metadata for all pages
 *
 * @return {import('next').Viewport}
 */
export const PAGE_VIEWPORT = {
  themeColor: [
    {
      color: siteConfig.lightAccentColor,
      media: '(prefers-color-scheme: light)',
    },
    {
      color: siteConfig.darkAccentColor,
      media: '(prefers-color-scheme: dark)',
    },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScale: false,
};
