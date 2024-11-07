import type { Heading } from '@vcarl/remark-headings';
import type { ReadTimeResults } from 'reading-time';
import { LegacyBlogFrontMatter } from './frontmatter';

export interface ClientSharedServerContext {
  frontmatter: LegacyBlogFrontMatter;
  headings: Array<Heading>;
  pathname: string;
  filename: string;
  readingTime: ReadTimeResults;
}
