'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import JavaScript from '../public/skills/languages/javascript.png';
import HTML from '../public/skills/languages/html5.png';
import CSS from '../public/skills/languages/css3.png';
import Python from '../public/skills/languages/python.png';
import Cpp from '../public/skills/languages/c++.png';
import C from '../public/skills/languages/c.png';

import React from '../public/skills/frameworks-libraries/react.png';
import Node from '../public/skills/frameworks-libraries/node.png';
import Express from '../public/skills/frameworks-libraries/express.png';
import Next from '../public/skills/frameworks-libraries/next.png';
import TailwindCSS from '../public/skills/frameworks-libraries/tailwind-css.png';
import Pandas from '../public/skills/frameworks-libraries/pandas.png';
import ScikitLearn from '../public/skills/frameworks-libraries/scikit-learn.png';
import Numpy from '../public/skills/frameworks-libraries/numpy.png';

import Git from '../public/skills/tools/git.png';
import GitHub from '../public/skills/tools/github.png';
import Bash from '../public/skills/tools/bash.png';
import VSCode from '../public/skills/tools/vscode.png';
import Figma from '../public/skills/tools/figma.png';
import Netlify from '../public/skills/tools/netlify.png';

export default function SkillIcons() {
  const languages = [
    { name: 'javascript', image: JavaScript },
    { name: 'html5', image: HTML },
    { name: 'css3', image: CSS },
    { name: 'python', image: Python },
    { name: 'c++', image: Cpp },
    { name: 'c', image: C },
  ];
  const frameworks = [
    { name: 'react', image: React },
    { name: 'node', image: Node },
    { name: 'express', image: Express },
    { name: 'next', image: Next },
    { name: 'tailwind-css', image: TailwindCSS },
    { name: 'pandas', image: Pandas },
    { name: 'scikit-learn', image: ScikitLearn },
    { name: 'numpy', image: Numpy },
  ];
  const tools = [
    { name: 'git', image: Git },
    { name: 'github', image: GitHub },
    { name: 'bash', image: Bash },
    { name: 'vscode', image: VSCode },
    { name: 'figma', image: Figma },
    { name: 'netlify', image: Netlify },
  ];

  return (
    <section className='flex flex-col gap-4'>
      <SkillType type='languages' skills={languages} />
      <SkillType type='frameworks-libraries' skills={frameworks} />
      <SkillType type='tools' skills={tools} />
    </section>
  );
}

function SkillType({ type, skills }) {
  const gridVariants = {
    'frameworks-libraries': 'grid-rows-2 grid-cols-4',
    languages: 'grid-rows-2 grid-cols-3',
    tools: 'grid-rows-2 grid-cols-3',
  };

  return (
    <div key={type} className='flex flex-col items-center gap-2'>
      <p className='text-base'>{type}</p>
      <div className={`grid ${gridVariants[type]} gap-4 text-center`}>
        {skills.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.2 }}
            className='flex flex-col justify-start w-14'
          >
            <Image
              src={s.image}
              alt={`${s.name} logo`}
              className='bg-white p-1 object-contain rounded-xl w-14 h-14'
            />
            <p className='text-xs'>{s.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
