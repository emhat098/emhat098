import { FC, HTMLAttributes } from 'react';
import Heading from '.';
import cn from '@/util/tailwind-helper';

const H4: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <Heading
      as={'h4'}
      {...props}
      className={cn('text-base', props.className)}
    >
      {children}
    </Heading>
  );
};

export default H4;
