import CourseCard from '@/components/CourseCard';

interface CourseType {
  name: string;
  description: string;
  reviews: string[];
  price: number; // Fix: Change the type of price to number
}

export default function Home() {
  const courses: CourseType[] = [
    {
      name: 'React.js',
      description: 'Learn React.js from scratch',
      reviews: ['1', '2', '3', '4', '5'],
      price: 100, // Fix: Change the price value to a number
    },
    {
      name: 'Next.js',
      description: 'Learn Next.js from scratch',
      reviews: ['1', '2', '3', '4', '5'],
      price: 100, // Fix: Change the price value to a number
    },
    {
      name: 'Tailwind CSS',
      description: 'Learn Tailwind CSS from scratch',
      reviews: ['1', '2', '3', '4', '5'],
      price: 100, // Fix: Change the price value to a number
    },
  ];
  return (
    <div className='h-full w-full flex flex-col items-center justify-around'>
      <h1 className=' text-h1-responsive font-bold text-center'>
        Next.js + Tailwind CSS + NextAuth.js
      </h1>
      <p className='text-h2-responsive text-center'>with a custom server</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
