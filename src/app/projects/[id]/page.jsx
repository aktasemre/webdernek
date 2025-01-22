import { getProjeler } from '@/data';
import PropTypes from 'prop-types';

export async function generateStaticParams() {
  const projects = await getProjeler();
  if (!projects) {
    console.error('Projeler verisi bulunamadı');
    return [];
  }

  return projects.map((proje) => ({
    id: proje.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const projects = await getProjeler();
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return {
      title: 'Proje Bulunamadı',
      description: 'Aradığınız proje bulunamadı.',
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: ['projeler', 'köy projeleri', 'dernek projeleri', project.title],
  };
}

export default async function ProjectDetailPage({ params }) {
  const projects = await getProjeler();
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return <div>Proje bulunamadı</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="prose max-w-none">
        {project.description}
      </div>
    </div>
  );
}

ProjectDetailPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
