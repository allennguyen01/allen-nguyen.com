import Image from 'next/image';
import { RiGithubLine, RiComputerLine } from 'react-icons/ri';

import PeakFitLogo from '../public/images/projects/peakfit/logo.png';
import PeakFitAIBuilder from '../public/images/projects/peakfit/ai-builder.png';
import PeakFitNutrition from '../public/images/projects/peakfit/nutrition.png';
import PeakFitYou from '../public/images/projects/peakfit/you.png';

import UCalgaryCSSDesktop from '../public/images/projects/ucalgary-css/css-desktop-homepage.jpg';
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
    'https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  JavaScript:
    'https://img.shields.io/badge/javascript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  HTML: 'https://img.shields.io/badge/html5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white',
  CSS: 'https://img.shields.io/badge/css3-%231572B6?style=for-the-badge&logo=css3&logoColor=white',
  TailwindCSS:
    'https://img.shields.io/badge/tailwindcss-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
  'Chakra UI':
    'https://img.shields.io/badge/chakra-%234ED1C5?style=for-the-badge&logo=chakraui&logoColor=white',
  Netlify:
    'https://img.shields.io/badge/netlify-%23000000?style=for-the-badge&logo=netlify&logoColor=#00C7B7',
  'React Native':
    'https://img.shields.io/badge/react_native-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  Figma:
    'https://img.shields.io/badge/figma-%23F24E1E?style=for-the-badge&logo=figma&logoColor=white',
  Expo: 'https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37',
  Python:
    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
  PyTorch:
    'https://img.shields.io/badge/PyTorch-%23EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white',
  'Google Colab':
    'https://img.shields.io/badge/Google_Colab-F9AB00?style=for-the-badge&logo=google%20colab&logoColor=white',
  Pandas:
    'https://img.shields.io/badge/pandas-%23150458?style=for-the-badge&logo=pandas&logoColor=white',
  NumPy:
    'https://img.shields.io/badge/numpy-%23013243?style=for-the-badge&logo=numpy&logoColor=white',
  'Node.js':
    'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
  MongoDB:
    'https://img.shields.io/badge/MongoDB-%234ea94b?style=for-the-badge&logo=mongodb&logoColor=white',
  'Express.js':
    'https://img.shields.io/badge/express.js-%23404d59?style=for-the-badge&logo=express&logoColor=%2361DAFB',
  Java: 'https://img.shields.io/badge/java-%23ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
  TypeScript:
    'https://img.shields.io/badge/typescript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white',
  ChatGPT:
    'https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white',
};

export default function Projects() {
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
              className='w-1/3 rounded-sm'
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
              className='w-1/3 rounded-sm'
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
              className={`rounded-sm ${img.width}`}
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
      <div className='max-w-4xl items-center justify-center'>
        <div className='flex items-center justify-between gap-2 rounded bg-base-300 p-4'>
          <div className='flex w-max items-center lg:gap-4'>
            <Image
              src={logo}
              alt={`${title} logo`}
              className='w-20 rounded-lg'
            />

            <div>
              <h3>{title}</h3>
              <p className='text-base lg:text-xl'>{projectType}</p>
            </div>
          </div>

          <ProjectButtons
            previewLink={previewLink}
            githubLink={githubLink}
          />
        </div>

        <div className='flex gap-8 bg-base-200 p-6'>
          <section className='flex flex-col gap-8'>
            <div className='text-sm leading-relaxed lg:text-lg'>{summary}</div>

            <div className='flex flex-wrap gap-2'>
              <span className='font-semibold'>Tech Stack: </span>
              {techStack.map((t) => (
                <picture key={t}>
                  <img
                    src={techBadges[t]}
                    alt={`${t} logo`}
                    className='rounded object-contain'
                  />
                </picture>
              ))}
            </div>

            <div>
              <span className='font-bold'>Date: </span>
              <span className=''>{datesWorked}</span>
            </div>
          </section>

          <section className='flex max-w-sm items-center'>
            {previewImages}
          </section>
        </div>

        <div className='divider my-4'></div>
      </div>
    </>
  );
}

function ProjectButtons({ previewLink, githubLink }) {
  return (
    <section className='flex justify-evenly gap-4'>
      {previewLink ? (
        <button className='btn btn-circle btn-primary btn-md lg:btn-lg'>
          <a href={previewLink}>
            <RiComputerLine className='h-8 w-8' />
          </a>
        </button>
      ) : (
        <></>
      )}
      <button className='btn btn-circle btn-secondary btn-md lg:btn-lg'>
        <a href={githubLink}>
          <RiGithubLine className='h-8 w-8' />
        </a>
      </button>
    </section>
  );
}
