/* eslint-disable @next/next/no-img-element */
import { BlogPost } from '@/types';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import Image from '@/components/image/image';
import P from '../paragraph/paragraph';

interface BlogItemProps extends HTMLAttributes<HTMLDivElement> {
  post: BlogPost;
}

const BlogItem: FC<BlogItemProps> = ({
  post: { slug, author, date, title, banner, summary },
}) => {
  return (
    <Link
      href={slug ?? '/404'}
      className={
        'transition-all duration-300 eas block p-2 rounded-lg hover:bg-slate-50 hover:shadow-lg'
      }
    >
      <div className={'w-full h-max'}>
        <Image
          src={banner || 'https://picsum.photos/1080'}
          alt={'Image of ' + title}
          className={'object-cover h-52 w-full'}
        />
      </div>
      <div className={'flex flex-col pt-2 px-2'}>
        <P className={'line-clamp-2 text-base md:text-lg font-medium'}>
          {title}
        </P>
        <P className={'line-clamp-2 md:text-sm'}>{summary}</P>
        <div
          className={
            'flex justify-between gap-2 text-slate-800 text-sm items-center'
          }
        >
          <P className={'text-xs'}>By {author}</P>
          <P className={'text-xs'}>{date.toLocaleDateString()}</P>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
