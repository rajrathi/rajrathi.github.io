import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-4">
        <p className="text-justify">{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
