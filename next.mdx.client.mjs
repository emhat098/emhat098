'use strict';

import Code from './components/code/code';
import Pre from './components/pre/pre';
import Link from './components/link/link';
import H1 from './components/heading/h1';
import H2 from './components/heading/h2';
import H3 from './components/heading/h3';
import H4 from './components/heading/h4';
import H5 from './components/heading/h5';
import H6 from './components/heading/h6';
import P from './components/paragraph/paragraph';
import Table from './components/table/table';
import UL from './components/list/ul';
import OL from './components/list/ol';

/**
 * A full list of wired HTML elements into custom React Components.
 * @satisfies {import('mdx/types').MDXComponents}
 */
export const htmlComponents = {
  a: Link,
  code: Code,
  pre: Pre,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  table: Table,
  ul: UL,
  ol: OL,
};
