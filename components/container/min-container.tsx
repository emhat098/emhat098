'use client';

import cn from '@/util/tailwind-helper';
import { ElementType, FC, HTMLAttributes } from 'react';

interface MinContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

const MinContainer: FC<MinContainerProps> = ({
  as = 'div',
  children,
  ...props
}) => {
  const Component = as;
  return (
    <Component
      {...props}
      className={cn('w-[90%] sm:w-[60%] mx-auto', props.className)}
    >
      {children}
    </Component>
  );
};

export default MinContainer;
