'use client';

import cn from '@/util/tailwind-helper';
import NextLink, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

const Link: FC<
  PropsWithChildren & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <NextLink
      {...props}
      className={cn(
        'transition-all duration-300 border-b border-b-transparent hover:border-b-black',
        props.className,
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
