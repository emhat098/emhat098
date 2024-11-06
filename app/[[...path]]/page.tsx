import Layout from '@/components/layouts/layout';
import MDXRenderer from '@/components/mdx/mdx-renderer';
import { setClientContext } from '@/context/client-context';
import generateBlogData from '@/generator/blog.mjs';
import { dynamicRouter } from '@/next.dynamic.mjs';
import { PAGE_VIEWPORT } from '@/next.dynamic.site.constants.mjs';
import MainProvider from '@/providers/main-provider';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type DynamicStaticPaths = {
  path: Array<string>;
};

interface DynamicParams {
  params: Promise<DynamicStaticPaths>;
}

export const generateViewport = async () => ({
  ...PAGE_VIEWPORT,
});

export const generateMetadata = async (
  params: DynamicParams,
): Promise<Metadata> => {
  const { path } = await params.params;
  const pathName = dynamicRouter.getPathName(path);

  const metadata = await dynamicRouter.getMetadata(pathName);
  return metadata;
};

const Page = async (params: DynamicParams) => {
  const { path } = await params.params;
  const pathName = dynamicRouter.getPathName(path);
  const { source, filename } = await dynamicRouter.getMarkdownFile(pathName);

  if (!source || !filename) {
    return notFound();
  }

  const { MDXContent, frontmatter, headings, readingTime } =
    await dynamicRouter.getMdxContent(source, filename);

  const sharedContext = {
    frontmatter,
    headings,
    readingTime,
    pathname: pathName,
  };

  setClientContext(sharedContext);

  return (
    <MainProvider {...sharedContext}>
      <Layout layout={frontmatter.layout}>
        <MDXRenderer Component={MDXContent} />
      </Layout>
    </MainProvider>
  );
};

export const generateStaticParams = async () => {
  const { posts } = await generateBlogData();

  const paths = posts.map((post) => ({
    path: [post.slug],
  }));

  return [...paths, ...[{ path: ['/'] }]];
};

export const dynamicParams = true;

export const dynamic = 'force-static';

export const revalidate = 300;

export default Page;
