import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import Hero from '@/components/home/Hero/Hero';
import NewsSection from '@/components/home/NewsSection/NewsSection';
import EventCalendar from '@/components/home/EventCalendar/EventCalendar';
import SideMenu from '@/components/common/SideMenu/SideMenu';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Hero />
        <div className="content-wrapper">
          <div className="main-content">
            <NewsSection />
            <EventCalendar />
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