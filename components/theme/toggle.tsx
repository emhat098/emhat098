'use client';

import { useTheme } from 'next-themes';
import { CiLight, CiDark } from 'react-icons/ci';

const ToggleTheme = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className='p-2 rounded-full'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <CiDark className={'w-6 h-6'} />
      ) : (
        <CiLight className={'w-6 h-6'} />
      )}
    </button>
  );
};

export default ToggleTheme;
