import { FC, HTMLAttributes } from 'react';
import Heading from '.';
import cn from '@/util/tailwind-helper';

const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <Heading
      as={'h2'}
      {...props}
      className={cn('text-xl', props.className)}
    >
      {children}
    </Heading>
  );
};

export default H2;
