'use client';

import { BlogPost } from '@/types';
import { FC } from 'react';
import Image from '@/components/image/image';
import Link from '@/components/link/link';
import P from '@/components/paragraph/paragraph';

const SearchItem: FC<BlogPost> = ({ slug, banner, title, date }) => {
  return (
    <>
      <Link
        href={slug}
        className={
          'hover:underline sm:text-base flex flex-row gap-4 items-center'
        }
      >
        <div className={'aspect-video'}>
          <Image
            src={banner}
            alt={title}
            className={'w-full h-10 max-w-20 min-w-20 rounded'}
          />
        </div>
        <div className={'flex flex-col'}>
          <P className={'font-normal'}>{title}</P>
          <P className={'!text-xs'}>
            {new Date(date.toString()).toLocaleDateString()}
          </P>
        </div>
      </Link>
    </>
  );
};

export default SearchItem;
