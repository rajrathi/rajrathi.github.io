import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import NavBar from '../navbar';

import profileImg from '../../images/profile.jpeg';
import twitterIcon from '../../images/twitter.png';
import linkedinIcon from '../../images/linkedin.png';
import mediumIcon from '../../images/medium.png';
import githubIcon from '../../images/github.png';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  mediaWrapper: 'inline-flex pt-6 space-x-4 md:flex-wrap',
  iconWrapper: 'flex max-w-10 max-h-10',
  icon: 'object-scale-down h-10 w-10 transform transition-all duration-150 hover:scale:110'
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const medium = get(metadata, 'medium', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <div className = {classes.mediaWrapper}>
          <div class = {classes.iconWrapper}>
            {github &&(
              <a href={github}>
                <img class={classes.icon} src = {githubIcon} alt = "GitHub" />
              </a>
            )}
          </div>
          <div class = {classes.iconWrapper}>
            {linkedin &&(
              <a href={linkedin}>
                <img class={classes.icon} src = {linkedinIcon} alt = "LinkedIn" />
              </a>
            )}
          </div>
          <div class = {classes.iconWrapper}>
            {medium &&(
              <a href={medium}>
                <img class={classes.icon} src = {mediumIcon} alt = "Medium" />
              </a>
            )}
          </div>
          <div class = {classes.iconWrapper}>
            {twitter &&(
              <a
                 href={`https://twitter.com/${twitter}`}
                >
                  <img class={classes.icon} src = {twitterIcon} alt = "Twitter"/>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
