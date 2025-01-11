import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import ProjectHero from '@/components/projects/ProjectHero/ProjectHero';
import ProjectList from '@/components/projects/ProjectList/ProjectList';
import SideMenu from '@/components/common/SideMenu/SideMenu';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <ProjectHero />
        <div className="content-wrapper">
          <div className="main-content">
            <ProjectList />
          </div>
          <aside className="side-content">
            <SideMenu />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
} 