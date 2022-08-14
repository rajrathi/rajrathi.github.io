import React from 'react';

import Section from '../section';
import BlogSummaryItem from '../blog-summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <Section title="Blog">
      {posts.map((post) => (
        <BlogSummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default BlogPosts;
