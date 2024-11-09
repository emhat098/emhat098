import { getBlogsData } from '@/data/blog-data';
import { NextResponse } from 'next/server';

export async function GET() {
  const { posts } = getBlogsData('all', 0);
  return NextResponse.json({
    data: posts.map((c) => ({
      slug: c.slug,
      title: c.title,
      banner: c.banner,
    })),
  });
}
