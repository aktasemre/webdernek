import BankAccountsContent from '@/components/about/BankAccounts/BankAccountsContent.jsx';
import Navbar from '@/components/common/Navbar/Navbar.jsx';
import Footer from '@/components/common/Footer/Footer.jsx';
import SideMenu from '@/components/common/SideMenu/SideMenu.jsx';

export const metadata = {
  title: 'Banka Hesaplarımız | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği banka hesapları, aidat ödemeleri ve bağışlar için hesap bilgileri.',
  keywords: ['banka hesapları', 'aidat ödemeleri', 'bağış hesapları', 'ödeme bilgileri'],
};

export default function BankAccounts() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <SideMenu />
        <BankAccountsContent />
      </div>
      <Footer />
    </main>
  );
} 