import React from 'react';
import NavBar from '../navbar';
import Header from '../header';


import background from '../../images/bg.jpeg'




const classes = {
  wrapper: 'ml-auto mr-auto relative max-w-screen-xl',
  outerWrapper: 'relative',
};

const Layout = ({ children}) => {

  return (
    <div>
      <div className='min-h-screen max-h-screen bg-cover bg-center bg-no-repeat xs:bg-fixed' 
      style={{backgroundImage: `url(${background})`}}>
        <div>
          <NavBar />
        </div>
        <div className='container max-w-full max-h-screen'>
          <Header />
        </div>
      </div>
      <div className={classes.outerWrapper}>
        <div className={classes.wrapper}>
          <div class="p-6 xs:p-24">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

