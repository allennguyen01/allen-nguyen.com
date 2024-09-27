import Image from 'next/image';
import Link from 'next/link';

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
    company: 'Inverted AI • Co-op',
    time: 'September 2024 - Present',
    description: '🚗 autonomous vehicles UI and web',
    logo: InvertedAILogo,
    link: 'https://www.inverted.ai/',
  },
  {
    position: 'Software Engineer',
    company: 'Voronoi Health Analytics • Co-op',
    time: 'September 2023 - December 2023',
    description: '🩻 medical imaging processing and AI software',
    logo: VoronoiLogo,
    link: 'https://www.voronoihealthanalytics.com/',
  },
  {
    position: 'Software Engineer',
    company: 'BCI • Co-op',
    time: 'September 2022 - December 2022',
    description: '📈 internal data collection full stack web application',
    logo: BCILogo,
    link: 'https://www.bci.ca/',
  },
  {
    position: 'Engineering Projects Instructor',
    company: 'Zen Maker Lab • Co-op',
    time: 'January 2022 - August 2022',
    description: '🧑🏻‍🏫 STEM education in coding, science, and engineering',
    logo: ZenMakerLabLogo,
    link: 'https://www.zenmakerlab.com/',
  },
];

const extracurriculars = [
  {
    position: 'Sponsorship Coordinator',
    company: 'UBC Launchpad',
    time: 'May 2024 - Present',
    description: '💵 sponsorship and partnership creation',
    logo: UBCLaunchpadLogo,
    link: 'https://www.ubclaunchpad.com/',
  },
  {
    position: 'Senior Orientation Leader',
    company: 'UBC Applied Science',
    time: 'May 2024 - August 2024',
    description: '🫂 organizational team management for orientation day',
    logo: UBCAppliedScienceLogo,
    link: 'https://apsc.ubc.ca/',
  },
  {
    position: 'Software Developer',
    company: 'UBC Launchpad',
    time: 'September 2023 - April 2024',
    description: '👨🏻‍⚕️ seizure tracking mobile application',
    logo: UBCLaunchpadLogo,
    link: 'https://www.ubclaunchpad.com/',
  },
  {
    position: 'VP Development',
    company: "UCalgary Chinese Students' Society",
    time: 'July 2023 - Present',
    description: "💻 web development for club's landing website",
    logo: UCalgaryCSSLogo,
    link: 'https://ucalgarycss.com/',
  },
  {
    position: 'Socials Coordinator',
    company: 'UBC Vietnamese Students Association',
    time: 'September 2023 - April 2024',
    description: '🎊 internal team bonding events and engagement',
    logo: VSALogo,
    link: 'https://www.instagram.com/ubcvsa/',
  },
  {
    position: 'Renewable Energy Team Lead',
    company: 'UBC WasteNauts',
    time: 'May 2021 - April 2022',
    description: '🔋 sustainable renewable energy harvesting system',
    logo: UBCWasteNautsLogo,
    link: 'https://wastenautsubc.netlify.app/',
  },
];

export default function Experience() {
  return (
    <main className='mx-8 mb-2 mt-24 flex flex-auto flex-col items-center gap-12 lg:mt-32'>
      <h1>experience 💻</h1>

      <div className='flex flex-col gap-8 lg:flex-row'>
        <div className='flex flex-col gap-4'>
          <h2 className='ml-6'>work internships</h2>
          <ul
            id='work-experience'
            className='timeline timeline-vertical timeline-compact timeline-snap-icon'
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
            className='timeline timeline-vertical timeline-compact timeline-snap-icon'
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
    <li>
      <div className='timeline-middle'>
        <button className='btn btn-circle h-16 w-16 border-0 bg-white p-0'>
          <Link
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={logo}
              className='h-14 w-14 rounded'
            />
          </Link>
        </button>
      </div>
      <div className='timeline-start mx-2 mb-10 w-full max-w-sm flex-1 rounded-lg bg-base-200 p-4'>
        <h3 className='mb-1 flex items-center text-lg font-semibold text-base-content'>
          {position}
        </h3>
        <h4 className='mb-2'>{company}</h4>
        <time className='mb-2 block text-sm font-normal leading-none text-info'>
          {time}
        </time>
        <p className='text-base font-normal text-base-content'>{description}</p>
      </div>
      <hr />
    </li>
  );
}
