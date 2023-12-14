import React from 'react';

import NavBar from '../navbar-footer/NavBar';

const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      <section>{children}</section>
    </main>
  );
};

export default Layout;