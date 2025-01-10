import Image from 'next/image';
import styles from './GalleryHero.module.scss';

const GalleryHero = () => {
  return (
    <section className={styles.galleryHero}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/manzara5.jpg"
          alt="Galeri Arka Plan"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.container}>
        <h1>Galeri</h1>
        <p>Köyümüzün güzelliklerini ve anılarımızı keşfedin</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Galeriye Git</button>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero; 