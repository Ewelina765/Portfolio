import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaSass,
} from 'react-icons/fa';
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiJira
} from 'react-icons/si';
import { TbBrandNextjs, TbChartBubble, TbApi } from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';


import '../../styles/skills.scss';

const Technologies = () => {
  const techList = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'GIT', icon: <FaGitAlt /> },
    { name: 'Styled Comp.', icon: <SiStyledcomponents /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'NextJS', icon: <TbBrandNextjs /> },
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Scrum', icon: <DiScrum /> },
    { name: 'Bubble.io', icon: <TbChartBubble /> },
    { name: 'Node.js ', icon: <FaNodeJs /> },
    { name: 'Rest API', icon: <TbApi /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'Jira', icon: <SiJira />
  },
  ];

  return (
    <ul className="technologies">
      {techList.map(({ name, icon }) => (
        <li key={name} className="technologies__element">
          <div className="technologies__icon">{icon}</div>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
