

// // Middleware (Protect Educator Routes)

//  export const protectEducator = async (req, res, next)=>{
//   try{
//     const userId = req.auth.userId
//     const response = await clerkClient.users.getUser(userId)

//     if(response.publicMetadata.role !== 'educator'){
//         return res.json({success:false, message: 'Unauthorized Access'})
//     }

//     next()
//   }catch(error){
//       res.json({success:false, message: error.message})
//   }
// }

import { clerkClient } from '@clerk/express'; // Make sure this is imported
import { getAuth } from '@clerk/express';

export const protectEducator = async (req, res, next) => {
  try {
    const { userId } = getAuth(req); // Correct way to get userId

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized: No userId found' });
    }

    const user = await clerkClient.users.getUser(userId);

    if (user?.publicMetadata?.role !== 'educator') {
      return res.status(403).json({ success: false, message: 'Forbidden: Not an educator' });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
