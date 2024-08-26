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
				<NavBar />
				{children}

				<footer className='flex flex-col text-sm m-4 text-center gap-4'>
					<hr />
					<p>Ⓒ 2023 Allen Nguyen, Vancouver Canada</p>
				</footer>
			</body>
		</html>
	);
}

function NavBar() {
	return (
		<div className='navbar bg-base-100 flex justify-center items-center self-center lg:pt-8 lg:max-w-screen-xl font-medium'>
			<div className='navbar-start'>
				<Link
					href='/'
					className='flex items-center gap-2'
				>
					<button className='btn btn-circle btn-neutral w-16 h-16'>
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
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
					>
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
							href='./Allen Nguyen Resume (Aug 26 2024).pdf'
							className='bg-accent px-4 py-2 rounded-lg text-black hover:bg-accent-focus'
							target='_blank'
							rel='noopener noreferrer'
						>
							resume
						</Link>
					</ul>
				</div>
			</div>
			<div className='navbar-end hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 gap-4 text-base'>
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
						href='./Allen Nguyen Resume (Aug 26 2024).pdf'
						className='bg-accent px-4 py-2 rounded-lg text-black hover:bg-accent-focus'
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
