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
  const iconStyle = 'size-12 lg:size-20';

  const contacts = [
    {
      name: 'linkedIn',
      icon: <RiLinkedinFill className={iconStyle} />,
      link: 'https://www.linkedin.com/in/allendnguyen/',
    },
    {
      name: 'github',
      icon: <RiGithubFill className={iconStyle} />,
      link: 'https://github.com/allennguyen01/',
    },
    {
      name: 'resume',
      icon: <RiFilePaper2Fill className={iconStyle} />,
      link: './resume.pdf',
    },
    {
      name: 'email',
      icon: <RiMailFill className={iconStyle} />,
      link: 'mailto:allennguyen415@gmail.com',
    },
  ];

  return (
    <div className='flex gap-8 lg:gap-12'>
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
