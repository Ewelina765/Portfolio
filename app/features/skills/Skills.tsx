import React from 'react';

import Technologies from '@/app/components/Technologies';
import '../../../styles/skills.scss';

const Skills = () => {
  const experienceData = [
    {
      startDate: '08.2023',
      endDate: null,
      title: 'JUNIOR FRONTEND DEVELOPER',
      company: 'LAUNDRY SERVICE',
    },
    {
      startDate: '05.2024',
      endDate: null,
      title: 'MENTORSHIP COOPERATION',
      company: 'BE MY OWN BOSS',
    },
    {
      startDate: '03.2023',
      endDate: '08.2023',
      title: 'FREELANCE FRONTEND DEVELOPER',
      company: 'BE MY OWN BOSS',
    },
    {
      startDate: '01.2023',
      endDate: '01.2024',
      title: 'INTERNSHIP',
      company: 'DEVSTOCK',
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <p>
        Driven by my passion for{' '}
        <span className="p-green">creativity and innovation</span>, I chose a
        career that beautifully merges the realms of art and technology.
        Alongside my deep expertise in coding and development, I also explore{' '}
        <span className="p-green">no-code technologies</span>, driven by a
        curiosity to understand diverse approaches to technology. This blend of
        traditional and modern methods enriches my ability to craft innovative
        solutions and stay at the forefront of technological advancements.
      </p>
      <Technologies />
      <h2 className="experience">Experience</h2>
      <div className="experience__container">
        {experienceData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="experience__item">
              <p>
                {item.startDate} -{' '}
                {item.endDate ? (
                  <span>{item.endDate}</span>
                ) : (
                  <span className="p-green">Present</span>
                )}
              </p>
              <p>{item.title}</p>
              <p>{item.company}</p>
            </div>
            {index < experienceData.length - 1 && (
              <div className="divider-skills"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
