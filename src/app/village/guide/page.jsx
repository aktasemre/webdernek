import { FaMapMarkerAlt, FaPhone, FaBus } from 'react-icons/fa';

export const metadata = {
  title: 'Köy Rehberi | Arslandede Köyü',
  description: 'Arslandede Köyü rehberi. Önemli mekanlar ve ulaşım bilgileri.',
  keywords: ['köy rehberi', 'önemli mekanlar', 'ulaşım bilgileri'],
};

const locations = [
  {
    name: 'Köy Konağı',
    description: 'Köy konağımız, toplantılar ve etkinlikler için kullanılmaktadır.',
    address: 'Arslandede Köyü Meydanı',
    phone: '0364 123 45 67',
  },
  {
    name: 'Köy Camii',
    description: 'Köyümüzün camii, ibadet ve dini etkinlikler için hizmet vermektedir.',
    address: 'Arslandede Köyü Camii Sokak',
    phone: '0364 987 65 43',
  },
  {
    name: 'Köy Okulu',
    description: 'Köy okulumuz, öğrencilerimize modern ve kaliteli eğitim sunmaktadır.',
    address: 'Arslandede Köyü Okul Sokak',
    phone: '0364 456 78 90',
  },
  // Daha fazla mekan eklenebilir
];

const transportation = [
  {
    type: 'Otobüs',
    description:
      "Köyümüze Osmancık'tan günde 3 sefer otobüs kalkmaktadır. Sefer saatleri: 08:00, 13:00, 18:00",
  },
  {
    type: 'Minibüs',
    description:
      "Köyümüze Osmancık'tan günde 6 sefer minibüs kalkmaktadır. Sefer saatleri: 07:00, 09:00, 11:00, 13:00, 15:00, 17:00",
  },
  // Daha fazla ulaşım bilgisi eklenebilir
];

export default function VillageGuidePage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Köy Rehberi</h1>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Önemli Mekanlar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-red-500 text-2xl mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{location.name}</h3>
                </div>
                <p className="text-gray-700 mb-4">{location.description}</p>
                <div className="flex items-center text-gray-600 mb-1">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhone className="mr-2" />
                  <span>{location.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ulaşım</h2>
          <div className="space-y-6">
            {transportation.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaBus className="text-blue-500 text-2xl mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{item.type}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
