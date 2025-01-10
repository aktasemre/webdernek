import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import AboutDistrictContent from '@/components/village/AboutDistrict/AboutDistrictContent';

export default function AboutDistrict() {
  return (
    <>
      <Navbar />
      <main>
        <AboutDistrictContent />
      </main>
      <Footer />
    </>
  );
} 