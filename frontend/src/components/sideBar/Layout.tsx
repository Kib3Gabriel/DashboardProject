import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

interface LayoutProps {
  handleLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ handleLogout }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar handleLogout={handleLogout} />
      <main className="flex-1 overflow-y-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

