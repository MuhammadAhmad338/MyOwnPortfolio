'use client'
import { useEffect } from 'react';
import { RootState } from '../Store/store';
import { setDarkMode } from '../Slices/themeSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  // On mount, check localStorage for theme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        dispatch(setDarkMode(true));
      } else if (savedTheme === 'light') {
        dispatch(setDarkMode(false));
      }
    }
  }, []);

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