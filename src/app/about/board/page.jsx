import BoardContent from '@/components/about/Board/BoardContent.jsx';
import Navbar from '@/components/common/Navbar/Navbar.jsx';
import Footer from '@/components/common/Footer/Footer.jsx';
import SideMenu from '@/components/common/SideMenu/SideMenu.jsx';

export const metadata = {
  title: 'Yönetim Kurulu',
  description: 'Bayburt Arslandede Köyü Derneği yönetim kurulu üyeleri ve görevleri.',
  keywords: ['Yönetim Kurulu', 'Dernek Yönetimi', 'Arslandede Köyü']
}

export default function Board() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <SideMenu />
        <BoardContent />
      </div>
      <Footer />
    </main>
  );
} 