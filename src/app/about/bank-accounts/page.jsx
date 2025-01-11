import BankAccountsContent from '../../../components/about/BankAccounts/BankAccountsContent';
import Navbar from '../../../components/common/Navbar/Navbar';
import Footer from '../../../components/common/Footer/Footer';
import SideMenu from '../../../components/common/SideMenu/SideMenu';

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