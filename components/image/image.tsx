/* eslint-disable @next/next/no-img-element */
'use client';

import cn from '@/util/tailwind-helper';
import { FC, ImgHTMLAttributes } from 'react';

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return (
    <img
      {...props}
      alt={props.alt}
      className={cn(
        'rounded-lg shadow h-full w-full object-cover',
        props.className,
      )}
    />
  );
};

export default Image;
