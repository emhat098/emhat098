'use client';

import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounce;
};

export default useDebounce;
