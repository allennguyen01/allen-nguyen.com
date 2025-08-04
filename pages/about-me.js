import Image from 'next/image';
import ContactIcons from '@/components/ContactIcons';
import SkillIcons from '@/components/SkillIcons';

export default function AboutMe() {
  return (
    <main
      id='about-me'
      className='m-8 mt-24 flex min-h-screen flex-col items-center justify-center gap-8 text-center text-base lg:mt-32 lg:text-lg'
    >
      <h1>hey, I&apos;m Allen 👋</h1>
      <p className='lg:text-xl'>
        currently: full-stack software developer @{' '}
        <a
          href='https://www.ontraccr.com/'
          className='link link-primary'
        >
          Ontraccr Technologies
        </a>
        <br />
        <br />
        🎒 computer engineering @ ubc
        <br />
        📍 vancouver, canada
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
          I am an inspiring <i>software engineer</i> focused on building unique
          products that solve meaningful problems. Right now, I am in my 5th
          year of Computer Engineering at the University of British Columbia.
        </p>
        <div>
          When I&apos;m not working, you can find me...
          <ul className='emoji-list list-inside'>
            <li>Running through the streets of Vancouver</li>
            <li>
              Working on passion projects to improve health and connections
            </li>
            <li>Discovering new R&B and rap music</li>
          </ul>
        </div>
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
