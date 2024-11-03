'use strict';

import remarkHeadings from '@vcarl/remark-headings';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import readingTime from 'remark-reading-time';

import rehypeShikiji from './next.mdx.shiki.mjs';

export const NEXT_REHYPE_PLUGINS = [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
  rehypeShikiji,
];

export const NEXT_REMARK_PLUGINS = [remarkGfm, remarkHeadings, readingTime];
