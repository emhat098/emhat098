import { BlogPagination as Pagination } from '@/types';
import { FC } from 'react';
import Link from '../link/link';
import cn from '@/util/tailwind-helper';

interface BlogPaginationProps extends Pagination {
  pathName: string;
  currentPage: number | null;
}

const BlogPagination: FC<BlogPaginationProps> = ({
  next,
  pages,
  prev,
  pathName,
  currentPage,
}) => {
  return (
    <div className={'flex flex-row gap-2'}>
      <div className='flex flex-row gap-2 items-center'>
        {prev && <Link href={`/${pathName}/${prev}`}>{'prev'}</Link>}
        {[...Array(pages).keys()].map((page) => {
          page = page + 1;
          return (
            <Link
              key={page}
              href={`/${pathName}/${page}`}
              className={cn(
                currentPage == page ? 'font-semibold' : '',
                'hover:underline',
              )}
            >
              {page}
            </Link>
          );
        })}
        {next && <Link href={`/${pathName}/${next}`}>{'next'}</Link>}
      </div>
    </div>
  );
};

export default BlogPagination;
