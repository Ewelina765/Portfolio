import Technologies from '@/app/components/Technologies';
import '../../../styles/skills.scss';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <p className="p">
        Driven by my passion for{' '}
        <span className="p-red">creativity and innovation</span>, I chose a
        career that beautifully merges the realms of art and technology.
        Alongside my deep expertise in coding and development, I also explore{' '}
        <span className="p-red">no-code technologies</span>, driven by a
        curiosity to understand diverse approaches to technology. This blend of
        traditional and modern methods enriches my ability to craft innovative
        solutions and stay at the forefront of technological advancements.
      </p>
      <Technologies />
      <h2 className="experience">Experience</h2>
      <div className="experience-contener">
        <div className="experience-item">
          <p>
            05.2023 - <span className="p-red">Present</span>
          </p>
          <p>MENTORSHIP COOPERATION</p>
          <p>BE MY OWN BOSS</p>
        </div>
        <div className="divider-skills"></div>
        <div className="experience-item">
          <p>
            08.2023 - <span className="p-red">Present</span>
          </p>
          <p>JUNIOR FRONTEND DEVELOPER</p>
          <p>LAUNDRY SERVICE</p>
        </div>
        <div className="divider-skills"></div>
        <div className="experience-item">
          <p>03.2023 - 08.2023</p>
          <p className="experience-one">FREELANCE FRONTEND DEVELOPER</p>
          <p>BE MY OWN BOSS</p>
        </div>
        <div className="divider-skills"></div>
        <div className="experience-item">
          <p>01.2023 - 08.2023</p>
          <p>INTERSHIP</p>
          <p>DEVSTOCK</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
