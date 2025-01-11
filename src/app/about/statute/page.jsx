import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import SideMenu from '@/components/common/SideMenu/SideMenu';
import StatuteContent from '@/components/about/Statute/StatuteContent';

export const metadata = {
  title: 'Derneğimizin Tüzüğü',
  description: 'Bayburt Arslandede Köyü Derneği tüzüğü ve yasal düzenlemeleri.',
  keywords: ['Dernek Tüzüğü', 'Arslandede Köyü', 'Dernek Kuralları', 'Yasal Düzenlemeler']
}

export default function Statute() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <div className="content-wrapper">
          <div className="main-content">
            <StatuteContent />
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