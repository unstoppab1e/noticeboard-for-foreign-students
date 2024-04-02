'use client';

import React, { useState, useEffect } from 'react';
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
    <button className=' right-0 p-3 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 cursor-pointer'>
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
