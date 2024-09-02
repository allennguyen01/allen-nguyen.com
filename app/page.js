import Image from 'next/image';
import ContactIcons from '@/components/ContactIcons';
import SkillIcons from '@/components/SkillIcons';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center items-center m-8 gap-8 text-center text-base lg:text-lg'>
      <h1>hey, I&apos;m Allen 👋</h1>
      <p className='lg:text-xl'>
        computer engineering @ ubc
        <br />
        📍 vancouver, canada
      </p>

      <Image
        src='/images/me-casual.jpg'
        alt='Photo of Allen'
        width={500}
        height={250}
        className='rounded-lg'
        unoptimized
      />

      <div className='flex flex-col gap-2'>
        <h2>about me</h2>
        <p className='max-w-2xl text-left'>
          I am a self-motivated computer engineering student in my fourth year
          at the University of British Columbia. I am passionate about using
          innovative technology to improve sustainability and daily health.
          <br /> <br />I enjoy meeting new people and hearing new perspectives.
          Reach out to me if you want to talk about the newest tech,
          engineering, basketball, music (rap and R&B), and movies.
        </p>
      </div>

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
