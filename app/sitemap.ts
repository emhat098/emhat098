import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/next.constants.mjs';
import { dynamicRouter } from '@/next.dynamic.mjs';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const routes = await dynamicRouter.getRoutes();
  const paths = [];

  const currentDate = new Date().toISOString();

  for (const route of routes) {
    paths.push({
      url: `${BASE_URL}${route.startsWith('/') ? '' : '/'}${route}`,
      lastModified: currentDate,
      changeFrequency: 'always' as const,
    });
  }

  return [...paths];
};

export default sitemap;

export const dynamic = 'error';
