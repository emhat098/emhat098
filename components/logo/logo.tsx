'use client';

import cn from '@/util/tailwind-helper';
import { FC, PropsWithChildren } from 'react';

interface LogoProps extends PropsWithChildren {
  className?: string;
}

const Logo: FC<LogoProps> = ({ children, className }) => {
  return (
    <span className={cn('text-lg font-medium hover:animate-pulse', className)}>
      {children ?? 'Em Ha Tuan'}
    </span>
  );
};

export default Logo;
