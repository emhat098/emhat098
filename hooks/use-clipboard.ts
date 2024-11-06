'use client';

import { useEffect, useState } from 'react';

const copyToClipboard = (value: string | undefined) => {
  if (!value || typeof value === 'undefined') {
    return Promise.resolve(false);
  }

  return navigator.clipboard
    .writeText(value)
    .then(() => true)
    .catch(() => false);
};

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyText = (text: string | undefined) =>
    copyToClipboard(text).then(setCopied);

  useEffect(() => {
    if (copied) {
      const timerID = setTimeout(() => setCopied(false), 3000);

      return () => clearTimeout(timerID);
    }
  }, [copied]);

  return [copied, copyText] as const;
};

export default useClipboard;
