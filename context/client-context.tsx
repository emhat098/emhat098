import { ClientSharedServerContext } from '@/types/server';
import { assignClientContext } from '@/util/assign-client-context';
import { cache } from 'react';

export const getClientContext = cache(() => {
  const serverSharedContext = assignClientContext({});

  return serverSharedContext;
});

export const setClientContext = (data: Partial<ClientSharedServerContext>) => {
  const _data = assignClientContext(data);

  getClientContext().frontmatter = _data.frontmatter;
  getClientContext().pathname = _data.pathname;
  getClientContext().headings = _data.headings;
  getClientContext().readingTime = _data.readingTime;
  getClientContext().filename = _data.filename;
};
