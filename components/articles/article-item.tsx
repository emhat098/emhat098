import { FC } from 'react';
import Link from '../link/link';
import { BlogPost } from '@/types';
import Image from '../image/image';

const ArticleItem: FC<BlogPost> = ({ banner, title, slug }) => {
  return (
    <div className={'h-full w-96 group border-b m-2 p-4 bg-white rounded-lg'}>
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
        <div className={'flex flex-col gap-2 pt-4'}>
          <p
            className={
              'line-clamp-1 text-base font-medium group-hover:underline'
            }
          >
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
