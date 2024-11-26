'use client';

import useClipboard from '@/hooks/use-clipboard';
import cn from '@/util/tailwind-helper';
import { FC, HTMLAttributes, useRef } from 'react';
import { toast } from 'sonner';
import { PiClipboardThin, PiClipboardFill } from 'react-icons/pi';

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
          <PiClipboardFill className={'text-green-300 w-4 h-4 md:w-6 md:h-6'} />
        ) : (
          <PiClipboardThin className={'text-white w-4 h-4 md:w-6 md:h-6'} />
        )}
      </button>
      {children}
    </pre>
  );
};

export default Pre;
