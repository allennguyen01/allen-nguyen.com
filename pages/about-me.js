import Image from 'next/image';
import ContactIcons from '@/components/ContactIcons';
import SkillIcons from '@/components/SkillIcons';

export default function AboutMe() {
  return (
    <main
      id='about-me'
      className='m-8 mt-32 flex min-h-screen flex-col items-center justify-center gap-8 text-center text-base lg:text-lg'
    >
      <h1>hey, I&apos;m Allen 👋</h1>
      <p className='lg:text-xl'>
        <span className='font-semibold'>currently:</span> finishing last
        semester @ UBC, graduating in December 2025
        <br />
        <span className='font-semibold'>my project highlight:</span>{' '}
          <a
            href='https://jukeboxd-azure.vercel.app/'
            target='_blank'
            className='text-blue-400 underline hover:text-blue-300 transition-colors'
          >
            Jukeboxd
          </a>
          ,{' '}
          <a
            href='https://letterboxd.com/'
            target='_blank'
            className='text-blue-400 underline hover:text-blue-300 transition-colors'
          >
            Letterboxd
          </a>
        -clone for music lovers
        <br />
        <br />
        🎒 Computer Engineering @ UBC
        <br />
        📍 Vancouver, Canada
      </p>

      <Image
        src='/images/me-casual.jpg'
        alt='Photo of Allen'
        width={500}
        height={250}
        className='rounded-lg'
      />

      <section className='flex max-w-2xl flex-col gap-2 text-left'>
        <h2 className='text-center'>about me</h2>
        <p>
          New grad software engineer specializing in frontend development,
          particularly with React, TypeScript, and modern web technologies.
          I&apos;ve gained over two years of internship experience at agile
          start-ups developing production features for web and mobile
          applications. Check out my{' '}
          <a
            href='#experiences'
            className='underline hover:cursor-pointer'
          >
            experiences
          </a>{' '}
          and{' '}
          <a
            href='#projects'
            className='underline hover:cursor-pointer'
          >
            projects
          </a>{' '}
          below.
        </p>
        {/* <div>
          When I&apos;m not working, you can find me...
          <ul className='emoji-list list-inside'>
            <li>Running through the streets of Vancouver</li>
            <li>
              Working on passion projects to improve health and connections
            </li>
            <li>Discovering new R&B and rap music</li>
          </ul>
        </div> */}
      </section>

      <div className='flex flex-col gap-2'>
        <h2>contact me!</h2>
        <ContactIcons />
      </div>

      <div className='flex flex-col gap-2'>
        <h2>skills</h2>
        <div>
          <SkillIcons />
        </div>
      </div>
    </main>
  );
}
