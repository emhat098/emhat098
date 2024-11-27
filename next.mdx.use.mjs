'use strict';

import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Suspense } from 'react';
import Articles from './components/articles/articles';
import Banner from './components/banner/banner';
import BannerImage from './components/banner/banner-with-image';
import Bio from './components/home/bio';
import BlogLatest from './components/blog/latest';
import Breadcrumb from './components/breadcrumb/breadcrumb';
import Carousel from './components/carousel/carousel';
import CategoryList from './components/category/category-list';
import CodeEditor from './components/code-editor/code-editor';
import Figure from './components/figure/figure';
import HomeBanner from './components/home/banner';
import ILove from './components/home/i-love';
import Image from './components/image/image';
import InFooter from './components/footer/in-footer';
import Internet from './components/home/internet';
import Loading from './components/loading/loading';
import MinContainer from './components/container/min-container';
import Navbar from './components/navbar/navbar';
import References from './components/references/references';
import WithQuote from './components/hoc/with-quote';
import WorkBanner from './components/work/work-banner';
import Works from './components/home/works';
import WorkWorks from './components/work/works';

/**
 * A full list of React Components that we want to pass through to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const mdxComponents = {
  Articles: Articles,
  Banner: Banner,
  BannerImage: BannerImage,
  Bio: Bio,
  BlogLatest: BlogLatest,
  Breadcrumb: Breadcrumb,
  Carousel: Carousel,
  CategoryList: CategoryList,
  CodeEditor: CodeEditor,
  ErrorBoundary: ErrorBoundary,
  Figure: Figure,
  HomeBanner: HomeBanner,
  ILove: ILove,
  Image: Image,
  InFooter: InFooter,
  Internet: Internet,
  Loading: Loading,
  MinContainer: MinContainer,
  Navbar: Navbar,
  References: References,
  Suspense: Suspense,
  WithQuote: WithQuote,
  WorkBanner: WorkBanner,
  Works: Works,
  WorkWorks: WorkWorks,
};
