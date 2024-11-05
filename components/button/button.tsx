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
        'transition-all duration-500 border border-black rounded-xl bg-white p-3 focus:outline-none dark:border h-ful inline-flex justify-center items-center',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
