import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaClipboardList } from 'react-icons/fa';
import { getData } from '@/utils/data';

export const metadata = {
  title: 'İletişim',
  description: 'Arslandede Köyü Derneği iletişim bilgileri',
  keywords: ['iletişim', 'adres', 'telefon', 'e-posta', 'sosyal medya']
};

export default function ContactPage() {
  const { phone, email, address } = getData('contact');
  const social = getData('social');
  const forms = getData('forms');

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">İletişim</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Derneğimiz ile ilgili her konuda bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        {/* Ana İletişim Kartları */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Telefon */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaPhone className="text-green-600 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Telefon</h2>
            </div>
            <div className="space-y-3">
              <a href={`tel:${phone.president}`} className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <span className="font-medium">Dernek Başkanı:</span>
                <span className="ml-2">{phone.president}</span>
              </a>
              <a href={`tel:${phone.muhtar}`} className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <span className="font-medium">Köy Muhtarı:</span>
                <span className="ml-2">{phone.muhtar}</span>
              </a>
            </div>
          </div>

          {/* E-posta */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">E-posta</h2>
            </div>
            <a 
              href={`mailto:${email}`} 
              className="text-gray-600 hover:text-blue-600 transition-colors break-all"
            >
              {email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <FaWhatsapp className="text-emerald-600 text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">WhatsApp</h2>
            </div>
            <a 
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <span>WhatsApp üzerinden mesaj gönderin</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sosyal Medya ve Meslek Envanteri */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sosyal Medya */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sosyal Medya Hesaplarımız</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <FaFacebook className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700">Facebook</span>
              </a>
              
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors group"
              >
                <FaTwitter className="text-2xl text-sky-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700">Twitter</span>
              </a>
              
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors group"
              >
                <FaInstagram className="text-2xl text-pink-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700">Instagram</span>
              </a>
              
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors group"
              >
                <FaYoutube className="text-2xl text-red-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700">YouTube</span>
              </a>
            </div>
          </div>

          {/* Meslek Envanteri */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-100 p-2 rounded-full">
                <FaClipboardList className="text-indigo-600 text-lg" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Meslek Envanteri</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Köyümüzün meslek haritasını çıkarmak ve gençlerimize yol göstermek amacıyla başlattığımız çalışmaya katılımınızı bekliyoruz.
            </p>
            <div className="flex justify-start">
              <a
                href={forms.professionInventory}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <FaClipboardList className="text-sm" />
                Formu Doldur
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Form doldurmak yaklaşık 5 dakika sürmektedir.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 