import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 bg-grid-pattern relative">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Viewport */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
