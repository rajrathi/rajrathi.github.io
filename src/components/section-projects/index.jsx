import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import ProjectSummaryItem from '../project-summary-item';

const SectionProjects = ({ projects, thumbs }) => {
  if (!projects.length) return null;

  const projectResults = projects.map(project => {
    const imageItem = thumbs.find(thumb => thumb.node.name === project.id)
    project.thumb = imageItem
    ? imageItem.node.childImageSharp.gatsbyImageData : null

    return project
  })

  return (
    <Section title="Latest Projects">
      {projectResults.slice(0, 3).map((project) => (
        <ProjectSummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          technology={project.technology}
          thumb={project.thumb}
        />
      ))}
      {projects.length >= 3 && (
        <Link className="text-gray-500 text-xs hover:text-black" to="/projects">
          View all projects &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionProjects;
