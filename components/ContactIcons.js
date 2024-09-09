'use client';

import { motion } from 'framer-motion';
import {
  RiFilePaper2Fill,
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
} from 'react-icons/ri';

export default function ContactIcons() {
  const iconSize = 50;

  const contacts = [
    {
      name: 'linkedIn',
      icon: <RiLinkedinFill className='h-12 w-12 lg:h-16 lg:w-16' />,
      link: 'https://www.linkedin.com/in/allendnguyen/',
    },
    {
      name: 'github',
      icon: <RiGithubFill className='h-12 w-12 lg:h-16 lg:w-16' />,
      link: 'https://github.com/allennguyen01/',
    },
    {
      name: 'resume',
      icon: <RiFilePaper2Fill className='h-12 w-12 lg:h-16 lg:w-16' />,
      link: './Allen Nguyen Resume (Aug 26 2024).pdf',
    },
    {
      name: 'email',
      icon: <RiMailFill className='h-12 w-12 lg:h-16 lg:w-16' />,
      link: 'mailto:allennguyen415@gmail.com',
    },
  ];

  return (
    <div className='flex gap-4'>
      {contacts.map((contact) => (
        <div
          key={contact.name}
          className='flex flex-col items-center'
        >
          <motion.a
            href={contact.link}
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 1.5 }}
            target='_blank'
            rel='noopener noreferrer'
          >
            {contact.icon}
          </motion.a>
          <p className='text-sm'>{contact.name}</p>
        </div>
      ))}
    </div>
  );
}
