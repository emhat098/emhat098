'use strict';

import { evaluate } from '@mdx-js/mdx';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { matter } from 'vfile-matter';
import { NEXT_REHYPE_PLUGINS, NEXT_REMARK_PLUGINS } from './next.mdx.mjs';

const reactRunTime = {
  Fragment,
  jsx,
  jsxs,
};

export async function compileMDX(source, fileExtension) {
  matter(source, { strip: true });
  const { default: MDXContent } = await evaluate(source, {
    remarkPlugins: NEXT_REMARK_PLUGINS,
    rehypePlugins: NEXT_REHYPE_PLUGINS,
    format: fileExtension,
    ...reactRunTime,
  });

  const { headings, matter: frontmatter, readingTime } = source.data;

  return { MDXContent, headings, frontmatter, readingTime };
}
