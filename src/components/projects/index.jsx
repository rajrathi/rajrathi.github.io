import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const Projects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="All Projects">
      {projects.map((project) => (
        <SummaryItem
        key={project.name}
        name={project.name}
        description={project.description}
        link={project.link}
        technology = {project.technology}
        />
      ))}
    </Section>
  );
};

export default Projects;
