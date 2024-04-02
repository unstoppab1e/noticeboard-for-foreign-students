'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`fixed bottom-5 right-5 bg-gray-900 text-gray-200 p-3 rounded-full dark:bg-gray-200 dark:text-gray-900 cursor-pointer`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <FiMoon size={15} onClick={() => setTheme('light')} />
      ) : (
        <FiSun size={15} onClick={() => setTheme('dark')} />
      )}
    </button>
  );
};
