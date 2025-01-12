import { FaNewspaper, FaFolder, FaCalendarAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Arama Sonuçları | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği web sitesinde arama sonuçları.',
  keywords: ['arama', 'sonuçlar', 'haberler', 'projeler', 'etkinlikler'],
};

// Örnek arama sonuçları
const mockSearchResults = {
  news: [
    {
      id: 1,
      title: 'Köy Meydanı Düzenleme Projesi Başladı',
      date: '15 Mart 2024',
      category: 'Projeler',
      summary: 'Köyümüzün meydanını güzelleştirmek için başlattığımız proje kapsamında çalışmalar başladı.',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Köy Meydanı Düzenleme Projesi',
      startDate: '15 Mart 2024',
      status: 'Devam Ediyor',
      summary: 'Köyümüzün meydanını modern ve estetik bir görünüme kavuşturmayı hedefliyoruz.',
    },
  ],
  events: [
    {
      id: 1,
      title: 'Geleneksel Köy Şenliği',
      date: '20 Haziran 2024',
      location: 'Arslandede Köyü Meydanı',
      summary: 'Her yıl düzenlediğimiz geleneksel köy şenliğimize tüm köylülerimiz davetlidir.',
    },
  ],
};

export default async function SearchPage({ searchParams }) {
  const query = searchParams?.q || '';
  const searchResults = mockSearchResults; // Gerçek uygulamada burada API çağrısı yapılabilir

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          &quot;{query}&quot; için Arama Sonuçları
        </h1>

        {/* Haberler */}
        {searchResults.news.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaNewspaper className="text-blue-500" />
              <span>Haberler</span>
            </h2>
            <ul className="space-y-4">
              {searchResults.news.map((news) => (
                <li key={news.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-2">{news.summary}</p>
                  <div className="text-sm text-gray-500">
                    <span>{news.date}</span> - <span>{news.category}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Projeler */}
        {searchResults.projects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaFolder className="text-green-500" />
              <span>Projeler</span>
            </h2>
            <ul className="space-y-4">
              {searchResults.projects.map((project) => (
                <li key={project.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.summary}</p>
                  <div className="text-sm text-gray-500">
                    <span>Başlangıç: {project.startDate}</span> - <span>Durum: {project.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Etkinlikler */}
        {searchResults.events.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-red-500" />
              <span>Etkinlikler</span>
            </h2>
            <ul className="space-y-4">
              {searchResults.events.map((event) => (
                <li key={event.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.summary}</p>
                  <div className="text-sm text-gray-500">
                    <span>{event.date}</span> - <span>{event.location}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Sonuç bulunamadı */}
        {searchResults.news.length === 0 && searchResults.projects.length === 0 && searchResults.events.length === 0 && (
          <p className="text-center text-gray-600">
            Aradığınız kelimeye uygun sonuç bulunamadı.
          </p>
        )}
      </div>
    </main>
  );
}