import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import ProjectHero from '@/components/projects/ProjectHero/ProjectHero';
import ProjectList from '@/components/projects/ProjectList/ProjectList';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero />
        <ProjectList />
      </main>
      <Footer />
    </>
  );
} 