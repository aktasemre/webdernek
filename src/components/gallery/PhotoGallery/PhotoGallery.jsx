'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PhotoGallery.module.scss';
import galleryData from '@/data/gallery.data.json';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = galleryData.categories;

  const filteredPhotos = selectedCategory === 'all' 
    ? galleryData.photos
    : galleryData.photos.filter(photo => photo.category === selectedCategory);

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
    setSelectedPhoto(filteredPhotos[currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1]);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
    setSelectedPhoto(filteredPhotos[currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentIndex]);

  return (
    <section className={styles.photoGalleryContainer}>
        <h1>Fotoğraf Galerisi</h1>
      <div className={styles.photoCategories}>
        <button
          className={`${styles.photoCategoryButton} ${selectedCategory === 'all' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          Tümü
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.photoCategoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className={styles.photoGrid}>
        {filteredPhotos.map((photo, index) => (
                <div 
                  key={photo.id} 
                  className={styles.photoCard}
            onClick={() => handlePhotoClick(photo, index)}
                >
            <div className={styles.photoImageContainer}>
                    <Image
                      src={photo.image}
                      alt={photo.title}
                width={600}
                height={400}
                priority={index < 4}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className={styles.photoImage}
              />
            </div>
            <div className={styles.photoInfo}>
                      <h3>{photo.title}</h3>
              {photo.description && <p>{photo.description}</p>}
              {photo.tags && photo.tags.length > 0 && (
                <div className={styles.photoTags}>
                  {photo.tags.map(tag => (
                    <span key={tag} className={styles.photoTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className={styles.photoModal} onClick={handleClose}>
          <div className={styles.photoModalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.photoModalImageContainer}>
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 800px"
                className={styles.photoModalImage}
                priority
              />
            </div>
            <div className={styles.photoModalInfo}>
              <h3>{selectedPhoto.title}</h3>
              {selectedPhoto.description && <p>{selectedPhoto.description}</p>}
              {selectedPhoto.tags && selectedPhoto.tags.length > 0 && (
                <div className={styles.photoTags}>
                  {selectedPhoto.tags.map(tag => (
                    <span key={tag} className={styles.photoTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button className={styles.photoModalClose} onClick={handleClose}>
              ✕
            </button>
            <button className={`${styles.photoModalNav} ${styles.prev}`} onClick={handlePrevious}>
              ←
            </button>
            <button className={`${styles.photoModalNav} ${styles.next}`} onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery; 