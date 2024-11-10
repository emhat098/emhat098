import { FC } from 'react';
import Link from '../link/link';
import { BlogPost } from '@/types';
import Image from '../image/image';
import P from '../paragraph/paragraph';

const ArticleItem: FC<BlogPost> = ({ banner, title, slug }) => {
  return (
    <div>
      <Link
        href={slug}
        className={
          'flex flex-col gap-2 items-center hover:border-b-0 w-[240px]'
        }
      >
        <Image
          src={banner}
          alt={title}
          className={'w-full h-[144px]'}
        />
        <P className={'line-clamp-2'}>{title}</P>
      </Link>
    </div>
  );
};

export default ArticleItem;
