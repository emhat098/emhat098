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
        'text-black hover:underline hover:text-blue-950',
        props.className,
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
