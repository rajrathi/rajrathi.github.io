import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const classes = {
  wrapper: 'flex flex-wrap xs:flex-row mb-6',
  name: 'font-semibold text-base text-purple-700 pb-1',
  description: 'text-sm text-gray-700 font-light space-y-2 text-justify mb-2',
  code: 'flex flex-wrap space-x-4 text-blue-600 font-mono text-sm space-y-px',
};


const ProjectSummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  technology = '',
  thumb
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
      <div className='max-w-xs mb-4'>
          <GatsbyImage image={thumb} className='w-fit h-auto xs:h-32 xs:w-48 p-2' objectFit='scale-down' objectPosition='50% 50%' />
      </div>
      <div className='ml-4 mb-4 flex max-w-xs xs:max-w-md flex-col'>
        <h3
          className={`${classes.name} ${
            link ? 'hover:underline hover:text-gray-800' : ''
          }`}
        >
          {link ? linkContent : name}
        </h3>
        <p className={classes.description}>{description}</p>
        <p>
          <span>
            <div className={classes.code}>{techs}</div>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProjectSummaryItem;
