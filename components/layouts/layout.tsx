import type { Layouts } from '@/types';
import DefaultLayout from './default';
import { FC, PropsWithChildren } from 'react';
import BlogsLayout from './blogs';
import BlogPostLayout from './blog-post';
import CategoryLayout from './category';
import WorkLayout from './work';
import GoogleAnalytics from '../google/analytics';

const layouts = {
  page: DefaultLayout,
  blogs: BlogsLayout,
  'blog-post': BlogPostLayout,
  category: CategoryLayout,
  work: WorkLayout,
} satisfies Record<Layouts, FC>;

type LayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }>;

const Layout: FC<LayoutProps> = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] ?? DefaultLayout;

  return (
    <LayoutComponent>
      {children}
      <GoogleAnalytics />
    </LayoutComponent>
  );
};

export default Layout;
