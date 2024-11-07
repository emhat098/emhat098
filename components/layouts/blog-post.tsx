/* eslint-disable @next/next/no-img-element */
'use client';

import { FC, PropsWithChildren } from 'react';
import Container from '@/components/container/container';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import TOC from '../toc/toc';
import useClientContext from '@/hooks/use-client';

const BlogPostLayout: FC<PropsWithChildren> = ({ children }) => {
  const { headings, frontmatter, readingTime } = useClientContext();

  const lastUpdated = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString()
    : undefined;

  return (
    <main>
      <Navbar />
      <Container>
        <div className='grid grid-cols-12 gap-10 w-full'>
          {/* The main content of blog */}
          <article className={'col-span-9'}>
            <div className='flex flex-col gap-2'>
              <h1 className={'font-bold text-3xl py-4'}>{frontmatter.title}</h1>
              {/* TODO: Split this element in to the avatar element. */}
              <div className={'flex flex-row gap-2 items-center'}>
                <div className={'w-[40px] h-[40px]'}>
                  <img
                    src={'https://picsum.photos/1081'}
                    alt={'no image'}
                    className={'h-full w-full object-cover rounded-full shadow'}
                  />
                </div>
                <span>{'-'}</span>
                <p className={'font-normal text-base'}>{frontmatter.author}</p>
              </div>
              <div className={'h-[240px] my-5'}>
                <img
                  src={'https://picsum.photos/1080'}
                  alt={'no image'}
                  className={'h-full w-full object-cover rounded-xl shadow'}
                />
              </div>
              <>{children}</>
            </div>
          </article>
          {/* Table of content */}
          <section className={'col-span-3 w-auto'}>
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
      </Container>
      <Footer />
    </main>
  );
};

export default BlogPostLayout;
