import GalleryHero from '@/components/gallery/GalleryHero/GalleryHero';
import GalleryCategories from '@/components/gallery/GalleryCategories/GalleryCategories';
import PhotoGallery from '@/components/gallery/PhotoGallery/PhotoGallery';
import styles from './page.module.scss';

export default function Gallery() {
  return (
    <main className={styles.galleryPage}>
      <GalleryHero />
      <div className={styles.content}>
        <GalleryCategories />
        <PhotoGallery />
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Fotoğraf Galerisi | Arslandede Köyü',
  description: 'Arslandede Köyü fotoğraf galerisi - doğal güzellikler, etkinlikler ve daha fazlası',
  keywords: ['galeri', 'fotoğraflar', 'köy fotoğrafları', 'Arslandede'],
  openGraph: {
    title: 'Fotoğraf Galerisi',
    description: 'Arslandede Köyü fotoğraf galerisi',
    images: [
      {
        url: '/images/og-gallery.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
