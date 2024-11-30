'use client';

import { useTheme } from 'next-themes';
import { CiLight, CiDark } from 'react-icons/ci';
import Button from '@/components/button/button';

const ToggleTheme = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      className={'bg-transparent'}
      onClick={toggleTheme}
      aria-label={'Theme toggle button'}
    >
      {theme === 'dark' ? (
        <CiDark className={'w-4 h-4 md:w-6 md:h-6'} />
      ) : (
        <CiLight className={'w-4 h-4 md:w-6 md:h-6'} />
      )}
    </Button>
  );
};

export default ToggleTheme;
