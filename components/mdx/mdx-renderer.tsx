import { FC } from 'react';
import { MDXComponents, MDXContent } from 'mdx/types';

const components: MDXComponents = {};

const MDXRenderer: FC<{ Component: MDXContent }> = ({ Component }) => {
  return <Component components={components} />;
};

export default MDXRenderer;
