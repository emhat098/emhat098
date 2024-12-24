'use client';

import type { Heading } from '@vcarl/remark-headings';
import React, { FC, useMemo, useState } from 'react';
import cn from '@/util/tailwind-helper';
import Link from '@/components/link/link';
import { RiCloseLargeFill } from 'react-icons/ri';

interface TOCProps {
  headings?: {
    items: Array<Heading>;
    minDepth?: number;
  };
}

const TOC: FC<TOCProps> = ({ headings }) => {
  const { minDepth = 2, items: headingItems = [] } = headings || {};
  const [displayedTOC, setDisplayTOC] = useState(false);

  const [activeHeading, setActiveHeading] = useState(
    window?.location?.hash?.slice(1, window.location.hash.length) ?? '',
  );

  const headingList = useMemo(
    () => headingItems.filter(({ depth }) => depth >= minDepth && depth <= 4),
    [minDepth, headingItems],
  );

  const handleOnClick = (id: string) => {
    setActiveHeading(id);
  };

  return (
    <div className={'group'}>
      <div
        className={
          'group fixed right-4 top-20 z-10 cursor-pointer rounded border border-white bg-white px-2 py-3 shadow-sm transition-all duration-300 ease-linear hover:border-slate-300 dark:bg-slate-500 lg:right-10'
        }
        onClick={() => setDisplayTOC(!displayedTOC)}
      >
        <div className='flex flex-col gap-1'>
          {headingList.length > 0 &&
            headingList.map((h) => (
              <div
                key={h.data.id}
                className={
                  'h-1 w-5 border-t border-slate-700 transition-all duration-300 ease-linear group-hover:border-slate-500 dark:border-white dark:group-hover:border-slate-50'
                }
              ></div>
            ))}
        </div>
      </div>
      <div
        className={cn(
          'fixed right-16 top-20 z-10 rounded-lg border-2 border-slate-300 bg-white opacity-0 shadow-lg transition-all duration-300 ease-linear dark:bg-slate-500 lg:right-24',
          displayedTOC && 'opacity-100',
        )}
      >
        <div
          className={'absolute right-4 top-4 cursor-pointer'}
          onClick={() => setDisplayTOC(false)}
        >
          <RiCloseLargeFill className={'h-4 w-4 text-slate-500'} />
        </div>
        <div className={'flex flex-col gap-2 p-4'}>
          {headingList.length > 0 && (
            <dd>
              <dt className={'pb-1 text-sm uppercase'}>Content:</dt>
              <ol className={'space-y-1'}>
                {headingList.map((head) => (
                  <li
                    key={head.value}
                    className={'text-xs'}
                  >
                    <Link
                      className={cn(
                        'font-normal text-slate-500 transition-all duration-300 ease-linear hover:text-slate-950 dark:text-slate-300',
                        activeHeading === head?.data?.id &&
                          'font-bold text-slate-950 dark:text-white',
                      )}
                      href={`#${head?.data?.id}`}
                      onClick={() => handleOnClick(head?.data?.id)}
                    >
                      {head.value}
                    </Link>
                  </li>
                ))}
              </ol>
            </dd>
          )}
        </div>
      </div>
    </div>
  );
};

export default TOC;
