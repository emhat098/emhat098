'use client';

import useClipboard from '@/hooks/use-clipboard';
import cn from '@/util/tailwind-helper';
import { FC, PropsWithChildren, useRef } from 'react';
import { toast } from 'sonner';

const Code: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const [copied, copyToClipboard] = useClipboard();

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
        className={cn(
          'font-normal text-green-700 bg-green-200 border border-green-700 px-[0.1rem] rounded hover:cursor-pointer text-xs lg:text-sm *:break-works *:whitespace-break-spaces',
          copied && 'bg-green-700 text-green-200 border-white',
        )}
        title={'Click to copy to clipboard!'}
      >
        {children}
      </code>
    );
  }
  return children;
};

export default Code;
