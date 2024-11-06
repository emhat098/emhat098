import { FC, HTMLAttributes } from 'react';
import cn from '@/util/tailwind-helper';

const P: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn('text-sm', props.className)}
    >
      {children}
    </p>
  );
};

export default P;
