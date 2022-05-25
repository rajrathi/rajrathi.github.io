import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Latest Projects">
      {(projects.slice(0,5).map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          technology = {project.technology}
        />
      )))}
      {projects.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/projects">
          View all projects &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionProjects;
