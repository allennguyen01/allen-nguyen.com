import { BsPersonWorkspace } from 'react-icons/bs';
import { PiPottedPlantBold } from 'react-icons/pi';
import { FaChalkboardTeacher } from 'react-icons/fa';

export default function Experience() {
	return (
		<main className='flex flex-col flex-auto items-center m-8 mb-2 gap-12'>
			<h1>experience 💻</h1>

			<div className='flex flex-col lg:flex-row'>
				<div className='flex flex-col gap-4'>
					<h2 className='ml-6'>work internships</h2>
					<ol
						id='work-experience'
						className='relative border-l border-gray-200 dark:border-gray-700 lg:max-w-sm'
					>
						<TimelineItem
							position='Software Engineer'
							company='Voronoi Health Analytics • Co-op'
							time='Sept 2023 - Present'
							description='🩻 medical imaging processing and AI software'
						/>
						<TimelineItem
							position='Software Engineer'
							company='BCI • Co-op'
							time='Sept 2022 - Dec 2022'
							description='📈 internal data collection full stack web application'
						/>
						<TimelineItem
							position='Engineering Projects Instructor'
							company='Zen Maker Lab • Co-op'
							time='Jan 2022 - Aug 2022'
							description='🧑🏻‍🏫 STEM education in coding, science, and engineering'
							icon={<FaChalkboardTeacher />}
						/>
					</ol>
				</div>

				<div className='flex flex-col gap-4'>
					<h2 className='ml-6'>extracurriculars</h2>
					<ol
						id='extracurriculars'
						className='relative border-l border-gray-200 dark:border-gray-700 lg:max-w-sm'
					>
						<TimelineItem
							position='Software Developer'
							company='UBC Launchpad • Seasonal'
							time='Sept 2023 - Present'
							description='👨🏻‍⚕️ seizure tracking mobile application'
						/>
						<TimelineItem
							position='Socials Coordinator'
							company='UBC Vietnamese Students Association'
							time='Sept 2023 - Present'
							description='🎊 internal team bonding events and engagement'
							icon={<PiPottedPlantBold />}
						/>
						<TimelineItem
							position='VP Development'
							company="UCalgary Chinese Students' Society"
							time='July 2023 - Present'
							description="💻 web development for club's landing website"
							icon={<PiPottedPlantBold />}
						/>
						<TimelineItem
							position='Renewable Energy Team Lead'
							company='UBC WasteNauts • Seasonal'
							time='May 2021 - April 2022'
							description='🔋 sustainable renewable energy harvesting system'
							icon={<PiPottedPlantBold />}
						/>
					</ol>
				</div>
			</div>
		</main>
	);
}

function TimelineItem({
	position,
	company,
	time,
	description = '',
	icon = <BsPersonWorkspace />,
}) {
	return (
		<li className='mb-8 ml-6'>
			<span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
				{icon}
			</span>
			<h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
				{position}
			</h3>
			<h4 className='mb-2'>{company}</h4>
			<time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
				{time}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
				{description}
			</p>
		</li>
	);
}
