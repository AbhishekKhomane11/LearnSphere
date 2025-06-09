import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const { currency,calculateRating } = useContext(AppContext)

  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0,)}
      className='border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white'
    >
      <img
        className='w-full h-48 object-cover'
        src={course.courseThumbnail}
        alt=''
      />
      <div className='p-4 text-left space-y-2'>
        <h3 className='text-md font-medium text-gray-800'>{course.courseTitle}</h3>
        <p className='text-sm text-gray-500'>{course.educator.name}</p>

        <div className='flex items-center space-x-2 text-sm'>
          <p className='font-semibold text-yellow-600'>{calculateRating(course)}</p>
          <div className='flex space-x-0.5'>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='' className='w-4 h-4' />
            ))}
          </div>
          <p className='text-gray-500'>{course.courseRatings.length}</p>
        </div>

        <p className='text-base font-semibold text-black'>
          {currency}
          {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

export default CourseCard
