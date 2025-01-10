import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import Hero from '@/components/home/Hero/Hero';
import NewsSection from '@/components/home/NewsSection/NewsSection';
import EventCalendar from '@/components/home/EventCalendar/EventCalendar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NewsSection />
        <EventCalendar />
      </main>
      <Footer />
    </>
  );
} 