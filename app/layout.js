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
						<button className='btn btn-circle btn-neutral w-16 h-16'>
							<Image
								src={miiHeadshot}
								alt='Allen as a Mii'
								className='w-14 rounded-full'
							/>
						</button>
					</Link>
					<section className='flex gap-2 justify-center items-center'>
						<Link
							href='/projects'
							className='hover:bg-black px-4 py-2 rounded-lg'
						>
							projects
						</Link>
						<Link
							href='/experience'
							className='hover:bg-black px-4 py-2 rounded-lg'
						>
							experience
						</Link>
						<Link
							href='./Allen Nguyen Resume.pdf'
							className='bg-accent px-4 py-2 rounded-lg text-black hover:bg-accent-focus'
							target='_blank'
							rel='noopener noreferrer'
						>
							resume
						</Link>
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
