import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import PhotoGallery from '@/components/gallery/PhotoGallery/PhotoGallery';

export default function Photos() {
  return (
    <>
      <Navbar />
      <main>
        <PhotoGallery />
      </main>
      <Footer />
    </>
  );
} 