import { FC } from 'react';
import Image from '@/components/image/image';
import { provideBlogBySlug } from '@/data/blog-data';
import { sitePageConfig } from '@/next.page.config.mjs';
import Link from '@/components/link/link';
import Title from '@/components/title/title';

interface BannerProps {
  slug?: string;
}

const Banner: FC<BannerProps> = ({ slug }) => {
  const blog = provideBlogBySlug(slug || sitePageConfig.banner);

  if (!blog) return null;

  const { title, banner, summary, slug: blogSlug } = blog;

  return (
    <div className={'relative max-h-max h-full my-4'}>
      <Link href={blogSlug}>
        <Image
          alt={title}
          src={banner}
          className={'h-[240px] md:h-[360px]'}
        />
        <div
          className={
            'absolute top-0 left-0 h-full flex flex-col justify-center w-[75vw] md:w-[50vw] sm:gap-6 my-auto sm:px-10 gap-2 px-4'
          }
        >
          <Title>{title}</Title>
          <span
            className={
              'text-sm line-clamp-3 sm:text-base font-normal md:line-clamp-none'
            }
          >
            {summary}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Banner;
