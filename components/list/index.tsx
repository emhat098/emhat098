import cn from '@/util/tailwind-helper';
import { FC, HTMLAttributes } from 'react';
import styles from './list.module.css';

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  as: 'ul' | 'ol';
}

const List: FC<ListProps> = ({ as = 'ul', children, ...props }) => {
  const Component = as;
  return (
    <Component
      {...props}
      className={cn(
        'ml-4',
        'list-content',
        as === 'ul' ? 'list-disc' : 'list-decimal',
        styles.list,
      )}
    >
      {children}
    </Component>
  );
};

export default List;
