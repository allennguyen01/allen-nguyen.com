'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// languages
import JavaScript from '../public/skills/languages/javascript.png';
import TypeScript from '../public/skills/languages/typescript.png';
import Python from '../public/skills/languages/python.png';
import Java from '../public/skills/languages/java.png';
import Cpp from '../public/skills/languages/c++.png';
import C from '../public/skills/languages/c.png';
import HTML from '../public/skills/languages/html5.png';
import CSS from '../public/skills/languages/css3.png';

// databases
import Postgres from '../public/skills/databases/postgresql.svg';
import MongoDB from '../public/skills/databases/mongodb.png';
import MySQL from '../public/skills/databases/mysql.png';
// frameworks & libraries
import React from '../public/skills/frameworks-libraries/react.png';
import ReactNative from '../public/skills/frameworks-libraries/react-native.png';
import Node from '../public/skills/frameworks-libraries/node.png';
import Express from '../public/skills/frameworks-libraries/express.png';
import Next from '../public/skills/frameworks-libraries/next.png';
import Redux from '../public/skills/frameworks-libraries/redux.svg';
import TailwindCSS from '../public/skills/frameworks-libraries/tailwind-css.png';
import Vite from '../public/skills/frameworks-libraries/vite.png';
import Jest from '../public/skills/frameworks-libraries/jest.png';
import Expo from '../public/skills/frameworks-libraries/expo.png';

// tools
import Git from '../public/skills/tools/git.png';
import GitHub from '../public/skills/tools/github.png';
import Linux from '../public/skills/tools/linux.png';
import Bash from '../public/skills/tools/bash.png';
import VSCode from '../public/skills/tools/vscode.png';
import Figma from '../public/skills/tools/figma.png';
import Supabase from '../public/skills/frameworks-libraries/supabase.png';
import Vercel from '../public/skills/frameworks-libraries/vercel.svg';
import Netlify from '../public/skills/tools/netlify.png';

export default function SkillIcons() {
  const languagesAndDatabases = [
    { name: 'javascript', image: JavaScript },
    { name: 'typescript', image: TypeScript },
    { name: 'python', image: Python },
    { name: 'java', image: Java },
    { name: 'c++', image: Cpp },
    { name: 'c', image: C },
    { name: 'html5', image: HTML },
    { name: 'css3', image: CSS },
    { name: 'postgresql', image: Postgres },
    { name: 'mongodb', image: MongoDB },
    { name: 'mysql', image: MySQL },
  ];
  const frameworks = [
    { name: 'node', image: Node },
    { name: 'react', image: React },
    { name: 'react native', image: ReactNative },
    { name: 'express', image: Express },
    { name: 'next', image: Next },
    { name: 'redux', image: Redux },
    { name: 'vite', image: Vite },
    { name: 'jest', image: Jest },
    { name: 'expo', image: Expo },
    { name: 'tailwind-css', image: TailwindCSS },
  ];
  const tools = [
    { name: 'git', image: Git },
    { name: 'github', image: GitHub },
    { name: 'linux', image: Linux },
    { name: 'bash', image: Bash },
    { name: 'vscode', image: VSCode },
    { name: 'figma', image: Figma },
    { name: 'supabase', image: Supabase },
    { name: 'vercel', image: Vercel },
    { name: 'netlify', image: Netlify },
  ];

  return (
    <section className='flex flex-col gap-4 lg:gap-8'>
      <SkillType
        type='languages & databases'
        skills={languagesAndDatabases}
      />
      <SkillType
        type='frameworks & libraries'
        skills={frameworks}
      />
      <SkillType
        type='tools'
        skills={tools}
      />
    </section>
  );
}

function SkillType({ type, skills }) {
  const gridVariants = {
    'languages & databases': 'grid-cols-3 lg:grid-cols-6',
    'frameworks & libraries': 'grid-cols-3 lg:grid-cols-6',
    tools: 'grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div
      key={type}
      className='flex flex-col items-center gap-2'
    >
      <p className='text-lg'>{type}</p>
      <div className={`grid ${gridVariants[type]} gap-4 text-center lg:gap-6`}>
        {skills.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.2 }}
            className='flex min-w-[80px] flex-col items-center justify-center'
          >
            <Image
              src={s.image}
              alt={`${s.name} logo`}
              className='size-14 rounded-xl bg-zinc-200 object-contain p-1 lg:size-20 dark:bg-zinc-700'
            />
            <p className='text-xs lg:text-sm'>{s.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
