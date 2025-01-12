import { FaCheckCircle, FaClock } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'Projeler | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği projeleri. Tamamlanan ve devam eden projeler.',
  keywords: ['projeler', 'tamamlanan projeler', 'devam eden projeler'],
};

const projects = [
  {
    id: 1,
    title: 'Köy Okulu Renovasyonu',
    description: 'Köy okulumuzun renovasyonu tamamlandı. Öğrencilerimiz artık daha modern ve konforlu sınıflarda eğitim görecek.',
    status: 'completed',
    image: '/images/projects/okul-renovasyonu.jpg',
  },
  {
    id: 2,
    title: 'Köy Meydanı Düzenlemesi',
    description: 'Köy meydanımızın düzenleme çalışmaları devam ediyor. Peyzaj düzenlemesi ve oturma alanları ekleniyor.',
    status: 'inProgress',
    image: '/images/projects/meydan-duzenlemesi.jpg',
  },
  // Daha fazla proje eklenebilir
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Projeler</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 mt-4 mr-4 px-2 py-1 bg-green-500 text-white text-sm rounded-full flex items-center">
                  {project.status === 'completed' ? (
                    <>
                      <FaCheckCircle className="mr-1" />
                      <span>Tamamlandı</span>
                    </>
                  ) : (
                    <>
                      <FaClock className="mr-1" />
                      <span>Devam Ediyor</span>
                    </>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline">
                  Proje Detayları
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
} 