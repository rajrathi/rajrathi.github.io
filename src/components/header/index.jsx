import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'


import profileImg from '../../images/profile.jpeg';
library.add(fab, fas)

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  mediaWrapper: 'inline-flex pt-6 space-x-4 md:flex-wrap',
  iconWrapper: 'flex max-w-10 max-h-10',
  icon: 'object-scale-down h-8 w-8 hover:scale-110 hover:text-[#40D89B]',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const mail = get(metadata, 'mail', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={profileImg} alt={metadata.name} />
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <div className={classes.mediaWrapper}>
          <div class={classes.iconWrapper}>
            {github && (
              <a href={github}>
                <FontAwesomeIcon icon="fa-brands fa-github" className={classes.icon}/>
              </a>
            )}
          </div>
          <div class={classes.iconWrapper}>
            {linkedin && (
              <a href={linkedin}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className={classes.icon}/>
              </a>
            )}
          </div>
          <div class={classes.iconWrapper}>
            {mail && (
              <a href={`mailto: ${mail}`}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className={classes.icon}/>
              </a>
            )}
          </div>
          <div class={classes.iconWrapper}>
            {twitter && (
              <a href={`https://twitter.com/${twitter}`}>
                <FontAwesomeIcon icon="fa-brands fa-twitter" className={classes.icon}/>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
