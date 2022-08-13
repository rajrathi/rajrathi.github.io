import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionEducation from '../components/section-education';
import SectionExperience from '../components/section-experience';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const skills = get(data, 'site.siteMetadata.skills', false);

  return (
    <Layout>
      <SEO />
      {about && <SectionAbout about={about} />}
      <div className='max-w-xs xs:max-w-3xl flex flex-wrap ml-auto mr-auto'>
        <div className='flex max-w-sm'>
          {education && education.length && (
            <SectionEducation education={education} />
          )}
        </div>
        <div className='flex max-w-sm'>
          {experience && experience.length && (
          <SectionExperience experience={experience} />
          )}
        </div>
      </div>
      {skills && skills.length && <SectionSkills skills={skills} />}
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
            title
            description
          }
        }
      }
    }
  }
`;
