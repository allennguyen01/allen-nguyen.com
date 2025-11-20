import './globals.css';
import { Inter, Barlow } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSwap from '@/components/ThemeSwap';

import miiHeadshot from './icon.png';

const inter = Inter({ subsets: ['latin'] });
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-barlow',
});

export const metadata = {
  title: 'Allen Nguyen',
  description:
    "hey, I'm Allen and this is my portfolio. currently: software developer @ Inverted AI, computer engineering @ ubc, vancouver, canada.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${barlow.variable} dark scroll-smooth`}
    >
      <head>
        <link
          rel='icon'
          href='/icon.png'
          type='image/png'
          sizes='any'
        />
      </head>

      <body
        className={`${inter.className} flex min-h-screen flex-col bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <NavBar />
        {children}

        <footer className='m-4 flex flex-col gap-4 text-center text-sm text-zinc-400'>
          <hr className='border-zinc-700' />
          <p>Ⓒ 2023 Allen Nguyen, Vancouver Canada</p>
        </footer>
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <nav className='fixed top-0 z-50 flex w-full items-center justify-center self-center bg-zinc-300/30 px-6 py-4 font-medium drop-shadow backdrop-blur lg:px-40 lg:py-4 dark:bg-zinc-700/30'>
      <div className='flex flex-1 items-center'>
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <button className='flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700'>
            <Image
              src={miiHeadshot}
              alt='Allen as a Mii'
              className='w-14 rounded-full'
            />
          </button>
        </Link>
      </div>
      <div className='flex flex-1 items-center justify-end gap-4'>
        <div className='lg:hidden'>
          <ThemeSwap />
        </div>
        <div className='group relative lg:hidden'>
          <div
            tabIndex={0}
            role='button'
            className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-700'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='absolute right-0 z-1 mt-3 hidden w-52 rounded-lg bg-zinc-700 p-2 shadow-lg group-hover:block dark:bg-zinc-700'
          >
            <Link
              href='#experience'
              className='block rounded-lg px-4 py-2 transition-colors hover:bg-zinc-600 dark:hover:bg-zinc-600'
            >
              experience
            </Link>
            <Link
              href='#projects'
              className='block rounded-lg px-4 py-2 transition-colors hover:bg-zinc-600 dark:hover:bg-zinc-600'
            >
              projects
            </Link>
            <Link
              href='./resume.pdf'
              className='block rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
              target='_blank'
              rel='noopener noreferrer'
            >
              resume
            </Link>
          </ul>
        </div>
      </div>
      <div className='hidden w-full flex-1 items-center justify-end lg:flex'>
        <ul className='flex items-center gap-4 px-1 text-base'>
          <ThemeSwap />

          <Link
            href='#experiences'
            className='rounded-lg px-4 py-2 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-700'
          >
            experience
          </Link>
          <Link
            href='#projects'
            className='rounded-lg px-4 py-2 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-700'
          >
            projects
          </Link>
          <Link
            href='./resume.pdf'
            className='rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
            target='_blank'
            rel='noopener noreferrer'
          >
            resume
          </Link>
        </ul>
      </div>
    </nav>
  );
}
