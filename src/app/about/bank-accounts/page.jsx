import BankAccountsContent from '@/components/about/BankAccounts/BankAccountsContent';

export const metadata = {
  title: 'Banka Hesaplarımız | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği banka hesapları, aidat ödemeleri ve bağışlar için hesap bilgileri.',
  keywords: ['banka hesapları', 'aidat ödemeleri', 'bağış hesapları', 'ödeme bilgileri'],
};

export default function BankAccountsPage() {
  return (
    <main>
      <BankAccountsContent />
    </main>
  );
} 