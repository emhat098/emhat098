import Layout from '@/components/layouts/layout';
import MDXRenderer from '@/components/mdx/mdx-renderer';
import { setClientContext } from '@/context/client-context';
import { dynamicRouter } from '@/next.dynamic.mjs';
import MainProvider from '@/providers/main-provider';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type DynamicStaticPaths = {
  path: Array<string>;
};

type DynamicParams = {
  params: DynamicStaticPaths;
};

export const generateMetadata = async (
  params: DynamicParams,
): Promise<Metadata> => {
  const pageParams = await params;
  const { path } = await pageParams.params;
  const pathName = dynamicRouter.getPathName(path);

  const { source, filename } = await dynamicRouter.getMarkdownFile(pathName);
  const { frontmatter: metadata } = await dynamicRouter.getMdxContent(
    source,
    filename,
  );

  return {
    title: metadata.title,
    description: metadata.summary,
    publisher: metadata?.publisher || 'Em Ha Tuan',
  };
};

const Page = async (params: DynamicParams) => {
  const pageParams = await params;
  const { path } = await pageParams.params;
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

export default Page;
