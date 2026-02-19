import React from 'react';
import {
  FaHtml5, FaCss3Alt,FaReact, FaPython, FaNodeJs, FaJava, FaEthereum, FaGem, FaNpm,
  FaBootstrap, FaSass, FaAws, FaGithub
} from 'react-icons/fa';
import {
  DiDjango, DiRuby, DiPostgresql, DiMysql, DiSqllite
} from 'react-icons/di';
import {
  SiJavascript, SiTypescript, SiJquery, SiSwiper, SiGooglefonts,SiFontawesome, SiNextdotjs, SiVite, SiTailwindcss, SiCplusplus, SiExpress, SiSpring, SiFastapi, SiFlask, SiMongodb, SiSolidity, SiRubysinatra, SiPypi, SiMui, SiOpenai, SiRedux, SiJsonwebtokens, SiWireshark, SiVercel, SiGithubactions, SiJest
} from 'react-icons/si';
import {
  TbBrandVscode
} from 'react-icons/tb';

export const getTechnologyIcon = (technology) => {
  const iconMap = {
    // Programming languages and fonts
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'Javascript': <SiJavascript />,
    'Typescript': <SiTypescript />,
    'Python': <FaPython />,
    'Java': <FaJava />,
    'C++': <SiCplusplus />,
    'Solidity': <SiSolidity />,
    'Ruby': <DiRuby />,
    'Sass': <FaSass />,
    'FontAwesome': <SiFontawesome />,
    'Google Fonts': <SiGooglefonts />,

    // Frameworks and libraries
    'React': <FaReact />,
    'Node': <FaNodeJs />,
    'Bootstrap': <FaBootstrap />,
    'MUI': <SiMui />,
    'Vite': <SiVite />,
    'Tailwind': <SiTailwindcss />,
    'Next': <SiNextdotjs />,
    'Express': <SiExpress />,
    'FastAPI': <SiFastapi />,
    'Tanastack':  (
      <>
        <img
          src="https://tanstack.com/images/logos/logo-black.svg"
          className="block dark:hidden w-3.5 h-3.5"
          alt="TanStack logo"
        />
        <img
          src="https://tanstack.com/images/logos/logo-white.svg"
          className="hidden dark:block w-3.5 h-3.5"
          alt="TanStack logo"
        />
      </>
    ),

    // Testing
    'Jest': <SiJest />,

    // Databases
    'MongoDB': <SiMongodb />,
    'SQLite': <DiSqllite />,
    'PostgresSQL': <DiPostgresql />,
    'MySQL': <DiMysql />,
    'Ethereum': <FaEthereum />,

    // Softwares and Platforms
    'Github': <FaGithub />,
    'VSCode': <TbBrandVscode />,
    'AWS': <FaAws />,
    'NPM': <FaNpm />,
    'PyPI': <SiPypi />,
    'OpenAI': <SiOpenai />,
    'Vercel': <SiVercel/>,

    // Security
    'OAuth': <img src="https://static-00.iconduck.com/assets.00/oauth-icon-512x511-baa2vilm.png"/>,
    'JWT': <SiJsonwebtokens/>,
    'Wireshrak': <SiWireshark/>,

    // CI/CD
    'Github Actions': <SiGithubactions/>,
}


  return (
    <span className="flex items-center">
      {iconMap[technology]}
      <span className="ml-1">{technology}</span>
    </span>
  );
};
