import { FC } from 'react';
import Link from '../link/link';
import { BlogPost } from '@/types';
import Image from '../image/image';

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
        <p className={'font-normal line-clamp-2'}>{title}</p>
      </Link>
    </div>
  );
};

export default ArticleItem;
