import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'


// import profileImg from '../../images/profile.jpeg';
library.add(fab, fas)

const classes = {
  wrapper: 'flex flex-col flex-wrap max-h-max text-white place-content-start justify-start',
  contentWrapper: 'ml-auto mr-auto place-items-center justify-evenly xs:max-w-2xl max-w-xs max-h-max mb-4 p-6',
  name: 'text-2xl xs:text-4xl mt-6 font-semibold font-Montserrat text-center',
  description: 'text-base xs:text-lg mt-2 font-medium tracking-wider font-Poppins text-justify',
  mediaWrapper: 'inline-flex mt-2 space-x-4 mr-auto ml-auto justify-center',
  iconWrapper: 'flex max-w-10 max-h-10',
  icon: 'object-scale-down h-6 w-6 hover:scale-120 hover:text-blue-100',
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
    <div class = "columns-1 w-96 pl-8">
      <div className={classes.wrapper}>
        <div className={classes.contentWrapper}>
          <div><h1 className='text-3xl md:text-2xl font-Montserrat text-center'> 👋 Hello! I'm</h1></div>
          <div><h2 className={classes.name}>{name}</h2></div>
          <div><h3 className={classes.description}>{description}</h3></div>
          <div><h3 class = "text-l font-serif text-center">Scroll 👇 to know more about me!</h3></div>
          <div class="border-b-2 border-gray-500/40 mt-2"></div>
          <div className='flex h-auto items-center mb-4'>
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
                    <FontAwesomeIcon icon="fa-brands fa-x-twitter" className={classes.icon}/>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
