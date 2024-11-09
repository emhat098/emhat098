import { FC } from 'react';
import Image from '@/components/image/image';
import { provideBlogBySlug } from '@/data/blog-data';
import { sitePageConfig } from '@/next.page.config.mjs';
import Link from '@/components/link/link';

interface PickUpProps {
  slug?: string;
}

const PickUp: FC<PickUpProps> = ({ slug }) => {
  const blog = provideBlogBySlug(slug || sitePageConfig.pickup);

  if (!blog) return null;

  const { title, banner, summary, slug: blogSlug } = blog;

  return (
    <div className={'relative max-h-max h-80'}>
      <Link href={blogSlug}>
        <Image
          alt={title}
          src={banner}
        />
        <div
          className={
            'absolute top-0 left-0 h-full flex flex-col justify-center w-[50vw] sm:gap-6 my-auto sm:px-10 gap-2 px-4'
          }
        >
          <p className={'text-3xl sm:text-4xl font-normal'}>{title}</p>
          <span className={'text-sm sm:text-base font-normal'}>{summary}</span>
        </div>
      </Link>
    </div>
  );
};

export default PickUp;
