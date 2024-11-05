'use client';

import cn from '@/util/tailwind-helper';
import { FC, HTMLAttributes, ReactNode } from 'react';
import Input from './input';
import Button from '../button/button';

interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  action: ReactNode | string;
}

const InputGroup: FC<InputGroupProps> = ({ action, placeholder, ...props }) => {
  return (
    <div
      className={cn('flex justify-center items-stretch', props.className)}
      {...props}
    >
      <Input
        className={'rounded-r-none border-r-0'}
        placeholder={placeholder}
      />
      <Button
        className={
          'border-l-0 rounded-full rounded-l-none active:outline-none focus:outline-none'
        }
      >
        {action}
      </Button>
    </div>
  );
};

export default InputGroup;
