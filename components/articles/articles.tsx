import { provideBlogsBySlugs } from '@/data/blog-data';
import { FC } from 'react';
import Carousel from '@/components/carousel/carousel';
import ArticleItem from './article-item';
import cn from '@/util/tailwind-helper';
import Title from '@/components/title/title';
import P from '../paragraph/paragraph';

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
          'rounded-xl p-4 sm:p-8 md:p-10 bg-blue-50 text-background flex flex-col gap-2 md:gap-8 md:mb-8 mb-4 shadow-sm',
          color && `bg-${color}-50`,
        ),
      )}
    >
      <div className='flex justify-between items-start'>
        <div className='flex flex-col gap-2 md:gap-4'>
          <Title>{title}</Title>
          <P className={'sm:w-[50vw]'}>{summary}</P>
        </div>
      </div>
      <div className={'flex flex-col py-2 md:py-6'}>
        <Carousel
          items={data.map((p) => (
            <ArticleItem
              key={p.slug}
              {...p}
            />
          ))}
          sliderClass={'gap-0'}
        />
      </div>
    </div>
  );
};

export default Articles;
