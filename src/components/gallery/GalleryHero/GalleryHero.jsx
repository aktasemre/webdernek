import Image from 'next/image';
import styles from './GalleryHero.module.scss';

const GalleryHero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/arslandede1.jpg" 
        alt="Arslandede Köyü Galeri Görseli"
        fill
        className={styles.heroImage}
        priority
        quality={75}
        sizes="100vw"
      />
      <div className={styles.content}>
        <h1>Fotoğraf Galerisi</h1>
        <p>Arslandede Köyü'nün güzelliklerini keşfedin</p>
      </div>
    </div>
  );
};

export default GalleryHero; 