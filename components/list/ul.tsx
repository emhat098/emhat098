import { FC, HTMLAttributes } from 'react';
import List from '.';

const UL: FC<HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => {
  return (
    <List
      as='ul'
      {...props}
    >
      {children}
    </List>
  );
};

export default UL;
