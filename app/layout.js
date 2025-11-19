import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

import miiHeadshot from './icon.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Allen Nguyen',
  description:
    "hey, I'm Allen and this is my portfolio. currently: software developer @ Inverted AI, computer engineering @ ubc, vancouver, canada.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <NavBar />
        {children}

        <footer className='m-4 flex flex-col gap-4 text-center text-sm'>
          <hr />
          <p>Ⓒ 2023 Allen Nguyen, Vancouver Canada</p>
        </footer>
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <nav className='fixed top-0 z-50 flex w-full items-center justify-center self-center bg-slate-800 bg-opacity-20 font-medium drop-shadow-sm backdrop-blur px-6 py-4 lg:px-40 lg:py-4'>
      <div className='flex flex-1 items-center'>
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <button className='flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors'>
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
            className='flex items-center justify-center rounded-lg p-2 hover:bg-slate-300 transition-colors'
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
            className='absolute right-0 z-[1] mt-3 hidden w-52 rounded-lg bg-slate-200 p-2 shadow-lg group-hover:block'
          >
            <Link
              href='#experience'
              className='block rounded-lg px-4 py-2 hover:bg-slate-400 transition-colors'
            >
              experience
            </Link>
            <Link
              href='#projects'
              className='block rounded-lg px-4 py-2 hover:bg-slate-400 transition-colors'
            >
              projects
            </Link>
            <Link
              href='./resume.pdf'
              className='block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors'
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
            className='rounded-lg px-4 py-2 hover:bg-slate-400 transition-colors'
          >
            experience
          </Link>
          <Link
            href='#projects'
            className='rounded-lg px-4 py-2 hover:bg-slate-400 transition-colors'
          >
            projects
          </Link>
          <Link
            href='./resume.pdf'
            className='rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors'
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

// TODO: implement theme swap
function ThemeSwap() {
  function MoonIcon() {
    return (
      <svg
        className='h-6 w-6 fill-current lg:h-8 lg:w-8'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
      </svg>
    );
  }

  function SunIcon() {
    return (
      <svg
        className='h-6 w-6 fill-current lg:h-8 lg:w-8'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
      </svg>
    );
  }

  return (
    <label className='relative inline-flex cursor-pointer items-center'>
      {/* this hidden checkbox controls the state */}
      <input
        type='checkbox'
        className='peer sr-only'
        value='autumn'
      />
      <div className='relative h-6 w-6 lg:h-8 lg:w-8'>
        <div className='peer-checked:opacity-0 peer-checked:pointer-events-none absolute inset-0 transition-opacity'>
          <MoonIcon />
        </div>
        <div className='opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto absolute inset-0 transition-opacity'>
          <SunIcon />
        </div>
      </div>
    </label>
  );
}
