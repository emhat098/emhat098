/* eslint-disable @next/next/no-img-element */
import { BlogPost } from '@/types';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import Image from '../image/image';

interface BlogItem2Props extends HTMLAttributes<HTMLDivElement> {
  post: BlogPost;
}

const BlogItem2: FC<BlogItem2Props> = ({
  post: { slug, author, date, title, summary, banner },
}) => {
  return (
    <div className={'h-full w-full group border-b m-2 p-4'}>
      <Link
        href={slug ?? '/404'}
        className={'block'}
      >
        <div className={'w-full h-full'}>
          <Image
            src={banner || 'https://picsum.photos/1080'}
            alt={'Banner of ' + title}
            className={'h-52 w-full'}
          />
        </div>
        <div className={'flex flex-col gap-2 py-2'}>
          <p
            className={
              'line-clamp-1 text-base font-medium group-hover:underline'
            }
          >
            {title}
          </p>
          <p className={'line-clamp-2 text-sm'}>{summary}</p>
          <div className='flex justify-between gap-2 text-slate-800 text-sm items-center'>
            <p className='w-full'>By {author}</p>
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem2;
