import React from 'react';
import NavBar from '../navbar';
import Header from '../header';


import background from '../../images/bg.jpeg'


const classes = {
  wrapper: 'ml-auto mr-auto relative max-w-screen-2xl',
  outerWrapper: 'relative bg-gray-800',
};

const Layout = ({ children}) => {

  return (
    <div>
      <div className='min-h-screen max-h-max bg-cover bg-center bg-no-repeat' 
      style={{backgroundImage: `url(${background})`}}>
        <div>
          <NavBar />
        </div>
        <div className='container max-w-full max-h-max'>
          <Header />
        </div>
      </div>
      <div className={classes.outerWrapper}>
        <div className={classes.wrapper}>
          <div class="p-6 xs:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

