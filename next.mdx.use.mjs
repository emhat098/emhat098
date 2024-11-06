'use strict';

import Banner from './components/banner/banner';

/**
 * A full list of React Components that we want to pass through to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  Banner: Banner,
};
