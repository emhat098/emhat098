import { getBlogsData } from '@/data/blog-data';
import { cache, FC } from 'react';
import Carousel from '../carousel/carousel';
import ArticleItem from './article-item';
import cn from '@/util/tailwind-helper';

const getBlogData = cache(async (category: string) => {
  if (!category || category === 'all') {
    throw new Error('Articles is must be specific');
  }
  return getBlogsData(category, 1);
});

interface ArticlesProps {
  title: string;
  summary: string;
  color?: string;
  category: string;
}

const Articles: FC<ArticlesProps> = async ({
  summary,
  title,
  category,
  color = 'blue',
}) => {
  const data = await getBlogData(category);

  if (!data) {
    return <div>{'No found the article'}</div>;
  }

  return (
    <div
      className={cn(
        cn(
          'rounded-xl p-10 bg-blue-50 text-background flex flex-col gap-8 mb-2',
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
      <Carousel
        items={data.posts.map((p) => (
          <ArticleItem
            key={p.slug}
            {...p}
          />
        ))}
        sliderClass={'gap-2'}
      />
    </div>
  );
};

export default Articles;
