/* eslint-disable @next/next/no-img-element */
import { BlogPost } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import Image from '../image/image';
import P from '../paragraph/paragraph';
import { GoLinkExternal } from 'react-icons/go';

const BlogItem2: FC<BlogPost> = ({
  slug,
  author,
  date,
  title,
  summary,
  banner,
  externalUrl,
}) => {
  return (
    <div
      className={
        'transition-all duration-200 ease-linear h-max w-full border-b p-1 sm:p-2 md:p-4 hover:rounded-lg hover:bg-slate-50 hover:shadow'
      }
    >
      <Link
        href={externalUrl || slug || '/404'}
        className={'block'}
        target={externalUrl ? '_blank' : '_parent'}
      >
        <div className={'w-full h-full'}>
          <Image
            src={banner || 'https://picsum.photos/1080'}
            alt={'Banner of ' + title}
            className={'h-52 w-full'}
          />
        </div>
        <div className={'flex flex-col md:gap-1 py-2'}>
          <div className={'flex justify-between items-start'}>
            <P className={'line-clamp-2 text-sm font-medium md:text-base'}>
              {title}
            </P>
            {externalUrl && (
              <div className={'py-2'}>
                <GoLinkExternal className={'w-4 h-4'} />
              </div>
            )}
          </div>
          <P className={'line-clamp-2 text-xs md:text-sm py-0'}>{summary}</P>
          <div className='flex justify-between gap-2 text-slate-800 text-sm items-center'>
            <P className='w-full text-xs md:text-sm'>By {author}</P>
            <P className='text-xs md:text-sm'>{date.toLocaleDateString()}</P>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem2;
