import Image from 'next/image';

import UCalgaryCSSMobile from '../../public/images/projects/ucalgary-css/css-phone-homepage.jpg';
import UCalgaryCSSDesktop from '../../public/images/projects/ucalgary-css/css-desktop-homepage.jpg';

import cgClosetScreen from '../../public/images/projects/closetgenie/closet-screen.png';
import cgOutfitsScreen from '../../public/images/projects/closetgenie/outfits-screen.png';
import cgLaundryScreen from '../../public/images/projects/closetgenie/laundry-screen.png';
import cgProfileScreen from '../../public/images/projects/closetgenie/profile-screen.png';

import seekicksWebpage from '../../public/images/projects/seekicks/webpage.jpg';

const techBadges = {
  'React.js':
    'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  JavaScript:
    'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  HTML: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
  CSS: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
  TailwindCSS:
    'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
  'Chakra UI':
    'https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white',
  Netlify:
    'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7',
  'React Native':
    'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  Figma:
    'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white',
  Expo: 'https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37',
  Python:
    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
  PyTorch:
    'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
  'Google Colab':
    'https://img.shields.io/badge/Google_Colab-F9AB00.svg?style=for-the-badge&logo=google%20colab&logoColor=white',
  Pandas:
    'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white',
  NumPy:
    'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white',
};

export default function Projects() {
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

  function UCalgaryCSSPreviewImg() {
    return (
      <Image
        src={UCalgaryCSSDesktop}
        alt='Desktop view of UCalgary Chinese Students Society Website'
        className='rounded-xl'
      />
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
      {
        src: cgProfileScreen,
        alt: 'ClosetGenie profile screen',
      },
    ];

    return (
      <section className='flex flex-wrap gap-2'>
        {previewImages.map((img) => {
          return (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className='rounded-xl w-40 lg:w-44'
            />
          );
        })}
      </section>
    );
  }

  function SeeKicksPreviewImg() {
    return (
      <Image
        src={seekicksWebpage}
        alt='SeeKick webpage'
        className='rounded-xl'
      />
    );
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center m-8 gap-8'>
      <h1 className='text-4xl font-bold'>projects</h1>
      <Project
        title={"University of Calgary Chinese Students' Society"}
        projectType={'Business website'}
        previewImages={<UCalgaryCSSPreviewImg />}
        websiteLink={'https://ucalgarycss.com/'}
        githubLink={'https://github.com/allennguyen01/ucalgary-css'}
        summaryPoints={[
          'Develop a website to display information regarding club events, member/executive recruitment, and community engagement resources',
          'Built an intuitive user interface using ReactJS and JavaScript for seamless navigation and custom component modularity',
          'Employed UI/UX design with TailwindCSS and Chakra UI to ensure consistent styling and responsiveness across various devices',
          'Deployed the website with Netlify and Google Domains to increase SEO and view analytical trends',
        ]}
        techStack={ucalgaryCSSTechStack}
        datesWorked={'July - Aug 2023'}
      />

      <Project
        title={'ClosetGenie'}
        projectType={'Mobile application'}
        previewImages={<ClosetGeniePreviewImg />}
        githubLink={'https://github.com/allennguyen01/ClosetGenie'}
        summaryPoints={[
          'Design a interactive frontend using Figma prototypes and mockups based on custom design specifications and requirements',
          'Construct reusable React Native components for a responsive IOS/Android app on Expo and add styling with TailwindCSS framework',
          'Integrated REST API endpoints from the backend to retrieve and send data to the cloud with JavaScript',
        ]}
        techStack={closetgenieTechStack}
        datesWorked={'Jan - Apr 2023'}
      />

      <Project
        title={'SeeKicks'}
        projectType={'Machine learning application'}
        previewImages={<SeeKicksPreviewImg />}
        githubLink={'https://github.com/allennguyen01/SeeKicks'}
        summaryPoints={[
          'Implemented a machine learning image recognition app that identifies over 850 sneaker models with 98% accuracy',
          'Tested and trained a PyTorch convolutional neural network model with an manipulated dataset of 50 000 images using Python',
          'Deployed the web application using Heroku and used Streamlit to construct the UI',
        ]}
        techStack={seekicksTechStack}
        datesWorked={'Jan - Apr 2021'}
      />
    </main>
  );
}

function Project({
  title,
  projectType,
  previewImages,
  websiteLink = '',
  githubLink,
  summaryPoints,
  techStack,
  datesWorked,
}) {
  return (
    <article className='flex flex-col gap-4 max-w-3xl'>
      <section>
        <h2 className='text-2xl font-medium'>{title}</h2>
        <p className='text-xl text-gray-400'>{projectType}</p>
      </section>

      <section className='flex flex-wrap gap-2'>{previewImages}</section>

      <section className='flex text-lg justify-evenly font-semibold'>
        {websiteLink ? <a href={websiteLink}>Live preview -&gt;</a> : ''}
        <a href={githubLink}>View code -&gt;</a>
      </section>

      <section>
        <p className='text-xl'>Summary</p>
        <ul className='list-disc text-gray-400 leading-relaxed'>
          {summaryPoints.map((pt) => {
            return <li key={pt}>{pt}</li>;
          })}
        </ul>
      </section>

      <section>
        <p>Technologies</p>
        <section className='flex flex-wrap gap-2'>
          {techStack.map((t) => (
            <img
              key={t}
              src={techBadges[t]}
              alt={`${t} logo`}
              // width={100}
              // height={100}
              className='h-7 object-contain rounded'
            />
          ))}
        </section>
      </section>

      <section>
        <p>
          Date <span className='text-gray-400'>{datesWorked}</span>
        </p>
      </section>

      {/* <ProjectButtons
          codeLink={'https://github.com/allennguyen01/ucalgary-css'}
          previewLink={'https://ucalgarycss.com/'}
          // codeLink={''}
          // previewLink={''}
        /> */}
    </article>
  );
}
