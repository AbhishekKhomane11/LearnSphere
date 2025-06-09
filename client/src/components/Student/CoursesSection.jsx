import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className="py-16 px-8 md:px-40 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl mx-auto">
        Discover our top-rated courses across various categories. From coding and design to <br/>business and wellness, our courses are crafted to deliver results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-0 md:my-16">
  {allCourses.slice(0, 4).map((course, index) => (
    <CourseCard key={index} course={course} />
  ))}
</div>


      <div className="mt-8">
        <Link
          to="/Courseslist"
          onClick={() => scrollTo(0, 0)}
          className="inline-block text-gray-700 border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Show all courses
        </Link>
      </div>
    </div>
  )
}

export default CoursesSection
