import { FaTree, FaHandHoldingHeart, FaGraduationCap, FaMosque } from 'react-icons/fa';

export default function DonationForm() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Bağış Yap</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Köyümüzün gelişimi ve ihtiyaç sahiplerine yardım için yapacağınız her bağış, geleceğimize
          yapılan bir yatırımdır.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Ağaçlandırma Projesi */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <FaTree className="text-3xl text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Ağaçlandırma Projesi</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Köyümüzün yeşil alanlarını artırmak ve gelecek nesillere daha güzel bir çevre bırakmak
              için ağaçlandırma çalışmalarına destek olun.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-medium text-gray-700">Ziraat Bankası IBAN:</p>
              <p className="text-green-600 font-mono mt-1">TR12 3456 7890 1234 5678 9012 34</p>
            </div>
          </div>

          {/* Ramazan Kumanyası */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <FaHandHoldingHeart className="text-3xl text-orange-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Ramazan Kumanyası</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Ramazan ayında ihtiyaç sahibi ailelerimize kumanya yardımında bulunarak dayanışmaya
              katkı sağlayın.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-medium text-gray-700">Halk Bankası IBAN:</p>
              <p className="text-orange-600 font-mono mt-1">TR98 7654 3210 9876 5432 1098 76</p>
            </div>
          </div>

          {/* Eğitim Bursu */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaGraduationCap className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Eğitim Bursu</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Köyümüzün başarılı öğrencilerine eğitim bursu sağlayarak geleceğimize yatırım yapın.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-medium text-gray-700">Vakıfbank IBAN:</p>
              <p className="text-blue-600 font-mono mt-1">TR45 6789 0123 4567 8901 2345 67</p>
            </div>
          </div>

          {/* Cami Yardımları */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FaMosque className="text-3xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Cami Yardımları</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Köy camimizin bakım, onarım ve ihtiyaçları için yapılacak yardımlarınızla manevi
              değerlerimize sahip çıkın.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-medium text-gray-700">İş Bankası IBAN:</p>
              <p className="text-purple-600 font-mono mt-1">TR23 4567 8901 2345 6789 0123 45</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">Bağış yaparken açıklama kısmına "Proje Adı" yazmayı unutmayınız.</p>
          <p>
            Sorularınız için:{' '}
            <a href="tel:+905321234567" className="text-green-600 hover:underline">
              0532 123 45 67
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
