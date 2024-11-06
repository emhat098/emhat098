'use strict';

import Banner from './components/banner/banner';
import BlogLatest from './components/blog/latest';

/**
 * A full list of React Components that we want to pass through to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  Banner: Banner,
  BlogLatest: BlogLatest,
};
