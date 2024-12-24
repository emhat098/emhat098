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
    <div className={cn('h-6 w-6', className)}>
      {image ? (
        <Image
          src={image || 'https://picsum.photos/1081'}
          alt={title}
          className={'h-full w-full rounded-full object-cover shadow'}
        />
      ) : (
        <div
          className={
            'flex h-full w-full flex-row items-center justify-center rounded-full shadow'
          }
        >
          {title.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
