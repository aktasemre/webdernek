import PhotoGallery from '@/components/gallery/PhotoGallery/PhotoGallery';
import GalleryHero from '@/components/gallery/GalleryHero/GalleryHero';

export const metadata = {
  title: 'Fotoğraf Galerisi | Arslandede Köyü',
  description: 'Köyümüzün doğal güzellikleri, etkinlikler ve anılarımız',
};

export default function PhotosPage() {
  return (
    <main>
      <GalleryHero />
      <PhotoGallery />
    </main>
  );
}
