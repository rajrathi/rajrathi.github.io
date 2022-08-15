import { graphql } from 'gatsby';
import React from 'react';
import get from 'lodash/get';

import Projects from '../components/projects';
import NavBar from '../components/navbar';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const classes = {
  outerWrapper: 'flex h-screen',
  wrapper: 'ml-auto mr-auto max-w-3xl p-6',
};

const Index = ({ data }) => {
  const projects = get(data, 'site.siteMetadata.projects', false);
  const noProjects = !projects || !projects.length;
  const imageFiles = data.allFile.edges;

  if (!projects || !projects.length) {
    return <NotFound />;
  }

  return (
    <div>
      <SEO title="Projects" />
      <NavBar />
      <div className={classes.outerWrapper}>
        <div className={classes.wrapper}>{!noProjects && <Projects projects={projects} thumbs={imageFiles}/>}</div>
      </div>
    </div>
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
