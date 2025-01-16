import React from 'react';
import Image from 'next/image';
import styles from './GalleryHero.module.scss';

const GalleryHero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/manzara1.jpg"
        alt="Arslandede Köyü Galeri Görseli"
        fill
        priority
        style={{ objectFit: "cover" }}
        className={styles.heroImage}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>Fotoğraf Galerisi</h1>
        <p>Arslandede Köyü'nün güzelliklerini keşfedin</p>
      </div>
    </div>
  );
};

export default GalleryHero; 