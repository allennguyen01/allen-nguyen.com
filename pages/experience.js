import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import OntraccrLogo from '@/public/images/experience/ontraccr-logo.png';
import InvertedAILogo from '@/public/images/experience/invertedai-logo.png';
import VoronoiLogo from '@/public/images/experience/voronoi-logo.png';
import BCILogo from '@/public/images/experience/bci-logo.svg';
import ZenMakerLabLogo from '@/public/images/experience/zenmakerlab-logo.png';

import UBCLaunchpadLogo from '@/public/images/experience/ubclaunchpad-logo.png';
import UBCAppliedScienceLogo from '@/public/images/experience/ubcapsc-logo.png';
import UCalgaryCSSLogo from '@/public/images/experience/ucalgarycss-logo.png';
import VSALogo from '@/public/images/experience/vsa-logo.png';
import UBCWasteNautsLogo from '@/public/images/experience/ubcwastenauts-logo.png';

const workExperience = [
  {
    position: 'Frontend Developer',
    company: 'Ontraccr Technologies',
    time: 'May - Aug. 2025',
    description:
      '🏗️ construction project management mobile and web application',
    logo: OntraccrLogo,
    link: 'https://www.ontraccr.com/',
  },
  {
    position: 'Frontend Developer',
    company: 'Inverted AI',
    time: 'Sep. 2024 - Apr. 2025',
    description: '🚗 autonomous vehicles web tools',
    logo: InvertedAILogo,
    link: 'https://www.inverted.ai/',
  },
  {
    position: 'Software Engineer',
    company: 'Voronoi Health Analytics',
    time: 'Sep. - Dec. 2023',
    description: '🩻 medical imaging processing and AI software',
    logo: VoronoiLogo,
    link: 'https://www.voronoihealthanalytics.com/',
  },
  {
    position: 'Software Engineer',
    company: 'BCI',
    time: 'Sep. - Dec. 2022',
    description: '📈 internal data collection full stack web application',
    logo: BCILogo,
    link: 'https://www.bci.ca/',
  },
  {
    position: 'Engineering Projects Instructor',
    company: 'Zen Maker Lab',
    time: 'Jan. - Aug. 2022',
    description: '🧑🏻‍🏫 STEM education in coding, science, and engineering',
    logo: ZenMakerLabLogo,
    link: 'https://www.zenmakerlab.com/',
  },
];

const extracurriculars = [
  {
    position: 'Sponsorship Coordinator',
    company: 'UBC Launchpad',
    time: 'May 2024 - Apr. 2025',
    description: '💵 sponsorship and partnership creation',
    logo: UBCLaunchpadLogo,
    link: 'https://www.ubclaunchpad.com/',
  },
  {
    position: 'Senior Orientation Leader',
    company: 'UBC Applied Science',
    time: 'May - Aug. 2024',
    description: '🫂 organizational team management for orientation day',
    logo: UBCAppliedScienceLogo,
    link: 'https://apsc.ubc.ca/',
  },
  {
    position: 'Software Developer',
    company: 'UBC Launchpad',
    time: 'Sep. 2023 - Apr. 2024',
    description: '👨🏻‍⚕️ seizure tracking mobile application',
    logo: UBCLaunchpadLogo,
    link: 'https://www.ubclaunchpad.com/',
  },
  {
    position: 'VP Development',
    company: "UCalgary Chinese Students' Society",
    time: 'Jul. 2023 - Apr. 2024',
    description: "💻 web development for club's landing website",
    logo: UCalgaryCSSLogo,
    link: 'https://ucalgarycss.com/',
  },
  {
    position: 'Socials Coordinator',
    company: 'UBC Vietnamese Students Association',
    time: 'Sep. 2023 - Apr. 2024',
    description: '🎊 internal team bonding events and engagement',
    logo: VSALogo,
    link: 'https://www.instagram.com/ubcvsa/',
  },
  {
    position: 'Renewable Energy Team Lead',
    company: 'UBC WasteNauts',
    time: 'May 2021 - Apr. 2022',
    description: '🔋 sustainable renewable energy harvesting system',
    logo: UBCWasteNautsLogo,
    link: 'https://wastenautsubc.netlify.app/',
  },
];

export default function Experience() {
  return (
    <main className='mx-8 mt-24 mb-2 flex flex-auto flex-col items-center gap-12 lg:mt-32'>
      <h1>experience 💻</h1>

      <div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
        <div className='flex flex-col gap-4'>
          <h2 className='ml-6'>work internships</h2>
          <ul
            id='work-experience'
            className='border-l-2 border-zinc-400 dark:border-zinc-600'
          >
            {workExperience.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
              />
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='ml-6'>extracurriculars</h2>
          <ul
            id='extracurriculars'
            className='border-l-2 border-zinc-400 dark:border-zinc-600'
          >
            {extracurriculars.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

function TimelineItem({ position, company, time, description, logo, link }) {
  return (
    <li className='relative pl-8 lg:mb-10'>
      <div
        className={twMerge(
          'absolute flex size-12 items-center justify-center rounded-full p-1.5 hover:cursor-pointer lg:size-18',
          'top-0 -left-[25px] lg:-left-[36px]',
          'bg-zinc-200 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-700',
          'transition-colors duration-200 ease-in-out',
        )}
      >
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src={logo}
            className='object-contain'
            alt={`${company} logo`}
          />
        </a>
      </div>
      <div className='mb-10 flex w-full max-w-sm flex-1 flex-col gap-2 rounded-lg bg-zinc-200 p-2 lg:mx-2 lg:p-4 dark:bg-zinc-800'>
        <h4 className='flex items-center'>{position}</h4>
        <h5>{company}</h5>
        <time className='block text-sm leading-none font-normal lg:text-base'>
          {time}
        </time>
        <p className='text-sm leading-relaxed font-normal lg:text-base'>
          {description}
        </p>
      </div>
    </li>
  );
}
