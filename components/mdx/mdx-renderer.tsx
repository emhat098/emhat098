import { FC } from 'react';
import { MDXComponents, MDXContent } from 'mdx/types';

import { htmlComponents, clientMdxComponent } from '@/next.mdx.client.mjs';
import { mdxComponents } from '@/next.mdx.use.mjs';

// @ts-expect-error. This should be done after we are figure out.
const components: MDXComponents = {
  ...htmlComponents,
  ...clientMdxComponent,
  ...mdxComponents,
};

const MDXRenderer: FC<{ Component: MDXContent }> = ({ Component }) => {
  return <Component components={components} />;
};

export default MDXRenderer;
