'use client';

import { FC } from 'react';
import Image from '../image/image';
import cn from '@/util/tailwind-helper';

interface AvatarProps {
  title: string;
  image?: string;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ title, image, className }) => {
  return (
    <div className={cn('w-[40px] h-[40px]', className)}>
      {image ? (
        <Image
          src={image || 'https://picsum.photos/1081'}
          alt={title}
          className={'h-full w-full object-cover rounded-full shadow'}
        />
      ) : (
        <div
          className={
            'h-full w-full rounded-full shadow flex justify-center items-center flex-row'
          }
        >
          {title.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
