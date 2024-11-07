'use client';

import cn from '@/util/tailwind-helper';
import NextLink from 'next/link';
import { ComponentProps, FC } from 'react';

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  href: string;
};

const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink
      {...props}
      className={cn(
        'transition-all duration-300 border-b border-b-transparent hover:border-b-black hover:text-slate-700',
        props.className,
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
