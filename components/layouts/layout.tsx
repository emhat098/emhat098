import type { Layouts } from '@/types';
import DefaultLayout from './default';
import { FC, PropsWithChildren } from 'react';

const layouts = {
  page: DefaultLayout,
} satisfies Record<Layouts, FC>;

type LayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }>;

const Layout: FC<LayoutProps> = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] ?? DefaultLayout;
  return <LayoutComponent>{children}</LayoutComponent>;
};

export default Layout;
