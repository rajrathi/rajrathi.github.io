import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  title: 'text-4xl text-black font-bold font-Montserrat',
  date: 'mt-4 mb-4 text-gray-500 font-Montserrat',
};

const BlogPost = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <div class="flex h-screen">
        <div class="ml-auto mr-auto max-w-2xl">
          <SEO title={post.frontmatter.title} />
          <h1 className={classes.title}>{post.frontmatter.title}</h1>
          <p className={classes.date}>
            Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
          </p>
          <div class="border-b-8 border-sky-600"></div>
          <section itemProp="articleBody" className="blog-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        medium
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
