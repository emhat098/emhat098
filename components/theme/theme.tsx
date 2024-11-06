'use client';

import useTheme, { ThemeType } from '@/hooks/use-theme';
import { createContext, FC, PropsWithChildren } from 'react';

const ThemeContext = createContext<ThemeType>(null);

const Theme: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default Theme;
