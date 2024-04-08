import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-screen w-screen bg-gray-100 flex flex-col justify-center items-center dark:font-white'>
      <h1 className='text-5xl font-bold text-red-600'>404</h1>
      <h2 className='text-4xl mb-6'>Oops! Page not found.</h2>
      <p className='text-lg mb-6'>Could not find requested resource</p>
      <Link
        href='/'
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300'
      >
        Return Home
      </Link>
    </div>
  );
}
