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
        <h2 className={'pb-4 text-3xl font-light'}>{'Browser topics'}</h2>
        <Link
          href={'/blog'}
          className={'px-4 py-2 border rounded-xl bg-green-50 text-blue-950'}
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
