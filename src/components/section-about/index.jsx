import React from 'react';
import profileImg from '../../images/profile.jpeg'
import Section from '../section';

const classes = {
  imageWrapper: 'flex-1 w-full max-w-min h-48',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
};

const SectionAbout = ({ about }) => {

  return (
    <Section title="About Me">
      <div className="mb-4 flex">
        <p className="text-justify mt-4">{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
