import { FC, HTMLAttributes } from 'react';
import Heading from '.';
import cn from '@/util/tailwind-helper';

const H5: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <Heading
      as={'h5'}
      {...props}
      className={cn('text-sm', props.className)}
    >
      {children}
    </Heading>
  );
};

export default H5;
