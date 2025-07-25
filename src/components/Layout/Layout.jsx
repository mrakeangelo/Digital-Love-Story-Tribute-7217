import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-charcoal-900 transition-colors">
      <Header />
      <Sidebar />
      <main className="pt-16 md:ml-64 pb-20 md:pb-6">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;