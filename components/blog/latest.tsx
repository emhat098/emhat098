import { provideLatestBlogOfPosts } from '@/data/blog-data';
import { cache } from 'react';
import BlogItem from './blog-item';
import cn from '@/util/tailwind-helper';

const BlogLatest = cache(() => {
  const data = provideLatestBlogOfPosts();

  if (!data) {
    return <>No blog post here</>;
  }

  return (
    <div className={'grid grid-cols-4 grid-rows-2 gap-4'}>
      {data.map((post, index) => {
        const isSpanCol = index === 1;
        return (
          <div
            className={cn(
              isSpanCol && 'col-span-2 row-span-2 border-l border-r px-4',
            )}
            key={post.slug}
          >
            <BlogItem post={post} />
          </div>
        );
      })}
    </div>
  );
});

export default BlogLatest;
