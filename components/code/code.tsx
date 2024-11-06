'use client';

import useClipboard from '@/hooks/use-clipboard';
import { FC, PropsWithChildren, useRef } from 'react';
import { toast } from 'sonner';

const Code: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const [, copyToClipboard] = useClipboard();

  const onCopy = async () => {
    if (ref.current?.textContent) {
      copyToClipboard(ref.current.textContent);
      toast.success('Copied to clipboard!');
    }
  };

  if (typeof children === 'string') {
    return (
      <code
        ref={ref}
        onClick={onCopy}
        className={
          'font-semibold text-white bg-red-500 px-1 rounded hover:cursor-pointer'
        }
        title={'Click to copy to clipboard!'}
      >
        {children}
      </code>
    );
  }
  return children;
};

export default Code;
