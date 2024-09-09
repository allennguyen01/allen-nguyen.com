import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

import miiHeadshot from './icon.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Allen Nguyen',
  description: "Allen Nguyen's portfolio site",
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
    <div className='navbar fixed top-0 z-50 flex items-center justify-center self-center bg-base-100 font-medium lg:max-w-screen-xl lg:py-4'>
      <div className='navbar-start'>
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <button className='btn btn-circle btn-neutral h-16 w-16'>
            <Image
              src={miiHeadshot}
              alt='Allen as a Mii'
              className='w-14 rounded-full'
            />
          </button>
        </Link>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost lg:hidden'
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
            className='menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <Link
              href='#experience'
              className='rounded-lg px-4 py-2 hover:bg-black'
            >
              experience
            </Link>
            <Link
              href='#projects'
              className='rounded-lg px-4 py-2 hover:bg-black'
            >
              projects
            </Link>
            <Link
              href='./Allen Nguyen Resume (Aug 26 2024).pdf'
              className='rounded-lg bg-accent px-4 py-2 text-black hover:bg-accent-focus'
              target='_blank'
              rel='noopener noreferrer'
            >
              resume
            </Link>
          </ul>
        </div>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal gap-4 px-1 text-base'>
          <Link
            href='#experience'
            className='rounded-lg px-4 py-2 hover:bg-black'
          >
            experience
          </Link>
          <Link
            href='#projects'
            className='rounded-lg px-4 py-2 hover:bg-black'
          >
            projects
          </Link>
          <Link
            href='./Allen Nguyen Resume (Aug 26 2024).pdf'
            className='rounded-lg bg-accent px-4 py-2 text-black hover:bg-accent-focus'
            target='_blank'
            rel='noopener noreferrer'
          >
            resume
          </Link>
        </ul>
      </div>
    </div>
  );
}
