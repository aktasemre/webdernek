export const metadata = {
  title: 'Kan Bankası | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği kan bankası bilgileri ve kan bağışı.',
  keywords: ['kan bankası', 'kan bağışı', 'dernek kan bankası'],
};

export default function BloodBank() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Kan Bankası</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Kan Bağışı Hakkında</h2>
          <p className="text-gray-700 mb-4">
            Derneğimiz, köyümüz ve çevre köylerdeki kan ihtiyacı olan vatandaşlarımıza yardımcı olmak amacıyla kan bankası hizmeti vermektedir.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">İletişim</h2>
          <p className="text-gray-700">Acil kan ihtiyacı için: 0532 123 45 67</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Kan Grupları</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>A Rh+</li>
            <li>A Rh-</li>
            <li>B Rh+</li>
            <li>B Rh-</li>
            <li>AB Rh+</li>
            <li>AB Rh-</li>
            <li>0 Rh+</li>
            <li>0 Rh-</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 