import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'


// import profileImg from '../../images/profile.jpeg';
library.add(fab, fas)

const classes = {
  wrapper: 'flex h-screen text-black',
  contentWrapper: 'ml-auto mr-auto xs:max-w-lg max-w-xs mt-10',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  mediaWrapper: 'inline-flex mt-2 space-x-4 mr-auto ml-auto justify-center',
  iconWrapper: 'flex max-w-10 max-h-10',
  icon: 'object-scale-down h-6 w-6 hover:scale-120 hover:text-blue-200',
};

const Header = () => {
  const {site} = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata {
            name
            title
            description
            about
            author
            github
            linkedin
            mail
          }
        }
      }
    `
  );
  
  const name = site.siteMetadata.name;
  const description = site.siteMetadata.description;
  const twitter = site.siteMetadata.author;
  const github = site.siteMetadata.github;
  const linkedin = site.siteMetadata.linkedin;
  const mail = site.siteMetadata.mail;


  return (
    <div className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <p className='text-6xl font-bold font-Montserrat text-center'>Hello!</p>
        <p className=' text-2xl mt-2 font-semibold font-Montserrat text-center'>
          I'm {name}
        </p>
        <p className=' text-sm mt-2 font-semibold font-Poppins text-center'>
        {description}
        </p>
        <div class="border-b-2 border-gray-500/40"></div>
        <div className='flex h-auto items-center'>
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
    </div>
  );
};

export default Header;
