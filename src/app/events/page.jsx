import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: 'Etkinlikler | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği etkinlik takvimi. Yaklaşan etkinlikler ve detayları.',
  keywords: ['etkinlikler', 'takvim', 'köy etkinlikleri', 'şenlikler', 'toplantılar'],
};

// Örnek etkinlik verileri
const events = [
  {
    id: 1,
    title: 'Geleneksel Köy Şenliği',
    date: '20 Haziran 2024',
    time: '10:00',
    location: 'Arslandede Köyü Meydanı',
    description: 'Her yıl düzenlediğimiz geleneksel köy şenliğimize tüm köylülerimiz davetlidir.',
    image: '/images/events/senlik.jpg',
  },
  {
    id: 2,
    title: 'Dernek Genel Kurul Toplantısı',
    date: '15 Temmuz 2024',
    time: '14:00',
    location: 'Dernek Binası',
    description: 'Derneğimizin yıllık genel kurul toplantısı yapılacaktır. Tüm üyelerimizin katılımını bekliyoruz.',
    image: '/images/events/toplanti.jpg',
  },
  // Daha fazla etkinlik eklenebilir
];

export default function EventsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Etkinlikler</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h2 className="text-2xl font-semibold">{event.title}</h2>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <FaCalendarAlt />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <FaClock />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Link href={`/events/${event.id}`} className="text-blue-600 hover:underline">
                  Etkinlik Detayları
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 