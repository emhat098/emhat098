'use client';

import { ElementType, FC, Fragment, PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  as?: ElementType;
  asChild?: boolean;
}

const Container: FC<ContainerProps> = ({ as = 'div', asChild, children }) => {
  const Component = asChild ? Fragment : as;
  return <Component className={'max-w-4xl mx-auto my-4'}>{children}</Component>;
};

export default Container;
