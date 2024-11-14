import { FC } from 'react';
import P from '../paragraph/paragraph';
import Link from '../link/link';
import cn from '@/util/tailwind-helper';

interface WithQuoteProps {
  title: string;
  summary: string;
  author: {
    title: string;
    href?: string;
  };
}

const WithQuote: FC<WithQuoteProps> = ({ summary, title, author }) => {
  return (
    <blockquote
      className={cn(
        'hover:bg-green-50 text-black dark:text-dark dark:bg-dark dark:hover:bg-darker py-2 px-4 border-l-4 border-slate-800 my-2 flex flex-col gap-1 rounded rounded-l-none',
      )}
    >
      <P className={'md:text-lg py-0 font-medium'}>{title}</P>
      <div className={'py-0'}>
        <span>{summary}</span>
        <span className={'px-1'}>{'-'}</span>
        <span>
          {author.href ? (
            <Link href={author.href}>{author.title}</Link>
          ) : (
            <>{author.title}</>
          )}
        </span>
      </div>
    </blockquote>
  );
};

export default WithQuote;
