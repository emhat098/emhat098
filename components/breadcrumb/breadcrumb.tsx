import Link from 'next/link';
import { FC } from 'react';

interface BreadcrumbProps {
  root: {
    href: string;
    title: string;
  };
  currentPage: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ root, currentPage }) => {
  return (
    <div className={'flex flex-row items-center gap-2 p-0 w-max'}>
      <Link
        href={root.href}
        className={'font-bold text-teal-800 bg-teal-50 rounded px-2'}
      >
        {root.title}
      </Link>
      <span className={'font-mono font-bold'}>{'>'}</span>
      <span>{currentPage}</span>
    </div>
  );
};

export default Breadcrumb;
