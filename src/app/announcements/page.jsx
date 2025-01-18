import { FaBullhorn } from 'react-icons/fa';

export const metadata = {
  title: 'Duyurular | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği duyuruları. Önemli duyurular ve güncellemeler.',
  keywords: ['duyurular', 'önemli duyurular', 'güncellemeler'],
};

const announcements = [
  {
    id: 1,
    title: 'Dernek Genel Kurul Toplantısı',
    date: '15 Temmuz 2024',
    content:
      'Derneğimizin yıllık genel kurul toplantısı 15 Temmuz 2024 tarihinde dernek binasında yapılacaktır. Tüm üyelerimizin katılımını bekliyoruz.',
  },
  {
    id: 2,
    title: 'Yeni Yönetim Kurulu Seçildi',
    date: '20 Temmuz 2024',
    content:
      'Derneğimizin yeni yönetim kurulu seçilmiştir. Yeni yönetim kurulumuz şu şekildedir: Başkan - Ali Yılmaz, Başkan Yardımcısı - Ayşe Demir, Sayman - Mehmet Kaya. Yeni yönetim kurulumuza başarılar diliyoruz.',
  },
  // Daha fazla duyuru eklenebilir
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Duyurular</h1>

        <div className="grid gap-8">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaBullhorn className="text-blue-500 text-2xl mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">{announcement.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{announcement.date}</p>
              <p className="text-gray-700">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
