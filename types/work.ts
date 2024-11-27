export type ReferenceWork = {
  title: string;
  content?: string;
  href?: string;
};

export type WorkData = {
  title: string;
  banner: string;
  date: Date;
  slug: string;
  summary: string;
};

export type WorkType = {
  href: string;
  year: string;
  title: string;
  description: string;
  shortDescription: string;
  responsibility: Array<string>;
  references: Array<ReferenceWork>;
  images: [
    {
      src: string;
      alt: string;
    },
  ];
  videos?: Array<string>;
};
