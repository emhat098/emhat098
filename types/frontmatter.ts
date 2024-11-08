import type { Layouts } from './layout';

export interface FrontMatter extends Record<string, unknown> {
  layout: Layouts;
  title: string;
  labels: Record<string, string>;
  author: string;
}

export interface BaseFrontMatter extends FrontMatter {
  authorImg?: string;
  date: string;
  summary: string;
  publisher: string;
  banner?: string;
}

export interface LegacyFrontMatter {
  data: BaseFrontMatter;
}
