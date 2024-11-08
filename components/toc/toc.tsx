'use client';

import type { Heading } from '@vcarl/remark-headings';
import React, { FC, Fragment, useMemo } from 'react';
import Link from '@/components/link/link';

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

  const headingList = useMemo(
    () => headingItems.filter(({ depth }) => depth >= minDepth && depth <= 4),
    [minDepth, headingItems],
  );

  return (
    <div className={'sticky top-0'}>
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
              <ol className={'list-[circle] ml-4'}>
                {headingList.map((head) => (
                  <li
                    key={head.value}
                    className={'text-sm'}
                  >
                    <Link href={`#${head?.data?.id}`}>{head.value}</Link>
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
