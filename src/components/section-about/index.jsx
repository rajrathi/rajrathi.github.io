import React from 'react';
import Section from '../section';

const SectionAbout = ({ about }) => {

  return (
    <Section title="About Me">
      <div className="mb-4 flex max-w-fit">
        <p className="text-justify mt-4 text-base">{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
