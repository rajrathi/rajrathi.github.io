import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const classes = {
  wrapper: 'flex flex-wrap xs:flex-row mb-6',
  name: 'font-semibold text-base text-purple-700 pb-1',
  description: 'text-sm text-gray-700 font-light space-y-1 text-justify',
};

const BlogSummaryItem = ({
  name,
  description,
  link = false,
  internal = false,
  thumb,
}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }
  return (
    <div className={classes.wrapper}>
      <div className='mb-4 max-w-xs'>
        <GatsbyImage image={thumb} className=' w-fit h-fit xs:h-32 xs:w-48 p-2' objectFit='scale-down' objectPosition='50% 50%'/>
      </div>
      <div className='mb-4 ml-4 flex max-w-xs xs:max-w-lg flex-col'>
        <h3
          className={`${classes.name} ${
            link ? 'hover:underline hover:text-black' : ''
          }`}
        >
          {link ? linkContent : name}
        </h3>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default BlogSummaryItem;
