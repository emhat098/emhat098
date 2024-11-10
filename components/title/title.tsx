import cn from '@/util/tailwind-helper';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const Title: FC<PropsWithChildren & HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(
        props.className,
        'text-2xl sm:text-3xl md:text-4xl font-medium',
      )}
    >
      {children}
    </p>
  );
};

export default Title;
