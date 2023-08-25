import Image from 'next/image';
import ContactIcons from '@/components/ContactIcons';
import SkillIcons from '@/components/SkillIcons';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center m-8 gap-8 text-center text-xl'>
      <h1 className='font-semibold text-4xl'>hey, I&apos;m allen nguyen 👋</h1>
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
        <p>contact me!</p>
        <ContactIcons />
      </div>

      <div>
        <p>skills</p>
        <div>
          <SkillIcons />
        </div>
      </div>
    </main>
  );
}
