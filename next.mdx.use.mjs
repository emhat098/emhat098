'use strict';

import Articles from './components/articles/articles';
import Banner from './components/banner/banner';
import BannerImage from './components/banner/banner-with-image';
import BlogLatest from './components/blog/latest';
import Carousel from './components/carousel/carousel';
import CategoryList from './components/category/category-list';
import CodeEditor from './components/code-editor/code-editor';
import Figure from './components/figure/figure';
import InFooter from './components/footer/in-footer';
import WithQuote from './components/hoc/with-quote';
import HomeBanner from './components/home/banner';
import Works from './components/home/works';
import Bio from './components/home/bio';
import Image from './components/image/image';
import Navbar from './components/navbar/navbar';
import Internet from './components/home/internet';
import ILove from './components/home/i-love';

/**
 * A full list of React Components that we want to pass through to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  Articles: Articles,
  Banner: Banner,
  Bio: Bio,
  Internet: Internet,
  ILove: ILove,
  Works: Works,
  BannerImage: BannerImage,
  HomeBanner: HomeBanner,
  CodeEditor: CodeEditor,
  Image: Image,
  BlogLatest: BlogLatest,
  CategoryList: CategoryList,
  InFooter: InFooter,
  Navbar: Navbar,
  WithQuote: WithQuote,
  Carousel: Carousel,
  Figure: Figure,
};
