import { provideBlogsBySlugs } from '@/data/blog-data';
import { FC } from 'react';
import Carousel from '../carousel/carousel';
import ArticleItem from './article-item';
import cn from '@/util/tailwind-helper';

interface ArticlesProps {
  title: string;
  summary: string;
  color?: string;
  slugs: Array<string>;
}

const Articles: FC<ArticlesProps> = ({
  summary,
  title,
  slugs,
  color = 'blue',
}) => {
  const data = provideBlogsBySlugs(slugs);

  if (!data) {
    return <div>{'No found the article.'}</div>;
  }

  return (
    <div
      className={cn(
        cn(
          'rounded-xl p-10 bg-blue-50 text-background flex flex-col gap-8 mb-8',
          color && `bg-${color}-50`,
          'shadow-sm',
        ),
      )}
    >
      <div className='flex justify-between items-start'>
        <div className='flex flex-col gap-4'>
          <p className={'text-4xl'}>{title}</p>
          <div className={'sm:w-[50vw]'}>{summary}</div>
        </div>
      </div>
      <div className={'flex flex-col gap-2 py-6'}>
        <Carousel
          items={data.map((p) => (
            <ArticleItem
              key={p.slug}
              {...p}
            />
          ))}
          sliderClass={'gap-4'}
        />
      </div>
    </div>
  );
};

export default Articles;
