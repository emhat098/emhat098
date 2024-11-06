'use strict';

import Code from './components/code/code';
import Pre from './components/pre/pre';
import Link from './components/link/link';

/**
 * A list of React component that we want to pass throught to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const clientMdxComponent = {};

/**
 * A full list of wired HTML elements into custom React Components
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const htmlComponents = {
  a: Link,
  code: Code,
  pre: Pre,
};
