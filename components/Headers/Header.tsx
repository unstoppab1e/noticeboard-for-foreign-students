import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='h-16 w-full flex items-center justify-between p-3 bg-transparent mx-auto border-b-2 px-6 sm:px-6'>
      <ul className='w-1/4 h-full flex items-center justify-start gap-5'>
        <li className='flex justify-start gap-5 leading-6'>
          <Link className='font-bold text-crimson' href='/'>
            KU<span className='text-gray-500'>.board</span>
          </Link>
          <Link className='font-medium text-gray-500' href='/login'>
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
