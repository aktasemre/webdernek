import PhotoGallery from '@/components/gallery/PhotoGallery/PhotoGallery';
import styles from './page.module.scss';

export const metadata = {
  title: 'Fotoğraf Galerisi | Arslandede Köyü',
  description: 'Köyümüzün doğal güzellikleri, etkinlikler ve anılarımız',
};

export default function PhotosPage() {
  return (
    <main className={styles.galleryPage}>
      <div className={styles.hero}>
        <h1>Fotoğraf Galerisi</h1>
        <p>Köyümüzün güzelliklerini ve anılarımızı keşfedin</p>
      </div>
      
      <div className={styles.content}>
        <PhotoGallery />
      </div>
    </main>
  );
} 