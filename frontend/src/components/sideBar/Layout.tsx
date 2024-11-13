// import React from 'react';
// import Sidebar from './SideBar';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-grow p-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React from 'react';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom';

const Layout = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <div className="flex">
      <Sidebar handleLogout={handleLogout} />
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
