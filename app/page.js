import AboutMe from '@/pages/about-me';
import Experience from '@/pages/experience';
import Projects from '@/pages/projects';

export default function Home() {
  return (
    <div>
      <AboutMe />
      <div className='divider'></div>
      <Experience />
      <div className='divider'></div>
      <Projects />
    </div>
  );
}
