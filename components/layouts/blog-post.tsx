/* eslint-disable @next/next/no-img-element */
'use client';

import { FC, PropsWithChildren } from 'react';
import Container from '@/components/container/container';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import useClientContext from '@/hooks/use-client';
import Image from '@/components/image/image';
import Avatar from '@/components/avatar/avatar';
import InFooter from '@/components/footer/in-footer';
import dynamic from 'next/dynamic';

const TOC = dynamic(() => import('@/components/toc/toc'), {
  ssr: false,
  loading: () => (
    <div
      className={
        'animate-pulse h-10 w-full bg-slate-200 dark:bg-dark dark:text-dark rounded text-sm flex flex-col gap-2 items-center justify-center shadow'
      }
    ></div>
  ),
});

const BlogPostLayout: FC<PropsWithChildren> = ({ children }) => {
  const { headings, frontmatter, readingTime } = useClientContext();

  const lastUpdated = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString()
    : undefined;

  return (
    <main>
      <Navbar />
      <Container id='blog-post'>
        <div className='grid grid-cols-12 sm:gap-10 w-full mx-auto px-2 md:p-0'>
          {/* The main content of blog */}
          <article className={'col-span-12 sm:col-span-9'}>
            <div className='flex flex-col gap-2'>
              <h1 className={'font-bold text-3xl py-4'}>{frontmatter.title}</h1>
              <div className={'flex flex-row gap-2 items-center'}>
                <Avatar
                  image={frontmatter?.authorImg}
                  title={frontmatter.author}
                />
                <span>{'-'}</span>
                <p className={'font-normal text-base'}>{frontmatter.author}</p>
              </div>
              <div className={'h-[240px] my-5'}>
                <Image
                  src={frontmatter?.banner || 'https://picsum.photos/1080'}
                  alt={'Banner image of ' + frontmatter.title}
                />
              </div>
              <details className={'block sm:hidden'}>
                <summary className={'font-normal'}>
                  Details
                  <hr />
                </summary>
                <TOC
                  items={{
                    'Last updated:': lastUpdated,
                    'Reading time:': readingTime.text,
                  }}
                  headings={{
                    items: headings,
                    minDepth: 2,
                  }}
                />
              </details>
              <div className={'*:break-words'}>{children}</div>
            </div>
          </article>
          {/* Table of content */}
          <section className={'hidden sm:block sm:col-span-3 w-auto'}>
            <TOC
              items={{
                'Author: ': frontmatter.author,
                'Last updated:': lastUpdated,
                'Reading time:': readingTime.text,
              }}
              headings={{
                items: headings,
                minDepth: 2,
              }}
            />
          </section>
        </div>
        <InFooter />
        <Footer />
      </Container>
    </main>
  );
};

export default BlogPostLayout;
