'use client';

import { useEffect, useState } from 'react';
import { CiLight, CiDark } from 'react-icons/ci';

type ThemeType = 'light' | 'dark';

const currentTheme: ThemeType =
  (localStorage.getItem('theme') as ThemeType) ?? 'light';

const ToggleTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(currentTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <button
      className={'p-2 border rounded-full shadow'}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <CiDark className={'w-4 h-4'} />
      ) : (
        <CiLight className={'w-4 h-4'} />
      )}
    </button>
  );
};

export default ToggleTheme;
