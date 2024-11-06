import { provideLatestBlogOfPosts } from '@/data/blog-data';
import { cache } from 'react';

const BlogLatest = cache(() => {
  const data = provideLatestBlogOfPosts();

  if (!data) {
    return <>No blog post here</>;
  }

  return (
    <ul>
      {data &&
        data.length > 0 &&
        data.map((post) => {
          return <li key={post.slug}>{post.title}</li>;
        })}
    </ul>
  );
});

export default BlogLatest;
