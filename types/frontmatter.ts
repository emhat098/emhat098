import type { Layouts } from './layout';

export interface LegacyFrontMatter extends Record<string, unknown> {
  layout: Layouts;
  title: string;
  labels: Record<string, string>;
  author: string;
}

export interface LegacyBlogFrontMatter extends LegacyFrontMatter {
  author: string;
  date: string;
  summary: string;
  publisher: string;
}
