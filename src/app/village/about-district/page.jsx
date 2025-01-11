import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import AboutDistrictContent from '@/components/village/AboutDistrict/AboutDistrictContent';
import SideMenu from '@/components/common/SideMenu/SideMenu';

export const metadata = {
  title: 'İlçemiz Hakkında',
  description: 'Bayburt Arslandede Köyü ve çevresi hakkında detaylı bilgiler, tarihçe ve coğrafi konum bilgileri.',
  keywords: ['Arslandede Köyü', 'Bayburt', 'İlçe', 'Tarihçe', 'Coğrafya']
}

export default function AboutDistrict() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <div className="content-wrapper">
          <div className="main-content">
            <AboutDistrictContent />
          </div>
          <aside className="side-content">
            <SideMenu />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
} 