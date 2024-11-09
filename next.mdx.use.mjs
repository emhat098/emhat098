'use strict';

import Articles from './components/articles/articles';
import Banner from './components/banner/banner';
import BlogLatest from './components/blog/latest';
import CategoryList from './components/category/category-list';
import PickUp from './components/pick-up/pick-up';

/**
 * A full list of React Components that we want to pass through to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  Banner: Banner,
  BlogLatest: BlogLatest,
  Pickup: PickUp,
  CategoryList: CategoryList,
  Articles: Articles,
};
