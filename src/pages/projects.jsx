import { graphql } from 'gatsby';
import React from 'react';
import get from 'lodash/get';

import Projects from '../components/projects';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const Index = ({ data }) => {
  const projects = get(data, 'site.siteMetadata.projects', false);
  const noProjects = !projects || !projects.length;

  if (!projects || !projects.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <Header metadata={data.site.siteMetadata} />
      {!noProjects && <Projects projects={projects} />}
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
        projects {
            name
            description
            link
            technology
          }
      }
    }
}
`;