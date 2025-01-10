import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import GalleryHero from '@/components/gallery/GalleryHero/GalleryHero';
import GalleryCategories from '@/components/gallery/GalleryCategories/GalleryCategories';

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryCategories />
      </main>
      <Footer />
    </>
  );
} 