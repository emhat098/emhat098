import { FC, HTMLAttributes } from 'react';
import Heading from '.';
import cn from '@/util/tailwind-helper';

const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <Heading
      as={'h1'}
      {...props}
      className={cn('text-2xl', props.className)}
    >
      {children}
    </Heading>
  );
};

export default H1;
