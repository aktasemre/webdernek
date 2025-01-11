import { FaCalendar, FaUser, FaTag } from 'react-icons/fa';

export const metadata = {
  title: 'Haberler | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği güncel haberler ve duyurular.',
  keywords: ['haberler', 'duyurular', 'etkinlikler'],
};

const newsItems = [
  {
    id: 1,
    title: 'Köy Meydanı Düzenleme Projesi Başladı',
    date: '15 Mart 2024',
    author: 'Dernek Yönetimi',
    category: 'Projeler',
    image: '/images/news/project.jpg',
    summary: 'Köyümüzün meydanını güzelleştirmek için başlattığımız proje kapsamında çalışmalar başladı.',
  },
  {
    id: 2,
    title: 'Ramazan Ayı Yardım Kampanyası',
    date: '10 Mart 2024',
    author: 'Yardım Komisyonu',
    category: 'Yardım',
    image: '/images/news/ramadan.jpg',
    summary: 'Ramazan ayı münasebetiyle ihtiyaç sahibi ailelerimize yardım kampanyası başlattık.',
  },
  // Daha fazla haber eklenebilir
];

export default function NewsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Haberler</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={news.image}
                  alt={news.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-4">{news.summary}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-500" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-blue-500" />
                    <span>{news.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTag className="text-blue-500" />
                    <span>{news.category}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sayfalama */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 text-gray-700">
            Önceki
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-lg shadow hover:shadow-md transition-all duration-300 text-white">
            1
          </button>
          <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 text-gray-700">
            2
          </button>
          <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 text-gray-700">
            Sonraki
          </button>
        </div>
      </div>
    </main>
  );
} 