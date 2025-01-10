import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import ProjectDetail from '@/components/projects/ProjectDetail/ProjectDetail';

export default function ProjectDetailPage({ params }) {
  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail id={params.id} />
      </main>
      <Footer />
    </>
  );
} 