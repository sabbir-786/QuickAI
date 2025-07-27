
// 3. Updated Layout.jsx
import React, { useState } from 'react';
import { Outlet, } from 'react-router-dom';
import { SignIn, useUser } from '@clerk/clerk-react';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const { user } = useUser();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    setSidebarOpen(false);
  };



  return user ? (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarOpen={setSidebarOpen}
        toggleCollapse={toggleCollapse}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
      
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
};

export default Layout;