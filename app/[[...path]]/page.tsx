import MDXRenderer from '@/components/mdx/mdx-renderer';
import { dynamicRouter } from '@/next.dynamic.mjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Params {
  params: Promise<{
    path: string[];
  }>;
}

export const generateMetadata = async (params: Params): Promise<Metadata> => {
  const pageParams = await params;
  const { path } = await pageParams.params;
  const pathName = dynamicRouter.getPathName(path);

  const { source, filename } = await dynamicRouter.getMarkdownFile(pathName);
  const { frontmatter: metadata } = await dynamicRouter.getMdxContent(
    source,
    filename,
  );

  console.log({ metadata });

  return {
    title: metadata.title,
    description: metadata.summary,
    publisher: metadata?.publisher || 'Em Ha Tuan',
  };
};

const Page = async (params: Params) => {
  const pageParams = await params;
  const { path } = await pageParams.params;
  const pathName = dynamicRouter.getPathName(path);

  const { source, filename } = await dynamicRouter.getMarkdownFile(pathName);

  if (!source) {
    return notFound();
  }

  if (source.length && filename.length) {
    const {
      MDXContent,
      // frontmatter, headings, readingTime
    } = await dynamicRouter.getMdxContent(source, filename);

    return <MDXRenderer Component={MDXContent} />;
  }

  return (
    <>
      <h1>Home page</h1>
    </>
  );
};

export default Page;
