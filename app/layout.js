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
    <html lang='en'>
      <body className={`${inter.className}`}>
        <nav className='flex justify-between items-center gap-4 m-4 text-lg font-medium'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src={miiHeadshot} alt='Allen as a Mii' className='w-14' />
          </Link>
          <Link href='/projects'>Projects</Link>
        </nav>
        {children}

        <footer className='flex flex-col text-sm m-4 text-center gap-4'>
          <hr />
          <p>Ⓒ 2023 Allen Nguyen, Vancouver Canada</p>
        </footer>
      </body>
    </html>
  );
}
