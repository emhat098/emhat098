'use client';

import { FC } from 'react';
import Image from '@/components/image/image';

interface BannerImageProps {
  image: string;
  title: string;
}

const BannerImage: FC<BannerImageProps> = ({ image, title }) => {
  return (
    <div className={'relative max-h-max h-full'}>
      <Image
        src={image}
        alt={title}
        className={
          'h-[240px] md:h-[360px] object-contain bg-slate-300 border-none'
        }
      />
    </div>
  );
};

export default BannerImage;
