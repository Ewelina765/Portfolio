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
} from 'react-icons/si';
import { TbBrandNextjs, TbChartBubble, TbApi } from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';

import '../../styles/skills.scss';

const Technologies = () => {
  const techList = [
    { name: 'React', icon: <FaReact size={50} /> },
    {
      name: 'JavaScript',
      icon: <FaJsSquare size={50} className="js" />,
    },
    { name: 'CSS', icon: <FaCss3Alt size={50} /> },
    { name: 'HTML', icon: <FaHtml5 size={50} /> },
    { name: 'GIT', icon: <FaGitAlt size={50} /> },
    { name: 'Styled Components', icon: <SiStyledcomponents size={50} /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={50} /> },
    { name: 'NextJS', icon: <TbBrandNextjs size={50} /> },
    { name: 'Typescript', icon: <SiTypescript size={50} /> },
    { name: 'Figma', icon: <FaFigma size={50} /> },
    { name: 'Scrum', icon: <DiScrum size={50} /> },
    { name: 'Bubble.io', icon: <TbChartBubble size={50} /> },
    { name: 'Node.js ', icon: <FaNodeJs size={50} /> },
    { name: 'Rest API', icon: <TbApi size={50} /> },
    { name: 'Sass', icon: <FaSass size={50} /> },
  ];

  return (
    <ul className="technologies-container">
      {techList.map(({ name, icon }) => (
        <li key={name}>
          {icon}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Technologies;
