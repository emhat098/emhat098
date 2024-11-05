'use client';

import cn from '@/util/tailwind-helper';
import { FC, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      type={props?.type ?? 'text'}
      className={cn(
        'transition-all duration-500 rounded-full border border-black hover:shadow-lg px-4 py-2 focus:outline-none dark:bg-black dark:text-white dark:border',
        props.className,
      )}
    />
  );
};

export default Input;
