// components/Layout.tsx

import Navbar from './navbar';
import React from 'react';
import 'styles/main.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black overflow-hidden w-screen h-screen">
      <div className="w-full h-full flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
