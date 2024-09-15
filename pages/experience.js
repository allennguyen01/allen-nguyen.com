import { BsPersonWorkspace } from 'react-icons/bs';
import { PiPottedPlantBold } from 'react-icons/pi';
import { FaChalkboardTeacher } from 'react-icons/fa';

// import VoronoiLogo from '../../public/images/experience/voronoi-logo.png';
// import UBCLaunchpadLogo from '../../public/images/experience/ubclaunchpad-logo.png';
// import BCILogo from '../../public/images/experience/bci-logo.svg';
// import ZenMakerLabLogo from '../../public/images/experience/zenmakerlab-logo.png';
// import UBCWasteNautsLogo from '../../public/images/experience/ubcwastenauts-logo.jpg';

const workExperience = [
  {
    position: 'Frontend Developer',
    company: 'Inverted AI • Co-op',
    time: 'September 2024 - Present',
    description: '🚗 autonomous vehicles UI and web',
  },
  {
    position: 'Software Engineer',
    company: 'Voronoi Health Analytics • Co-op',
    time: 'September 2023 - December 2023',
    description: '🩻 medical imaging processing and AI software',
  },
  {
    position: 'Software Engineer',
    company: 'BCI • Co-op',
    time: 'September 2022 - December 2022',
    description: '📈 internal data collection full stack web application',
  },
  {
    position: 'Engineering Projects Instructor',
    company: 'Zen Maker Lab • Co-op',
    time: 'January 2022 - August 2022',
    description: '🧑🏻‍🏫 STEM education in coding, science, and engineering',
    icon: <FaChalkboardTeacher />,
  },
];

const extracurriculars = [
  {
    position: 'Sponsorship Coordinator',
    company: 'UBC Launchpad',
    time: 'May 2024 - Present',
    description: '💵 sponsorship and partnership creation',
  },
  {
    position: 'Senior Orientation Leader',
    company: 'UBC Applied Science',
    time: 'May 2024 - August 2024',
    description: '🫂 organizational team management for orientation day',
  },
  {
    position: 'Software Developer',
    company: 'UBC Launchpad',
    time: 'September 2023 - April 2024',
    description: '👨🏻‍⚕️ seizure tracking mobile application',
  },
  {
    position: 'VP Development',
    company: "UCalgary Chinese Students' Society",
    time: 'July 2023 - Present',
    description: "💻 web development for club's landing website",
  },
  {
    position: 'Socials Coordinator',
    company: 'UBC Vietnamese Students Association',
    time: 'September 2023 - April 2024',
    description: '🎊 internal team bonding events and engagement',
  },
  {
    position: 'Renewable Energy Team Lead',
    company: 'UBC WasteNauts',
    time: 'May 2021 - April 2022',
    description: '🔋 sustainable renewable energy harvesting system',
    icon: <PiPottedPlantBold />,
  },
];

export default function Experience() {
  return (
    <main className='mx-8 mb-2 mt-24 flex flex-auto flex-col items-center gap-12 lg:mt-32'>
      <h1>experience 💻</h1>

      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-4'>
          <h2 className='ml-6'>work internships</h2>
          <ul
            id='work-experience'
            className='timeline timeline-snap-icon timeline-compact timeline-vertical'
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
            className='timeline timeline-snap-icon timeline-compact timeline-vertical'
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

function TimelineItem({
  position,
  company,
  time,
  description = '',
  icon = <BsPersonWorkspace />,
}) {
  return (
    <li>
      <div className='timeline-middle'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='h-5 w-5'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='timeline-start mb-10'>
        <h3 className='mb-1 flex items-center text-lg font-semibold text-base-content'>
          {position}
        </h3>
        <h4 className='mb-2'>{company}</h4>
        <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {time}
        </time>
        <p className='mb-4 text-base font-normal text-slate-500'>
          {description}
        </p>
      </div>
      <hr />
    </li>
  );
}
