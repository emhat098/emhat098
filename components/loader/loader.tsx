'use client';

import useTheme from '@/hooks/use-theme';
import NextTopLoader from 'nextjs-toploader';
import { FC, PropsWithChildren } from 'react';

const TopLoader: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <>
      <NextTopLoader
        showSpinner={false}
        color={theme === 'light' ? '#000' : '#fff'}
        height={1}
      />
      {children}
    </>
  );
};

export default TopLoader;
