'use strict';

import { evaluate } from '@mdx-js/mdx';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { matter } from 'vfile-matter';
import { NEXT_REHYPE_PLUGINS, NEXT_REMARK_PLUGINS } from './next.mdx.mjs';
import createGitHubSlugger from './util/slugger';
import { sitePageConfig } from './next.page.config.mjs';

const reactRunTime = {
  Fragment,
  jsx,
  jsxs,
};

/**
 * This is a custom simple MDX compiler.
 *
 * @param {import('vfile').VFile} source
 * @param {'md' | 'mdx'} fileExtension
 * @returns {Promise<{
 *    MDXContent: import('mdx/types').MDXContent;
 *    headings: Array<import('@vcarl/remark-headings').Heading>;
 *    frontmatter: import('./types/frontmatter').BaseFrontMatter;
 *    readingTime: import('reading-time').ReadTimeResults;
 * }>}
 */
export async function compileMDX(source, fileExtension) {
  matter(source, { strip: true });

  const { default: MDXContent } = await evaluate(source, {
    remarkPlugins: NEXT_REMARK_PLUGINS,
    rehypePlugins: NEXT_REHYPE_PLUGINS,
    format: fileExtension,
    ...reactRunTime,
  });

  let { headings, matter: frontmatter, readingTime } = source.data;

  // Create slugger for each heading level to make the Table of content.
  const slugger = createGitHubSlugger();
  headings.forEach((heading) => {
    heading.data = {
      ...heading.data,
      id: slugger(heading.value),
    };
  });

  frontmatter = {
    ...frontmatter,
    author: sitePageConfig.author.name || frontmatter?.author || '',
    authorImg: sitePageConfig.author.imageUrl || frontmatter?.authorImg || '',
  };

  return { MDXContent, headings, frontmatter, readingTime };
}
