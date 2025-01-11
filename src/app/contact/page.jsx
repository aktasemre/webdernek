import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaUsers, FaPhone, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'İletişim | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği iletişim bilgileri ve sosyal medya hesapları.',
  keywords: ['iletişim', 'dernek iletişim', 'sosyal medya'],
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">İletişim</h1>
        
        {/* Meslek Envanteri Formu */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaUsers className="text-3xl text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Birbirimizi Daha İyi Tanıyalım!</h2>
          </div>
          <div className="prose max-w-none text-gray-600 mb-8">
            <p className="mb-4">
              Değerli Köylülerimiz,
            </p>
            <p className="mb-4">
              Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği olarak, köyümüzün dayanışmasını güçlendirmek 
              ve birbirimizi daha yakından tanımak amacıyla bir Meslek Envanteri Çalışması başlatıyoruz.
            </p>
            <p className="mb-6">
              Köyümüzün farklı mesleklerinden bireyleri bir araya getirmek ve gençlerimize rehberlik sağlamak için 
              sizin de katkılarınızı bekliyoruz.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://forms.gle/apMoxADc2iusKKEP8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg text-lg font-medium"
            >
              Meslek Envanteri Formunu Doldurun
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <FaPhone className="text-2xl text-blue-600" />
                <div>
                  <p className="font-medium text-gray-700">Dernek Başkanı:</p>
                  <a href="tel:+905321234567" className="text-blue-600 hover:underline">0532 123 45 67</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <FaPhone className="text-2xl text-blue-600" />
                <div>
                  <p className="font-medium text-gray-700">Köy Muhtarı:</p>
                  <a href="tel:+905321234568" className="text-blue-600 hover:underline">0532 123 45 68</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <FaEnvelope className="text-2xl text-blue-600" />
                <div>
                  <p className="font-medium text-gray-700">E-posta:</p>
                  <a href="mailto:info@arslandedekoyudernegi.org" className="text-blue-600 hover:underline">
                    info@arslandedekoyudernegi.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sosyal Medya Bağlantıları */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sosyal Medya</h2>
            <div className="space-y-4">
              <a
                href="https://wa.me/905321234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 group hover:shadow-md"
              >
                <FaWhatsapp className="text-3xl text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">WhatsApp ile İletişim</span>
              </a>
              
              <a
                href="https://facebook.com/arslandedekoyudernegi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 group hover:shadow-md"
              >
                <FaFacebook className="text-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">Facebook Sayfamız</span>
              </a>
              
              <a
                href="https://twitter.com/arslandedekoyudernegi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-all duration-300 group hover:shadow-md"
              >
                <FaTwitter className="text-3xl text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">Twitter Hesabımız</span>
              </a>
              
              <a
                href="https://instagram.com/arslandedekoyudernegi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-all duration-300 group hover:shadow-md"
              >
                <FaInstagram className="text-3xl text-pink-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">Instagram Hesabımız</span>
              </a>
              
              <a
                href="https://youtube.com/arslandedekoyudernegi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-all duration-300 group hover:shadow-md"
              >
                <FaYoutube className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">YouTube Kanalımız</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 