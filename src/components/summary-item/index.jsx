import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  code: 'flex flex-row space-x-2 text-blue-600 font-mono text-md text-sm'
};

const SummaryItem = ({ name, description, link = false, internal = false, technology = ''}) => {
  let linkContent;
  let techstack = technology.toString().split(' ');
  const techs = techstack.map(tech => <div class="basis-1/4 md:basis-1/3" key={tech}>{tech}</div>) 
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
      <p><span><div className={classes.code}>{techs}</div></span></p>
    </div>
  );
};

export default SummaryItem;
