import { provideLatestBlogOfPosts } from '@/data/blog-data';
import { cache } from 'react';
import BlogItem from './blog-item';
import Heading from '../heading';

const BlogLatest = cache(() => {
  const data = provideLatestBlogOfPosts();

  if (!data) {
    return <>No blog post here</>;
  }

  return (
    <div className={'flex flex-col gap-2'}>
      <Heading
        as={'h2'}
        className={'uppercase'}
      >
        Latest
      </Heading>
      <hr className={'my-2'} />
      <div className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'}>
        {data.map((post) => {
          return (
            <BlogItem
              key={post.slug}
              post={post}
            />
          );
        })}
      </div>
    </div>
  );
});

export default BlogLatest;
