export const metadata = {
  title: 'Banka Hesapları | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği banka hesap bilgileri.',
  keywords: ['banka hesapları', 'dernek hesapları'],
};

export default function BankAccounts() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Banka Hesapları</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Ziraat Bankası</h2>
          <p className="text-gray-700">IBAN: TR12 3456 7890 1234 5678 9012 34</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Halk Bankası</h2>
          <p className="text-gray-700">IBAN: TR98 7654 3210 9876 5432 1098 76</p>
        </div>
      </div>
    </main>
  );
} 