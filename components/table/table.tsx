import { FC, HTMLAttributes } from 'react';
import styles from './table.module.css';
import cn from '@/util/tailwind-helper';

const Table: FC<HTMLAttributes<HTMLTableElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className={'overflow-scroll'}>
      <table
        {...props}
        className={cn(styles.table, props.className)}
      >
        {children}
      </table>
    </div>
  );
};

export default Table;
