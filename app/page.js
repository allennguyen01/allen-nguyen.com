import AboutMe from '@/pages/about-me';
import Experience from '@/pages/experience';
import Projects from '@/pages/projects';

export default function Home() {
  return (
    <div>
      <AboutMe />
      <hr
        className='my-8 border-slate-700 dark:border-slate-600 border-b-2'
        id='experiences'
      />
      <Experience />
      <hr
        className='my-8 border-slate-700 dark:border-slate-600 border-b-2'
        id='projects'
      />
      <Projects />
    </div>
  );
}
