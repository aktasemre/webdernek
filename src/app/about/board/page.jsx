import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import SideMenu from '@/components/common/SideMenu/SideMenu';
import BoardContent from '@/components/about/Board/BoardContent';

export const metadata = {
  title: 'Yönetim Kurulu',
  description: 'Bayburt Arslandede Köyü Derneği yönetim kurulu üyeleri ve görevleri.',
  keywords: ['Yönetim Kurulu', 'Dernek Yönetimi', 'Arslandede Köyü']
}

export default function Board() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <div className="content-wrapper">
          <div className="main-content">
            <BoardContent />
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