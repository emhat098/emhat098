import { FC, HTMLAttributes } from 'react';
import Heading from '.';
import cn from '@/util/tailwind-helper';

const H3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <Heading
      as={'h3'}
      {...props}
      className={cn('text-lg', props.className)}
    >
      {children}
    </Heading>
  );
};

export default H3;
