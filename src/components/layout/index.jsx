import React from 'react';
import NavBar from '../navbar';

const classes = {
  wrapper: 'ml-auto mr-auto relative max-w-screen-xl',
  outerWrapper: 'relative',
};

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={classes.outerWrapper}>
        <div className={classes.wrapper}>
          <div class="p-6 xs:p-24">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
