'use client';

import { FC, PropsWithChildren } from 'react';

const Logo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <span className={'text-xl font-semibold'}>
        {children ?? 'Em Ha Tuan'}
      </span>
    </>
  );
};

export default Logo;
