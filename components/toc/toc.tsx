'use client';

import type { Heading } from '@vcarl/remark-headings';
import React, { FC, Fragment, useEffect, useMemo, useState } from 'react';
import Link from '@/components/link/link';
import cn from '@/util/tailwind-helper';

interface TOCProps {
  items?: Record<string, React.ReactNode>;
  headings?: {
    items: Array<Heading>;
    minDepth?: number;
  };
}

const TOC: FC<TOCProps> = ({ headings, items }) => {
  // The default depth of headings to display in the table of contents.
  const { minDepth = 2, items: headingItems = [] } = headings || {};
  const [activeHeading, setActiveHeading] = useState(
    window?.location?.hash?.slice(1, window.location.hash.length) ?? '',
  );

  const headingList = useMemo(
    () => headingItems.filter(({ depth }) => depth >= minDepth && depth <= 4),
    [minDepth, headingItems],
  );

  useEffect(() => {
    const handleScroll = () => {
      headings?.items.forEach((h) => {
        const el = document.getElementById(h.data.id);
        if (
          el &&
          el.getBoundingClientRect().top < 25 &&
          el.getBoundingClientRect().top > 0
        ) {
          setActiveHeading(h.data.id);
        }
      });

      // User is scrolling down the bottom of page.
      // We set the active element is last items in `headings`.
      if (
        Math.floor(window.innerHeight + window.scrollY + 1) >=
        document.documentElement.scrollHeight
      ) {
        setActiveHeading(headings?.items[headings.items.length - 1].data.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  return (
    <div
      className={
        'sticky top-0 sm:landscape:overflow-y-scroll sm:landscape:overflow-hidden sm:landscape:scrollbar-thin sm:landscape:max-h-[90vh]'
      }
    >
      <div className={'flex flex-col gap-2 pl-4 p-2 border-l'}>
        <div>
          {items &&
            Object.entries(items)
              .filter(([, value]) => !!value)
              .map(([key, value]) => (
                <Fragment key={key}>
                  <dt className={'font-medium py-1'}>{key}</dt>
                  <dd className={'text-sm'}>{value}</dd>
                </Fragment>
              ))}
        </div>

        {headingList.length > 0 && (
          <div>
            <dt className={'font-medium underline underline-offset-4 my-2'}>
              {'Table of contents:'}
            </dt>
            <dd>
              <ol className={'ml-2'}>
                {headingList.map((head) => (
                  <li
                    key={head.value}
                    className={'text-sm'}
                    style={{}}
                  >
                    <Link
                      className={cn(
                        'transition-all duration-300 ease-linear font-medium',
                        activeHeading === head?.data?.id
                          ? 'text-slate-950'
                          : 'text-slate-500',
                      )}
                      href={`#${head?.data?.id}`}
                    >
                      {' '}
                      - {head.value}
                    </Link>
                  </li>
                ))}
              </ol>
            </dd>
          </div>
        )}
      </div>
    </div>
  );
};

export default TOC;
