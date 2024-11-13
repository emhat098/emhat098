import { FC } from 'react';
import Link from '../link/link';

interface CategoryItemProps {
  slug: string;
  title: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ slug, title }) => {
  return (
    <div
      className={
        'transition-all duration-300 ease-in-out flex flex-col items-center justify-center bg-white hover:bg-green-50 rounded-xl border px-14 py-8 max-w-52'
      }
    >
      <Link
        href={slug}
        className={
          'flex flex-col items-center hover:border-b-0 hover:no-underline'
        }
      >
        <p
          className={
            'text-8xl font-extralight text-blue-950 border-b border-b-black mb-2'
          }
        >
          {title.charAt(0)}
        </p>
        <p className={'font-normal text-lg'}>{title}</p>
      </Link>
    </div>
  );
};

export default CategoryItem;
