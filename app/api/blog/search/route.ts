import { getBlogsData } from '@/data/blog-data';
import { unstable_cache as cache } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const blogsData = cache(
  async () => await getBlogsData('all', 0),
  ['BLOG_CACHE'],
  {
    revalidate: 3000,
    tags: ['api'],
  },
);

export async function GET(request: NextRequest) {
  const { posts } = await blogsData();

  const search = request.nextUrl.searchParams.get('q');
  if (!search) {
    return NextResponse.json(
      {
        data: [],
      },
      {
        status: 204,
        statusText: 'Search params is required',
      },
    );
  }

  const result = posts.filter((c) =>
    c.title.toLowerCase().includes(search?.toLowerCase()),
  );

  return NextResponse.json(
    {
      data: result.map((c) => ({
        slug: c.slug,
        title: c.title,
        banner: c.banner,
        date: c.date,
      })),
    },
    {
      status: 200,
    },
  );
}
