import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import BlogSummaryItem from '../blog-summary-item';

const SectionBlog = ({ posts }) => {
  return (
    <Section title="Latest Posts">
      {posts.slice(0, 3).map((post) => (
        <BlogSummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          thumb={post.node.frontmatter.thumb.childImageSharp.gatsbyImageData}
          internal
        />
      ))}
      {posts.length >= 3 && (
        <Link className="text-gray-500 text-xs hover:text-black" to="/blog">
          View all articles &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionBlog;
