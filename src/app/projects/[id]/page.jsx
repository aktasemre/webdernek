import ProjectDetail from '@/components/projects/ProjectDetail/ProjectDetail';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

export const metadata = {
  title: 'Proje Detayı | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği proje detayları ve gelişmeleri.',
  keywords: ['projeler', 'köy projeleri', 'dernek projeleri'],
};

export default function ProjectDetailPage({ params }) {
  return (
    <main>
      <ProjectDetail id={params.id} />
    </main>
  );
} 