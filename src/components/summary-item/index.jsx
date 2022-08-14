import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-sm text-white pb-1',
  description: 'text-sm text-white font-light space-y-1 text-justify',
  code: 'flex flex-wrap space-x-4 text-blue-600 font-mono text-sm space-y-px',
};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }
  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
