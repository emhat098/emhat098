/* eslint-disable @next/next/no-img-element */
import { BlogPost } from '@/types';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

interface BlogItemProps extends HTMLAttributes<HTMLDivElement> {
  post: BlogPost;
}

const BlogItem: FC<BlogItemProps> = ({
  post: { slug, author, date, title },
}) => {
  return (
    <div>
      <Link href={slug ?? '/404'}>
        <div className={'w-full h-full'}>
          <img
            src={'https://picsum.photos/1080'}
            alt={'random image'}
            className={'object-cover h-full w-full'}
          />
        </div>
        <div className={'flex flex-col gap-2 py-2'}>
          <p className={'line-clamp-2'}>{title}</p>
          <div className='flex justify-between gap-2 text-slate-800 text-sm items-center'>
            <p className='w-full'>By {author}</p>
            <span className='w-full h-[1px] bg-slate-500'></span>
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
