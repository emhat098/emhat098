'use client';

import cn from '@/util/tailwind-helper';
import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      type={props?.type ?? 'submit'}
      className={cn(
        'transition-all duration-500 rounded-xl bg-white dark:bg-dark px-2 py-1 h-full inline-flex justify-center items-center',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
