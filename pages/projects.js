import Image from 'next/image';
import { RiGithubLine, RiComputerLine } from 'react-icons/ri';

import JukeboxdLogo from '../public/images/projects/jukeboxd/logo.svg';
import JukeboxdProfilePage from '../public/images/projects/jukeboxd/profile.png';

import PeakFitLogo from '../public/images/projects/peakfit/logo.png';
import PeakFitAIBuilder from '../public/images/projects/peakfit/ai-builder.png';
import PeakFitNutrition from '../public/images/projects/peakfit/nutrition.png';
import PeakFitYou from '../public/images/projects/peakfit/you.png';

import UCalgaryCSSDesktop from '../public/images/projects/ucalgary-css/css-desktop-homepage.jpg';
import UCalgaryCSSMobile from '../public/images/projects/ucalgary-css/css-phone-homepage.jpg';
import UCalgaryCSSlogo from '../public/images/projects/ucalgary-css/ucalgarycss-logo.png';

import cgClosetScreen from '../public/images/projects/closetgenie/closet-screen.png';
import cgOutfitsScreen from '../public/images/projects/closetgenie/outfits-screen.png';
import cgLaundryScreen from '../public/images/projects/closetgenie/laundry-screen.png';
import cgLogo from '../public/images/projects/closetgenie/closetgenie-logo.png';

import seekicksWebpage from '../public/images/projects/seekicks/webpage.jpg';
import seekicksLogo from '../public/images/projects/seekicks/seekicks-logo.png';

import slientOwlApp from '../public/images/projects/silent-owl/silent-owl.png';
import slientOwlLogo from '../public/images/projects/silent-owl/silent-owl-logo.png';

const techBadges = {
  'React.js':
    'https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB',
  JavaScript:
    'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000',
  HTML: 'https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white',
  CSS: 'https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff',
  TailwindCSS:
    'https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white',
  'Chakra UI':
    'https://img.shields.io/badge/Chakra%20UI-%234ED1C5.svg?logo=chakraui&logoColor=white',
  Netlify:
    'https://img.shields.io/badge/Netlify-%23000000.svg?logo=netlify&logoColor=#00C7B7',
  'React Native':
    'https://img.shields.io/badge/React_Native-%2320232a.svg?logo=react&logoColor=%2361DAFB',
  Figma: 'https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white',
  Expo: 'https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=fff',
  Python:
    'https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff',
  PyTorch:
    'https://img.shields.io/badge/PyTorch-ee4c2c?logo=pytorch&logoColor=white',
  'Google Colab':
    'https://img.shields.io/badge/Google_Colab-F9AB00?logo=google%20colab&logoColor=white',
  Pandas:
    'https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white',
  NumPy: 'https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white',
  'Node.js':
    'https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white',
  MongoDB:
    'https://img.shields.io/badge/MongoDB-%234ea94b?logo=mongodb&logoColor=white',
  'Express.js':
    'https://img.shields.io/badge/Express.js-%23404d59?logo=express&logoColor=%2361DAFB',
  Java: 'https://img.shields.io/badge/Java-%23ED8B00?logo=openjdk&logoColor=white',
  TypeScript:
    'https://img.shields.io/badge/TypeScript-%23007ACC?logo=typescript&logoColor=white',
  ChatGPT:
    'https://img.shields.io/badge/ChatGPT-74aa9c?logo=openai&logoColor=white',
  ShadcnUI:
    'https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff',
  Supabase:
    'https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff',
  Vite: 'https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff',
  Spotify:
    'https://img.shields.io/badge/Spotify-1ED760?logo=spotify&logoColor=white',
};

export default function Projects() {
  const jukeboxdTechStack = [
    'React.js',
    'TypeScript',
    'TailwindCSS',
    'ShadcnUI',
    'Supabase',
    'Vite',
    'Spotify',
  ];

  const peakFitTechStack = [
    'React Native',
    'Expo',
    'TypeScript',
    'Node.js',
    'Express.js',
    'ChatGPT',
  ];

  const ucalgaryCSSTechStack = [
    'React.js',
    'JavaScript',
    'HTML',
    'CSS',
    'TailwindCSS',
    'Chakra UI',
    'Netlify',
  ];

  const closetgenieTechStack = [
    'React Native',
    'JavaScript',
    'Figma',
    'Expo',
    'TailwindCSS',
  ];

  const seekicksTechStack = [
    'Python',
    'PyTorch',
    'Google Colab',
    'Pandas',
    'NumPy',
  ];

  const onlineForumTechStack = [
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
  ];

  const silentOwlTechStack = ['Java'];

  function SinglePreviewImg({ src, alt }) {
    return (
      <Image
        src={src}
        alt={alt}
        className='w-full rounded-xl'
      />
    );
  }

  function PeakFitPreviewImg() {
    const previewImages = [
      {
        src: PeakFitAIBuilder,
        alt: 'PeakFit AI builder screen',
      },
      {
        src: PeakFitNutrition,
        alt: 'PeakFit nutrition screen',
      },
      {
        src: PeakFitYou,
        alt: 'PeakFit you screen',
      },
    ];

    return (
      <section className='flex justify-center gap-1'>
        {previewImages.map((img) => {
          return (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className='w-1/3 rounded-xs'
            />
          );
        })}
      </section>
    );
  }

  function ClosetGeniePreviewImg() {
    const previewImages = [
      {
        src: cgClosetScreen,
        alt: 'ClosetGenie closet screen',
      },
      {
        src: cgOutfitsScreen,
        alt: 'ClosetGenie outfits screen',
      },
      {
        src: cgLaundryScreen,
        alt: 'ClosetGenie laundry screen',
      },
    ];

    return (
      <section className='flex justify-center gap-2'>
        {previewImages.map((img) => {
          return (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className='w-1/3 rounded-xs'
            />
          );
        })}
      </section>
    );
  }

  function UCalgaryCSSPreviewImg() {
    const previewImages = [
      {
        src: UCalgaryCSSDesktop,
        alt: 'UCalgary CSS website desktop view',
        width: 'w-3/4',
      },
      {
        src: UCalgaryCSSMobile,
        alt: 'UCalgary CSS website mobile view',
        width: 'w-1/4',
      },
    ];

    return (
      <section className='flex items-center justify-center gap-2'>
        {previewImages.map((img) => {
          return (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className={`rounded-xs ${img.width}`}
            />
          );
        })}
      </section>
    );
  }

  return (
    <main className='mx-8 mt-20 flex min-h-screen flex-col items-center justify-center gap-8 lg:mt-32'>
      <h1>projects 📚</h1>

      <Project
        title='Jukeboxd'
        logo={JukeboxdLogo}
        projectType='music rating and discovery web app'
        previewImages={
          <SinglePreviewImg
            src={JukeboxdProfilePage}
            alt='Jukeboxd profile page'
          />
        }
        githubLink='https://github.com/allennguyen01/jukeboxd'
        previewLink='https://jukeboxd-azure.vercel.app/'
        summary='Letterboxd-inspired web app that allows users to discover and rate music, featuring a sleek interface and powerful search capabilities, built with a modern tech stack for optimal performance.'
        techStack={jukeboxdTechStack}
        datesWorked={'Jan 2025 - Present'}
      />

      <Project
        title={'PeakFit'}
        logo={PeakFitLogo}
        projectType={'personal health mobile app startup'}
        previewImages={<PeakFitPreviewImg />}
        githubLink={'https://github.com/allennguyen01/peakfit'}
        summary={
          'Cross-platform mobile app that leverages AI to deliver personalized workout and nutrition plans, featuring a user-friendly design and seamless navigation, powered by a RESTful API for dynamic user experiences.'
        }
        techStack={peakFitTechStack}
        datesWorked={'Jan - Apr 2024'}
      />

      <Project
        title={"UCalgary Chinese Students' Society"}
        logo={UCalgaryCSSlogo}
        projectType={'university club website'}
        previewImages={
          <SinglePreviewImg
            src={UCalgaryCSSDesktop}
            alt='UCalgary CSS desktop view'
          />
        }
        previewLink={'https://ucalgarycss.com/'}
        githubLink={'https://github.com/allennguyen01/ucalgary-css'}
        summary={
          "Desktop and mobile responsive website for University of Calgary's largest Chinese club, featuring event info, member recruitment, and community resources, with tailored UI/UX design informed by user interviews and Google analytics."
        }
        techStack={ucalgaryCSSTechStack}
        datesWorked={'July - Aug 2023'}
      />

      <Project
        title={'ClosetGenie'}
        logo={cgLogo}
        projectType={'outfit recommendation mobile app'}
        previewImages={<ClosetGeniePreviewImg />}
        githubLink={'https://github.com/allennguyen01/ClosetGenie'}
        summary={
          'Mobile app that simplifies daily outfit selection with a modern recommendation algorithm, laundry reminders, and wardrobe management, improving user confidence and convenience while reducing decision fatigue.'
        }
        techStack={closetgenieTechStack}
        datesWorked={'Jan - Apr 2023'}
      />

      {/* <Project
        title={'Online Discussion Forum'}
        projectType={'Full Stack Web App'}
        previewImages={<SinglePreviewImg />}
        githubLink={'https://github.com/allennguyen01/chat-app'}
        summaryPoints={[
          'Built a single-page dynamically rendered web frontend using HTML and CSS following a MVC pattern and object-oriented programming',
          'Implemented the client-side and server-side functionalities with RESTful API endpoints using JavaScript, Node.js, and Express.js',
          'Programmed the app to store and retain chat messages data in a MongoDB non-relational database',
        ]}
        techStack={onlineForumTechStack}
        datesWorked={'Sept - Dec 2021'}
      /> */}

      <Project
        title={'SeeKicks'}
        logo={seekicksLogo}
        projectType={'sneaker machine learning image recognition'}
        previewImages={
          <SinglePreviewImg
            src={seekicksWebpage}
            alt='SeeKick webpage'
          />
        }
        githubLink={'https://github.com/allennguyen01/SeeKicks'}
        summary={
          'Machine learning image recognition app that accurately identifies over 850 sneaker models with 98% accuracy using a convolutional neural network, deployed on Heroku with a user-friendly Streamlit interface.'
        }
        techStack={seekicksTechStack}
        datesWorked={'Jan - Apr 2021'}
      />

      <Project
        title={'Silent Owl'}
        logo={slientOwlLogo}
        projectType={'java hackathon project'}
        previewImages={
          <SinglePreviewImg
            src={slientOwlApp}
            alt='Silent Owl desktop application'
          />
        }
        githubLink={'https://github.com/allennguyen01/Silent-Owl'}
        summary={[
          'Java native desktop app that monitors microphone volume and alerts users if they are too loud, featuring a user-friendly GUI, and recognized as the best project in the begineers hackathon.',
        ]}
        techStack={silentOwlTechStack}
        datesWorked={'Feb 2021'}
      />
    </main>
  );
}

function Project({
  logo,
  title,
  projectType,
  previewImages,
  previewLink = '',
  githubLink,
  summary,
  techStack,
  datesWorked,
}) {
  return (
    <>
      <div className='items-center justify-center lg:max-w-4xl'>
        <div className='flex items-center justify-between rounded-sm bg-zinc-300 p-4 dark:bg-zinc-700'>
          <div className='flex max-w-[250px] items-center gap-2 lg:max-w-none lg:gap-4'>
            <Image
              src={logo}
              alt={`${title} logo`}
              className='w-10 lg:w-20'
            />

            <div>
              <h3>{title}</h3>
              <p className='text-base lg:text-lg'>{projectType}</p>
            </div>
          </div>

          <ProjectButtons
            previewLink={previewLink}
            githubLink={githubLink}
          />
        </div>

        <div className='flex flex-col-reverse gap-8 bg-zinc-200 p-6 lg:flex-row dark:bg-zinc-800'>
          <section className='flex flex-col gap-6'>
            <div className='text-base leading-relaxed'>{summary}</div>

            <div className='flex flex-wrap items-center gap-2'>
              <span className='text-sm font-semibold lg:text-base'>
                Tech Stack:{' '}
              </span>
              {techStack.map((t) => (
                <picture key={t}>
                  <img
                    src={techBadges[t]}
                    alt={`${t} logo`}
                    className='rounded-sm object-contain'
                  />
                </picture>
              ))}
            </div>

            <div className='text-sm lg:text-base'>
              <span className='font-semibold'>Date: </span>
              <span>{datesWorked}</span>
            </div>
          </section>

          <section className='flex max-w-sm items-center'>
            {previewImages}
          </section>
        </div>
      </div>
    </>
  );
}

function ProjectButtons({ previewLink, githubLink }) {
  return (
    <section className='flex flex-col justify-evenly gap-1 lg:flex-row lg:gap-4'>
      {previewLink ? (
        <a
          href={previewLink}
          className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700 lg:h-12 lg:w-12'
        >
          <RiComputerLine className='h-6 w-6 lg:h-8 lg:w-8' />
        </a>
      ) : (
        <></>
      )}
      <a
        href={githubLink}
        className='flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition-colors hover:bg-red-700 lg:h-12 lg:w-12'
      >
        <RiGithubLine className='h-6 w-6 lg:h-8 lg:w-8' />
      </a>
    </section>
  );
}
