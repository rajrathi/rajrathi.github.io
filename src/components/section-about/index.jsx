import React from 'react';
import profileImg from '../../images/profile.jpeg'
import Section from '../section';

const classes = {
  wrapper: 'max-w-xs xs:max-w-3xl flex ml-auto mr-auto flex-row',
  imageWrapper: 'hidden xs:flex max-w-150 max-h-max justify-start place-items-center p-2 ',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
};

const SectionAbout = ({ about }) => {

  return (
    <Section title="About Me">
        <div className={classes.wrapper}>
          <div className={classes.imageWrapper}>
            <img className={classes.image} src={profileImg} alt='' />
          </div>
          <div className="xs:ml-6 mb-4 flex max-w-fit">
            <p className="text-justify mt-4 text-xl">{about}</p>
          </div>
        </div>
    </Section>
  );
};

export default SectionAbout;
