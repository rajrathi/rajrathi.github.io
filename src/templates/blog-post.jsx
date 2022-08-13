import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../components/seo';
import NavBar from '../components/navbar';

const classes = {
  outerWrapper: 'flex h-screen',
  wrapper: 'ml-auto mr-auto max-w-2xl p-6',
  title: 'text-4xl text-black font-bold font-Montserrat',
  date: 'mt-4 mb-4 text-gray-800 font-Montserrat text-base',
};

const BlogPost = ({ data }) => {
  const post = data.mdx;

  return (
    <div>
      <SEO title={post.frontmatter.title} />
      <NavBar />
      <div className={classes.outerWrapper}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>{post.frontmatter.title}</h1>
          <p className={classes.date}>
            Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
          </p>
          <div class="border-b-8 border-sky-400 mb-8"></div>
          <section itemProp="articleBody" className="blog-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
        </div>
      </div>
    </div>
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
        mail
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
