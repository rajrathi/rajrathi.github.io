import React from 'react';
import NavBar from '../navbar';

import background from '../../images/bg.jpeg'

const classes = {
  wrapper: 'ml-auto mr-auto relative max-w-screen-xl',
  outerWrapper: 'relative',
};

const Layout = ({ children }) => {
  return (
    <div>
      <div className='bg-center xs:bg-cover' style={{backgroundImage: `url(${background})`}}>
        <div className='block max-w-screen-xl h-screen'>
          <NavBar />
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
