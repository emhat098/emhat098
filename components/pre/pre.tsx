'use client';

import useClipboard from '@/hooks/use-clipboard';
import cn from '@/util/tailwind-helper';
import { FC, HTMLAttributes, useRef } from 'react';
import { toast } from 'sonner';
import { BsFillClipboard2Fill, BsFillClipboardCheckFill } from 'react-icons/bs';

const Pre: FC<HTMLAttributes<HTMLPreElement>> = ({ children, ...props }) => {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, copyToClipboard] = useClipboard();

  const onCopy = async () => {
    if (ref.current?.textContent) {
      copyToClipboard(ref.current.textContent);
      toast.success('Copied to clipboard!');
    }
  };

  return (
    <pre
      ref={ref}
      {...props}
      className={cn(
        props.className,
        'rounded p-6 shadow my-2 relative text-xs sm:text-sm md:text-base *:text-wrap *:break-words',
      )}
    >
      <button
        onClick={onCopy}
        className={'absolute right-2 top-2'}
      >
        {copied ? (
          <BsFillClipboardCheckFill className={'text-green-500 w-6 h-6'} />
        ) : (
          <BsFillClipboard2Fill className={'text-white w-6 h-6'} />
        )}
      </button>
      <button></button>
      {children}
    </pre>
  );
};

export default Pre;
