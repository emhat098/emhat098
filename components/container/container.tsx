'use client';

import cn from '@/util/tailwind-helper';
import { ElementType, FC, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

const Container: FC<ContainerProps> = ({ as = 'div', children, ...props }) => {
  const Component = as;
  return (
    <Component
      {...props}
      className={cn(
        'max-w-6xl mx-auto my-2 px-2 md:my-4 md:px-4',
        props.className,
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
