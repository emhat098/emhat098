import { useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark' | null;

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(null);

  useEffect(() => {
    // Apply the theme to the document's root class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Store the theme in localStorage
    localStorage.setItem('theme', theme ?? '');
  }, [theme]);

  useEffect(() => {
    if (window) {
      const currentTheme = window.localStorage.getItem('theme') as ThemeType;
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
