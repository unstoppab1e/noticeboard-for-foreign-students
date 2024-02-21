import DarkMode from '@/elements/DarkMode/DarkMode';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-blue-500 text-white'>
      <h1 className='text-2xl'>My Website</h1>
      <DarkMode />
    </header>
  );
};

export default Header;
