import BloodBankContent from '@/components/about/BloodBank/BloodBankContent';

export const metadata = {
  title: 'Kan Bankası | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği kan bankası sistemi, kan bağışı ve ihtiyaç durumları hakkında bilgiler.',
  keywords: ['kan bankası', 'kan bağışı', 'acil kan ihtiyacı', 'kan grubu'],
};

export default function BloodBankPage() {
  return (
    <main>
      <BloodBankContent />
    </main>
  );
} 