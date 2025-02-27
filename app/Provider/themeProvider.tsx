'use client';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  
  useEffect(() => {
    // Apply theme attribute to html element
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return <>{children}</>;
}