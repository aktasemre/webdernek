import ProjectDetail from '@/components/projects/ProjectDetail/ProjectDetail';
import projelerData from '@/data/projeler.data.json';
import PropTypes from 'prop-types';

export async function generateStaticParams() {
  if (!projelerData?.projeler) {
    console.error('Projeler verisi bulunamadı');
    return [];
  }

  return projelerData.projeler.map((proje) => ({
    id: proje.id.toString(),
  }));
}

export function generateMetadata({ params }) {
  const project = projelerData.projeler.find((p) => p.id.toString() === params.id);

  if (!project) {
    return {
      title: 'Proje Bulunamadı',
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: ['projeler', 'köy projeleri', 'dernek projeleri', project.title],
  };
}

export default function ProjectDetailPage({ params }) {
  if (!projelerData?.projeler) {
    return <div>Proje verisi yüklenemedi</div>;
  }

  const project = projelerData.projeler.find((p) => p.id.toString() === params.id);

  if (!project) {
    return <div>Proje bulunamadı</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      {/* Diğer proje detayları */}
    </div>
  );
}

ProjectDetailPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
