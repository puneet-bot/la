// Layout.js
import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
    console.log(children);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
