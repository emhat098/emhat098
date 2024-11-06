import { FC, HTMLAttributes } from 'react';
import Heading from '.';
import cn from '@/util/tailwind-helper';

const H6: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <Heading
      as={'h6'}
      {...props}
      className={cn('text-sm', props.className)}
    >
      {children}
    </Heading>
  );
};

export default H6;
