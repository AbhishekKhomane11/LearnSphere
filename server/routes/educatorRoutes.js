// import express from 'express'
// import {getEducatorCourses, updateRoleToEducator} from '../controllers/educatorController.js'
// import upload from '../configs/multer.js'
// import {protectEducator} from '../middlewares/authMiddleware.js'
// import { addCourse } from '../controllers/educatorController.js'
// const educatorRouter = express.Router()

// //Add Educator Role
// educatorRouter.get('/update-role',updateRoleToEducator)
// educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse)

// educatorRouter.get('/courses', protectEducator, getEducatorCourses)



// export default educatorRouter;

import express from 'express';
import upload from '../configs/multer.js';

import {
  getEducatorCourses,
  updateRoleToEducator,
  addCourse,
  educatorDashboardData,
  getEnrolledStudentsData
} from '../controllers/educatorController.js';

import { protectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router();

// Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator);

// Add a new course (requires image upload and educator access)
educatorRouter.post(
  '/add-course',
  upload.single('image'),
  protectEducator,
  addCourse
);

// Get courses of the educator
educatorRouter.get('/courses', protectEducator, getEducatorCourses);

educatorRouter.get('/dashboard',protectEducator, educatorDashboardData)

educatorRouter.get('/enrolled-students', protectEducator,getEnrolledStudentsData);

export default educatorRouter;
