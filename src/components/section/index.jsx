import React from 'react';

const classes = {
  wrapper: 'ml-auto mr-auto max-w-3xl p-4',
  title: 'pb-2',
  heading:'font-semibold tracking-widest text-3xl text-violet-700 leading-normal uppercase',
  content: 'flex-none text-lg text-white font-light md:flex-1',
};

const Section = ({ title, children }) => {
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2 className={classes.heading}>{title}</h2>
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default Section;
