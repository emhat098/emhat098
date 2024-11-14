/* eslint-disable @next/next/no-img-element */
import { BlogPost } from '@/types';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';
import Image from '@/components/image/image';
import P from '../paragraph/paragraph';
import { GoLinkExternal } from 'react-icons/go';

interface BlogItemProps extends HTMLAttributes<HTMLDivElement> {
  post: BlogPost;
}

const BlogItem: FC<BlogItemProps> = ({
  post: { slug, author, date, title, banner, summary, externalUrl },
}) => {
  return (
    <Link
      href={externalUrl || slug}
      className={
        'transition-all duration-300 ease-linear block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-darker hover:shadow-lg'
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
        <div className={'flex justify-between items-start'}>
          <P className={'line-clamp-2 text-base md:text-base font-medium'}>
            {title}
          </P>
          {externalUrl && (
            <div className={'py-2'}>
              <GoLinkExternal className={'w-4 h-4'} />
            </div>
          )}
        </div>

        <P className={'line-clamp-2 md:text-sm'}>{summary}</P>
        <div
          className={
            'flex justify-between gap-2 pt-2 text-slate-800 dark:text-dark text-sm items-center'
          }
        >
          <P className={'md:text-sm'}>By {author}</P>
          <P className={'md:text-sm'}>{date.toLocaleDateString()}</P>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
