'use client';

import { FC, PropsWithChildren } from 'react';

const Logo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <span className={'text-lg font-medium'}>{children ?? 'Em Ha Tuan'}</span>
    </>
  );
};

export default Logo;
