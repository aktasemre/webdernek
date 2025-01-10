'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import styles from './PhotoGallery.module.scss';

const photos = [
  // Kış Fotoğrafları
  {
    id: 1,
    title: 'Kış Manzarası 1',
    description: 'Arslandede Köyü kış manzarası',
    image: '/images/kis1.jpg',
    category: 'Kış'
  },
  {
    id: 2,
    title: 'Kış Manzarası 2',
    description: 'Karlı bir günde köyümüz',
    image: '/images/kis2.jpg',
    category: 'Kış'
  },
  {
    id: 3,
    title: 'Kış Manzarası 3',
    description: 'Kış mevsiminde köy yolları',
    image: '/images/kis3.jpg',
    category: 'Kış'
  },
  {
    id: 4,
    title: 'Kış Manzarası 4',
    description: 'Kar altında köy evleri',
    image: '/images/kis4.jpg',
    category: 'Kış'
  },
  {
    id: 5,
    title: 'Kış Manzarası 5',
    description: 'Kış güzelliği',
    image: '/images/kis5.jpg',
    category: 'Kış'
  },
  // Manzara Fotoğrafları
  {
    id: 6,
    title: 'Köy Manzarası 1',
    description: 'Arslandede Köyü genel görünüm',
    image: '/images/manzara1.jpg',
    category: 'Manzara'
  },
  {
    id: 7,
    title: 'Köy Manzarası 2',
    description: 'Köyümüzün doğal güzellikleri',
    image: '/images/manzara2.jpg',
    category: 'Manzara'
  },
  {
    id: 8,
    title: 'Köy Manzarası 3',
    description: 'Yeşil vadilerimiz',
    image: '/images/manzara3.jpg',
    category: 'Manzara'
  },
  {
    id: 9,
    title: 'Köy Manzarası 4',
    description: 'Dağların arasındaki köyümüz',
    image: '/images/manzara4.jpg',
    category: 'Manzara'
  },
  {
    id: 10,
    title: 'Köy Manzarası 5',
    description: 'Gün batımında köyümüz',
    image: '/images/manzara5.jpg',
    category: 'Manzara'
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'Kış', 'Manzara'];

  const filteredPhotos = selectedCategory === 'Tümü' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={styles.photoGallery}>
      <div className={styles.container}>
        <h1>Fotoğraf Galerisi</h1>
        
        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className={styles.photoCard}
              onClick={() => openLightbox(photo)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={400}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.overlay}>
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeButton} onClick={closeLightbox}>
            <FaTimes />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              width={1200}
              height={800}
              style={{ objectFit: "contain" }}
            />
            <div className={styles.photoInfo}>
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery; 