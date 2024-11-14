'use client';

import { BlogPost } from '@/types';
import { FC } from 'react';
import Image from '@/components/image/image';
import Link from '@/components/link/link';
import P from '@/components/paragraph/paragraph';
import { GoLinkExternal } from 'react-icons/go';

const SearchItem: FC<BlogPost> = ({
  slug,
  banner,
  title,
  date,
  externalUrl,
}) => {
  return (
    <>
      <Link
        href={externalUrl || slug}
        className={
          'hover:underline sm:text-base flex flex-row gap-4 items-center rounded-lg py-1 dark:bg-darker'
        }
        target={externalUrl ? '_blank' : '_parent'}
      >
        <div className={'aspect-video'}>
          <Image
            src={banner}
            alt={title}
            className={'w-full h-10 max-w-20 min-w-20 rounded'}
          />
        </div>
        <div className={'flex flex-col'}>
          <div className='flex flex-row gap-2 items-center'>
            <P className={'font-normal'}>{title}</P>
            {externalUrl && (
              <div className={'py-2'}>
                <GoLinkExternal className={'w-4 h-4'} />
              </div>
            )}
          </div>
          <P className={'!text-xs'}>
            {new Date(date?.toString()).toLocaleDateString()}
          </P>
        </div>
      </Link>
    </>
  );
};

export default SearchItem;
