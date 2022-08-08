import React from 'react';
import NavBar from '../navbar';

const classes = {
  wrapper: 'ml-auto mr-auto relative max-w-screen-xl xs:p-24 md:p-24',
  outerWrapper: 'relative',
};

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className={classes.outerWrapper}>
        <div className={classes.wrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
