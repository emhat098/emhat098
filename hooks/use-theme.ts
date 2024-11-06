import { useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark' | null;

const useTheme = () => {
  // Initialize theme from localStorage or default to 'light'
  const getInitialTheme = (): ThemeType => {
    return (localStorage.getItem('theme') ?? 'light') as ThemeType;
  };

  const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
