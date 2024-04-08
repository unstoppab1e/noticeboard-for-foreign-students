import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className='w-full'>
      <div className='hidden lg:block border-b font-roboco dark:bg-gray-700 dark:border-b dark:border-gray-500'>
        <div className='w-screen justify-around items-center flex p-4'>
          <div>
            <Link
              href='/'
              className='text-lg font-bold text-gray-700 dark:text-white'
            >
              KOREA_UNIVERSITY
              <span className='text-blue-500 dark:'>.board</span>
            </Link>
          </div>
          <div>
            <ul className='flex items-center justify-center gap-10 '>
              <li className='relative group font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'>
                <Link href='/'>Home</Link>
              </li>
              <li className='relative group font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'>
                <Link href='/about'>About</Link>
              </li>
              <li className='relative group font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='text-blue-600 dark:text-[#ffa116]'>
            <Link
              href='/login'
              className=' px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300 font-semibold dark:bg-[#ffa1161f] dark:bg-opacity-10  animate-smooth flex items-center group'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className='px-2 py-'>
          <div className='flex justify-around items-center'>
            <Link href='/' className='font-bold dark:text-white'>
              KOREA_UNIVERSITY
              <span className='text-gray-700 dark:text-blue-500'>.board</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-500 dark:text-gray-400'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
