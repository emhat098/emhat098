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
import MinContainer from '../container/min-container';
import { PiBook, PiClock } from 'react-icons/pi';

const TOC = dynamic(() => import('@/components/toc/toc'), {
  ssr: false,
  loading: () => (
    <div
      className={
        'flex h-10 w-full animate-pulse flex-col items-center justify-center gap-2 rounded bg-slate-200 text-sm shadow dark:bg-dark dark:text-dark'
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
        {/* The main content of blog */}
        <MinContainer className={'relative'}>
          <article>
            <div className='flex flex-col gap-3'>
              <h1 className={'py-4 text-3xl font-bold'}>{frontmatter.title}</h1>
              <div className={'flex flex-row items-center gap-1'}>
                <Avatar
                  image={frontmatter?.authorImg}
                  title={frontmatter.author}
                />
                <span>{'-'}</span>
                <p className={'text-sm font-medium'}>{frontmatter.author}</p>
              </div>
              <div className='flex gap-2'>
                <div className='inline-flex items-center gap-1 text-xs'>
                  <PiClock className={'h-4 w-4'} />
                  <span>{lastUpdated}</span>
                </div>
                <div className='inline-flex items-center gap-1 text-xs'>
                  <PiBook className={'h-4 w-4'} />
                  <span>{readingTime.text}</span>
                </div>
              </div>
              <div className={'my-5 h-[240px]'}>
                <Image
                  src={frontmatter?.banner || 'https://picsum.photos/1080'}
                  alt={'Banner image of ' + frontmatter.title}
                />
              </div>
              <TOC
                headings={{
                  items: headings,
                  minDepth: 2,
                }}
              />
              <div className={'*:break-words'}>{children}</div>
            </div>
          </article>
          <TOC
            headings={{
              items: headings,
              minDepth: 2,
            }}
          />
        </MinContainer>
        <InFooter />
        <Footer />
      </Container>
    </main>
  );
};

export default BlogPostLayout;
