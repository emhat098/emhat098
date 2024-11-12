import cn from '@/util/tailwind-helper';
import { ElementType, FC, HTMLAttributes } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  as: ElementType;
}

const Heading: FC<HeadingProps> = ({ as, children, ...props }) => {
  const Component = as ?? 'h6';
  return (
    <Component
      {...props}
      className={cn('font-medium my-2', props.className)}
    >
      {children}
    </Component>
  );
};

export default Heading;
