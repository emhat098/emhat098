'use strict';

import Link from './components/link/link';

/**
 * A list of React component that we want to pass throught to MDX.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const clientMdxComponent = {
  link: Link,
};

/**
 * A full list of wired HTML elements into custom React Components
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const htmlComponents = {
  a: Link,
};
