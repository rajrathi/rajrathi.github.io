import React from 'react';

import Section from '../section';
import ProjectSummaryItem from '../project-summary-item';

const Projects = ({ projects, thumbs }) => {
  if (!projects.length) return null;

  const projectResults = projects.map(project => {
    const imageItem = thumbs.find(thumb => thumb.node.name === project.id)
    project.thumb = imageItem
    ? imageItem.node.childImageSharp.gatsbyImageData : null

    return project
  })

  return (
    <Section title="All Projects">
      {projectResults.map((project) => (
        <ProjectSummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          technology={project.technology}
          thumb={project.thumb}
        />
      ))}
    </Section>
  );
};

export default Projects;
