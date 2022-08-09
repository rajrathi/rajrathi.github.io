import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-lg text-black pb-1 text-xl',
  description: 'text-md text-gray-600 font-light space-y-1 mb-2 text-justify',
  code: 'flex flex-wrap space-x-4 text-blue-600 font-mono text-sm space-y-px',
};

const SummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  technology = '',
}) => {
  let linkContent;
  let techstack = technology.toString().split(' ');
  const techs =
    techstack.length !== 1 &&
    techstack.map((tech) => (
      <div
        class="box-border md:box-content p-1 rounded-md 
  bg-blue-100 m4 justify-center"
        key={tech}
      >
        {tech}
      </div>
    ));
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
      <p></p>
      <p>
        <span>
          <div className={classes.code}>{techs}</div>
        </span>
      </p>
    </div>
  );
};

export default SummaryItem;
