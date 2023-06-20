import React from 'react';
import Image from 'next/image';

const skillsData = [
  { name: 'HTML', imageSrc: '/assets/skills/html.png' },
  { name: 'CSS', imageSrc: '/assets/skills/css.png' },
  { name: 'JavaScript', imageSrc: '/assets/skills/javascript.png' },
  { name: 'Node', imageSrc: '/assets/skills/node.png' },
  { name: 'React', imageSrc: '/assets/skills/react.png' },
  { name: 'Next.js', imageSrc: '/assets/skills/nextjs.png' },
  { name: 'GitHub', imageSrc: '/assets/skills/github.png' },
  { name: 'C', imageSrc: '/assets/skills/c.png' },
  { name: 'SQL', imageSrc: '/assets/skills/sql.png' },
  { name: 'Solidity-Smart contract', imageSrc:'/assets/skills/solidity.png'}
];

const SkillCard = ({ name, imageSrc }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={imageSrc} width='64' height='64' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid md:grid-col-2 lg:grid-cols-4 gap-8'>
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              imageSrc={skill.imageSrc}
            />
          ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;
