import { FC, HTMLAttributes } from 'react';
import List from '.';

const OL: FC<HTMLAttributes<HTMLOListElement>> = ({ children, ...props }) => {
  return (
    <List
      as='ol'
      {...props}
    >
      {children}
    </List>
  );
};

export default OL;
