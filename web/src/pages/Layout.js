import React from 'react'
import MainNavbar from '../components/MainNavbar.js';

const Layout = ({children}) => {
  return (
    <>
    <div className="header-top-area">
        <div className="container">
        <MainNavbar/>
        </div>
    </div>
    
      <div className="main-panel">
          {children}
        </div>
    </>
  )
}

export default Layout;
