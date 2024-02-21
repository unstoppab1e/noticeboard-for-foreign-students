import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <h1 className='text-4xl'>Latest News</h1>
        <div className='mt-10 grid grid-cols-3 gap-4'>
          {/* Replace this section with your news articles */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl mb-2'>News Article 1</h2>
            <p className='text-gray-700'>
              This is a summary of news article 1.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg dark:bg-black'>
            <h2 className='text-2xl mb-2'>News Article 2</h2>
            <p className='text-gray-700'>
              This is a summary of news article 2.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl mb-2'>News Article 3</h2>
            <p className='text-gray-700'>
              This is a summary of news article 3.
            </p>
          </div>
        </div>
      </main>
      <footer className='w-full h-24 border-t border-gray-200 flex justify-center items-center'>
        <p className='text-gray-500'>© 2022 My News Website</p>
      </footer>
    </div>
  );
};

export default Home;
