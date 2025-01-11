import BloodBankContent from '@/components/about/BloodBank/BloodBankContent.jsx';
import Navbar from '@/components/common/Navbar/Navbar.jsx';
import Footer from '@/components/common/Footer/Footer.jsx';
import SideMenu from '@/components/common/SideMenu/SideMenu.jsx';

export const metadata = {
  title: 'Kan Bankası | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği kan bankası sistemi, kan bağışı ve ihtiyaç durumları hakkında bilgiler.',
  keywords: ['kan bankası', 'kan bağışı', 'acil kan ihtiyacı', 'kan grubu'],
};

export default function BloodBank() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <SideMenu />
        <BloodBankContent />
      </div>
      <Footer />
    </main>
  );
} 