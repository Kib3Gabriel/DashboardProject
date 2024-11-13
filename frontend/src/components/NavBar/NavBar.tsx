// import React from 'react';
// import { FaBell, FaStar } from 'react-icons/fa';

// function NavBar() {
//   return (
//     <div className="flex items-center justify-between p-4 bg-red-200 shadow-md h-32">
//       {/* Left Side - Title */}
//       <div className="flex items-center">
//         <h2 className="text-xl font-semibold text-gray-700">Your Profile</h2>
//       </div>

//       {/* Right Side - Icons and Profile Picture */}
//       <div className="flex items-center space-x-4 px-4">
//         {/* Notification Icon */}
//         <FaBell className="text-gray-600 size-7 cursor-pointer hover:text-gray-800 " />
        
//         {/* Star Icon */}
//         <FaStar className="text-yellow-500 size-7 cursor-pointer hover:text-yellow-600" />
        
//         {/* Profile Picture */}
//         <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
//           <img
//             src="https://imgs.search.brave.com/kyJ2N2aS4rLgcWaQLq4nA6Y_cCRWR9aupwjsANGQDSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIyMzA3/MjIuanBn" // Placeholder for profile image
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;





import { FaBell, FaStar } from 'react-icons/fa';

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-blue-200 shadow-sm border-b border-gray-200 p-4 h-32">
      <div className="text-lg font-semibold text-gray-800">
        Dashboard
      </div>

      
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 cursor-pointer hover:text-gray-700 size-7" />

        <FaStar className="text-yellow-500 cursor-pointer hover:text-yellow-600 size-7" />

        <div className="w-20 h-20 size-9 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src="https://imgs.search.brave.com/kyJ2N2aS4rLgcWaQLq4nA6Y_cCRWR9aupwjsANGQDSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIyMzA3/MjIuanBn"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;


