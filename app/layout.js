import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Allen Nguyen',
  description: "Allen Nguyen's portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <nav className='flex justify-between gap-4 m-4'>
          <Link href='/'>Allen Nguyen</Link>
          <div className='flex gap-4'>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
