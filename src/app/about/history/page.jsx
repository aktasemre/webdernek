import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import SideMenu from '@/components/common/SideMenu/SideMenu';
import HistoryContent from '@/components/about/History/HistoryContent';

export const metadata = {
  title: 'Derneğimizin Tarihçesi',
  description: 'Bayburt Arslandede Köyü Derneğinin kuruluşundan bugüne tarihçesi ve gelişimi.',
  keywords: ['Dernek Tarihçesi', 'Arslandede Köyü', 'Dernek Tarihi', 'Kuruluş']
}

export default function History() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <div className="content-wrapper">
          <div className="main-content">
            <HistoryContent />
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