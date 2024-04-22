interface CourseType {
  name: string;
  description: string;
  reviews: string[];
  price: number;
}

export default function CourseCard({ course }: { course: CourseType }) {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold'>{course.name}</h3>
      <p>{course.description}</p>
      <div className='flex justify-between items-center mt-4'>
        <span className='text-sm text-gray-600'>
          {course.reviews.length} reviews
        </span>
        <span className='font-bold'>{course.price}</span>
      </div>
    </div>
  );
}
