'use strict';

import Articles from './components/articles/articles';
import Banner from './components/banner/banner';
import BannerImage from './components/banner/banner-with-image';
import BlogLatest from './components/blog/latest';
import Carousel from './components/carousel/carousel';
import CategoryList from './components/category/category-list';
import InFooter from './components/footer/in-footer';
import WithQuote from './components/hoc/with-quote';
import Image from './components/image/image';
import Navbar from './components/navbar/navbar';

/**
 * A full list of React Components that we want to pass through to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  Articles: Articles,
  Banner: Banner,
  BannerImage: BannerImage,
  Image: Image,
  BlogLatest: BlogLatest,
  CategoryList: CategoryList,
  InFooter: InFooter,
  Navbar: Navbar,
  WithQuote: WithQuote,
  Carousel: Carousel,
};
