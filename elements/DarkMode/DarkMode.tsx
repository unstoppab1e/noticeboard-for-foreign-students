'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';

interface IDarkMode {}

function DarkMode({}: IDarkMode) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('system');
    setMounted(true);
  }, [setTheme]);

  return (
    <button className='fixed bottom-5 right-5 bg-gray-900 text-gray-200 p-3 rounded-full dark:bg-gray-200 dark:text-gray-900 cursor-pointer'>
      {!mounted ? (
        <ClipLoader size={20} />
      ) : resolvedTheme === 'dark' ? (
        <FiSun size={15} onClick={() => setTheme('light')} />
      ) : (
        <FiMoon size={15} onClick={() => setTheme('dark')} />
      )}
    </button>
  );
}

export default DarkMode;
