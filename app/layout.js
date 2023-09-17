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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <nav className='flex justify-between items-center gap-4 my-4 mx-4 lg:mx-56 text-lg font-medium'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src={miiHeadshot} alt='Allen as a Mii' className='w-14' />
          </Link>
          <section className='flex gap-4'>
            <Link href='/projects'>projects</Link>
            <Link href='/experience'>experience</Link>
          </section>
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
