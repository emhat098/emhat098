'use client';

import { MainContext } from '@/providers/main-provider';
import { ClientSharedServerContext } from '@/types';
import { useContext } from 'react';

const useClientContext = (): ClientSharedServerContext => {
  const { filename, frontmatter, headings, pathname, readingTime } =
    useContext(MainContext);

  return {
    filename,
    frontmatter,
    headings,
    pathname,
    readingTime,
  };
};

export default useClientContext;
