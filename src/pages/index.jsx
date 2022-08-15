import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../images/profile.jpeg'

import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionEducation from '../components/section-education';
import SectionExperience from '../components/section-experience';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const classes = {
  wrapper: 'max-w-xs xs:max-w-4xl flex ml-auto mr-auto flex-row',
  imageWrapper: 'hidden xs:flex block max-w-150 h-40 justify-start',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105 mt-6',
};

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const posts = data.allMdx.edges;
  const education = get(data, 'site.siteMetadata.education', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const projects = get(data, 'site.siteMetadata.projects', false);

  return (
    <Layout>
      <SEO />
      <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
              <img className={classes.image} src={profileImg} alt='' />
        </div>
        <div className='mb-4 flex max-w-xs xs:max-w-2xl flex-col pl-4'>
          {about && <SectionAbout about={about} />}
          <div className='max-w-xs xs:max-w-2xl flex xs:flex-row flex-wrap'>
            <div className='flex max-w-xs pr-2'>
              {education && education.length && (
                <SectionEducation education={education} />
              )}
            </div>
            <div className='flex max-w-xs'>
            {experience && experience.length && (
            <SectionExperience experience={experience} />
            )}
            </div>
          </div>
          {skills && skills.length && <SectionSkills skills={skills} />}
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        mail
        projects {
          name
          description
          link
          technology
          id
        }
        experience {
          name
          description
          link
        }
        education {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
            thumb {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    allFile(filter: {dir: {regex: "/static/project-thumb/"}, }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }    
  }
`;
