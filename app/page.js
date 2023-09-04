import Image from 'next/image';
import ContactIcons from '@/components/ContactIcons';
import SkillIcons from '@/components/SkillIcons';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center items-center m-8 gap-8 text-center'>
      <h1 className='font-semibold text-4xl'>hey, I&apos;m Allen 👋</h1>
      <p>
        computer engineering @ ubc
        <br />
        📍 vancouver, canada
      </p>

      <Image
        src='/images/me-formal.jpg'
        alt='Photo of Allen'
        width={250}
        height={250}
        className='rounded-lg'
        unoptimized
      />

      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold'>about me</h1>
        <p className='text-left text-base max-w-lg'>
          I am a self-motivated computer engineering student in my fourth year
          at the University of British Columbia. I am passionate about using
          innovative technology to improve sustainability and daily health.
          <br /> <br />I enjoy meeting new people and hearing new perspectives.
          Reach out to me if you want to talk about the newest tech,
          engineering, basketball, music (rap and R&B), and movies.
        </p>
        {/* <ol className='list-decimal text-left max-w-lg'>
          <li>
            Computer Engineering Student in my fourth year at the University of
            British Columbia
          </li>
          <li>
            Passionate about using innovative technology to improve
            sustainability and wellness outcomes
          </li>
          <li>Enjoy meeting new people and hearing new perspectives</li>
          <li>
            Reach out to me if you want to talk about the newest tech,
            engineering, basketball, music (rap and R&B)
          </li>
        </ol> */}
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold'>contact me!</h1>
        <ContactIcons />
      </div>

      <div>
        <h1 className='text-xl font-semibold'>skills</h1>
        <div>
          <SkillIcons />
        </div>
      </div>
    </main>
  );
}
