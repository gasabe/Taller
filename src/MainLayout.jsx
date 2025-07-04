import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar'

const MainLayout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet /> 
    </>
  );
};

export default MainLayout;
