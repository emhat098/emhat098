'use client';

import NextTopLoader from 'nextjs-toploader';

const TopLoader = () => {
  return (
    <>
      <NextTopLoader
        showSpinner={false}
        color={'#000'}
        height={1}
      />
    </>
  );
};

export default TopLoader;
