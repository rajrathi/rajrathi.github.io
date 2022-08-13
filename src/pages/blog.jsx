import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import NavBar from '../components/navbar';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const classes = {
  outerWrapper: 'flex h-screen',
  wrapper: 'ml-auto mr-auto max-w-3xl p-6',
};

const Index = ({ data }) => {
  const posts = data.allMdx.edges;
  const noBlog = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <div>
      <SEO title="Blog" />
      <NavBar />
      <div className={classes.outerWrapper}>
        <div className={classes.wrapper}>{!noBlog && <BlogPosts posts={posts} />}</div>
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
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
