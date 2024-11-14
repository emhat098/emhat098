import { provideBlogCategories } from '@/data/blog-data';
import { getCategoryRoute } from '@/next.dynamic.site.constants.mjs';
import _ from 'lodash';
import CategoryItem from './category-item';
import Link from 'next/link';
import Carousel from '../carousel/carousel';

const CategoryList = () => {
  const categories = provideBlogCategories();

  const slugCategories = categories
    .filter((c) => c !== 'all')
    .map((c) => ({
      slug: getCategoryRoute(c),
      title: _.capitalize(c),
    }));

  return (
    <div className={'flex flex-col gap-2 py-6'}>
      <div className={'flex justify-between items-center'}>
        <h2 className={'pb-4 text-xl md:text-3xl font-light'}>
          {'Browser topics'}
        </h2>
        <Link
          href={'/blog'}
          className={
            'px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-lg bg-green-50 text-slate-950 dark:bg-dark dark:text-dark dark:hover:text-darker dark:hover:bg-darker'
          }
        >
          {'View all topics'}
        </Link>
      </div>

      <Carousel
        items={slugCategories.map((c) => (
          <CategoryItem
            key={c.slug}
            {...c}
          />
        ))}
      />
    </div>
  );
};

export default CategoryList;
