import ProjectDetail from '@/components/projects/ProjectDetail/ProjectDetail';
import projectsData from '@/data/projects.data.json';

export function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    id: project.id.toString()
  }));
}

export function generateMetadata({ params }) {
  const project = projectsData.projects.find(p => p.id.toString() === params.id);
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı'
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: ['projeler', 'köy projeleri', 'dernek projeleri', project.title],
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.projects.find(p => p.id.toString() === params.id);

  if (!project) {
    return <div>Proje bulunamadı.</div>;
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
} 