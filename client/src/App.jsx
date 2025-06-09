// import React from 'react'
// import { Route,Routes } from 'react-router-dom'
// import Home from './Pages/Student/Home'
// import CoursesList from './Pages/Student/CoursesList'
// import CourseDetails from './Pages/Student/CourseDetails'
// import MyEnrollments from './Pages/Student/MyEnrollments'
// import Loading from './components/Student/Loading'
// import Educator from './Pages/Educator/Educator'
// import Dashboard from './Pages/Educator/Dashboard'
// import StudentsEnrolled from './Pages/Educator/StudentsEnrolled'
// import AddCourse from './Pages/Educator/AddCourse'
// import MyCourses from './Pages/Educator/MyCourses'
// import Navbar from './components/Student/Navbar'
// import Player from './Pages/Student/Player'
// const App = () => {
//   return (
//     <div className='text-default min-h-screen bg-white'>
//       <Navbar/>
//       <Routes>
        
//         <Route path='/' element={<Home/>}/>
//         <Route path='/CoursesList' element={<CoursesList/>}/>
//         <Route path='/course/:id' element={<CourseDetails/>}/>
//         {/* <Route path="/courseList/:input" element={<CoursesList />} /> */}
//         <Route path="/Courseslist/:input" element={<CoursesList />} />
//         {/* <Route path='/course/:name' element={<CourseDetails/>}/> */}
//         <Route path='/my-enrollments' element={<MyEnrollments/>}/>
//         <Route path='/player/:courseId' element={<Player/>}/>
//         <Route path='/loading/:path' element={<Loading/>}/>

//         //Educator Routes
//         <Route path="/educator" element={<Educator />}>
//   <Route index element={<Dashboard />} /> {/* Default child route */}
//   <Route path="add-course" element={<AddCourse />} /> {/* Relative path */}
//   <Route path="my-courses" element={<MyCourses />} />
//   <Route path="student-enrolled" element={<StudentsEnrolled />} />
// </Route>

//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Student/Home'
import CoursesList from './Pages/Student/CoursesList'
import CourseDetails from './Pages/Student/CourseDetails'
import MyEnrollments from './Pages/Student/MyEnrollments'
import Loading from './components/Student/Loading'
import Educator from './Pages/Educator/Educator'
import Dashboard from './Pages/Educator/Dashboard'
import StudentsEnrolled from './Pages/Educator/StudentsEnrolled'
import AddCourse from './Pages/Educator/AddCourse'
import MyCourses from './Pages/Educator/MyCourses'
import Navbar from './components/Student/Navbar'
import Player from './Pages/Student/Player'
import 'quill/dist/quill.snow.css'
const App = () => {
  const location = useLocation();

  // Check if current path starts with /educator
  const isEducatorRoute = location.pathname.startsWith('/educator');

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CoursesList' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path="/Courseslist/:input" element={<CoursesList />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        {/* Educator Routes */}
        <Route path="/educator" element={<Educator />}>
          <Route index element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
