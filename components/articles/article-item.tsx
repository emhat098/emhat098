import { FC } from 'react';
import Link from '../link/link';
import { BlogPost } from '@/types';
import Image from '../image/image';
import P from '../paragraph/paragraph';
import { GoLinkExternal } from 'react-icons/go';

const ArticleItem: FC<BlogPost> = ({ banner, title, slug, externalUrl }) => {
  return (
    <div
      className={
        'p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-dark hover:shadow dark:shadow-none'
      }
    >
      <Link
        href={externalUrl || slug}
        className={
          'flex flex-col gap-2 items-center hover:border-b-0 w-[240px] '
        }
        target={externalUrl ? '_blank' : '_parent'}
      >
        <Image
          src={banner}
          alt={title}
          className={'w-full h-[144px]'}
        />
        <div className='flex justify-between items-start gap-2'>
          <P className={'line-clamp-2'}>{title}</P>
          {externalUrl && (
            <div className={'py-2'}>
              <GoLinkExternal className={'w-4 h-4'} />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
