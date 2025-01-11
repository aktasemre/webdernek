export default function EmekForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Birbirimizi Daha İyi Tanıyalım!</h2>
      <div className="prose max-w-none text-gray-700">
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
        <div className="flex justify-center">
          <a
            href="https://forms.gle/apMoxADc2iusKKEP8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Formu Doldurun
          </a>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          Lütfen bu formu tanıdıklarınızla paylaşıp bize destek olun.
        </p>
      </div>
    </div>
  );
} 