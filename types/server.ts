import type { Heading } from '@vcarl/remark-headings';
import type { ReadTimeResults } from 'reading-time';
import { BaseFrontMatter } from './frontmatter';

export interface ClientSharedServerContext {
  frontmatter: BaseFrontMatter;
  headings: Array<Heading>;
  pathname: string;
  filename: string;
  readingTime: ReadTimeResults;
}
