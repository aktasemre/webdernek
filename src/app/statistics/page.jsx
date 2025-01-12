import { FaChartBar, FaChartPie, FaUsers } from 'react-icons/fa';

export const metadata = {
  title: 'İstatistikler | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği istatistikleri. Bağışlar, yapılan yardımlar ve üye sayıları.',
  keywords: ['istatistikler', 'bağışlar', 'yardımlar', 'üye sayıları'],
};

const statistics = {
  totalDonations: 50000,
  totalAssistance: 30000,
  totalMembers: 250,
  donationsByCategory: [
    { category: 'Eğitim', amount: 20000 },
    { category: 'Sağlık', amount: 15000 },
    { category: 'Altyapı', amount: 10000 },
    { category: 'Diğer', amount: 5000 },
  ],
  assistanceByCategory: [
    { category: 'Öğrenci Bursları', amount: 15000 },
    { category: 'Aile Yardımları', amount: 10000 },
    { category: 'Diğer', amount: 5000 },
  ],
};

export default function StatisticsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">İstatistikler</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaChartBar className="text-blue-500 text-4xl mr-4" />
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Toplam Bağışlar</p>
              <p className="text-3xl font-semibold text-gray-800">{statistics.totalDonations} TL</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaChartPie className="text-green-500 text-4xl mr-4" />
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Yapılan Yardımlar</p>
              <p className="text-3xl font-semibold text-gray-800">{statistics.totalAssistance} TL</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <FaUsers className="text-yellow-500 text-4xl mr-4" />
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Toplam Üye Sayısı</p>
              <p className="text-3xl font-semibold text-gray-800">{statistics.totalMembers}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bağışlar</h2>
            <div className="space-y-4">
              {statistics.donationsByCategory.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <p className="text-gray-700">{item.category}</p>
                  <p className="text-gray-900 font-semibold">{item.amount} TL</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yapılan Yardımlar</h2>
            <div className="space-y-4">
              {statistics.assistanceByCategory.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <p className="text-gray-700">{item.category}</p>
                  <p className="text-gray-900 font-semibold">{item.amount} TL</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
} 