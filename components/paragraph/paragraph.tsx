import { FC, HTMLAttributes } from 'react';
import cn from '@/util/tailwind-helper';

const P: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn('text-sm md:text-base py-1', props.className)}
    >
      {children}
    </p>
  );
};

export default P;
