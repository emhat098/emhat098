import { FC } from 'react';
import Link from '../link/link';
import P from '../paragraph/paragraph';

interface CategoryItemProps {
  slug: string;
  title: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ slug, title }) => {
  return (
    <div
      className={
        'transition-all duration-300 ease-in-out flex flex-col items-center justify-center bg-white hover:bg-green-50 dark:bg-dark dark:hover:bg-darker dark:text-dark rounded-xl border px-14 py-8 max-w-52'
      }
    >
      <Link
        href={slug}
        className={
          'flex flex-col items-center hover:border-b-0 hover:no-underline dark:bg-transparent'
        }
      >
        <P
          className={
            'text-6xl md:text-8xl font-extralight text-blue-950 border-b border-b-black dark:border-b-white dark:text-dark dark:hover:text-darker mb-2'
          }
        >
          {title.charAt(0)}
        </P>
        <P
          className={
            'font-normal md:text-lg text-blue-950 dark:border-b-white dark:text-dark dark:hover:text-darker'
          }
        >
          {title}
        </P>
      </Link>
    </div>
  );
};

export default CategoryItem;
