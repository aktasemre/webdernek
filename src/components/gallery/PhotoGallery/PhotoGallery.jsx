'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import Masonry from 'react-masonry-css';
import styles from './PhotoGallery.module.scss';
import galleryData from '@/data/gallery.data.json';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = [...new Set(galleryData.photos.map(photo => photo.category))];
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const breakpointColumns = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1
  };

  const getPhotosByCategory = (category) => {
    return galleryData.photos.filter(photo => photo.category === category);
  };

  const scrollSlider = useCallback((categoryId, direction) => {
    const slider = document.querySelector(`#slider-${categoryId}`);
    const scrollAmount = slider.clientWidth * 0.8;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    
    let newScroll;
    if (direction === 'left') {
      newScroll = slider.scrollLeft - scrollAmount;
    } else {
      newScroll = slider.scrollLeft + scrollAmount;
    }
    
    slider.scrollTo({
      left: Math.max(0, Math.min(newScroll, maxScroll)),
      behavior: 'smooth'
    });
  }, []);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (!selectedPhoto) return;
    
    switch(e.key) {
      case 'ArrowLeft':
        navigatePhotos('prev');
        break;
      case 'ArrowRight':
        navigatePhotos('next');
        break;
      case 'Escape':
        setSelectedPhoto(null);
        break;
    }
  }, [selectedPhoto]);

  const navigatePhotos = (direction) => {
    const photos = getPhotosByCategory(selectedPhoto.category);
    const currentIdx = photos.findIndex(p => p.id === selectedPhoto.id);
    let newIdx;
    
    if (direction === 'prev') {
      newIdx = currentIdx > 0 ? currentIdx - 1 : photos.length - 1;
    } else {
      newIdx = currentIdx < photos.length - 1 ? currentIdx + 1 : 0;
    }
    
    setSelectedPhoto(photos[newIdx]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className={styles.photoGallery}>
      <div className={styles.container}>
        <h1>Fotoğraf Galerisi</h1>

        {categories.map(category => (
          <div key={category} className={styles.categorySection}>
            <h2>{category}</h2>
            <Masonry
              breakpointCols={breakpointColumns}
              className={styles.myMasonryGrid}
              columnClassName={styles.myMasonryGridColumn}
            >
              {getPhotosByCategory(category).map((photo, index) => (
                <div 
                  key={photo.id} 
                  className={styles.photoCard}
                  style={{ '--index': index }}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 480px) 180px,
                              (max-width: 768px) 220px,
                              (max-width: 1200px) 260px,
                              300px"
                      className={styles.image}
                      priority={index === 0}
                      loading="lazy"
                    />
                    <div className={styles.overlay}>
                      <h3>{photo.title}</h3>
                      <p>{photo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={closeLightbox}
        index={lightboxIndex}
        slides={galleryData.photos.map(photo => ({
          src: photo.image,
          alt: photo.title,
          title: photo.title,
          description: photo.description
        }))}
        plugins={[Zoom]}
      />

      {selectedPhoto && (
        <div className={styles.lightbox} onClick={() => setSelectedPhoto(null)}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <Image
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              width={1200}
              height={800}
              className={styles.lightboxImage}
            />
            <div className={styles.navButtons}>
              <button onClick={() => navigatePhotos('prev')}>
                <FaArrowLeft />
              </button>
              <button onClick={() => navigatePhotos('next')}>
                <FaArrowRight />
              </button>
            </div>
            <div className={styles.photoInfo}>
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
            </div>
            <div className={styles.keyboardHint}>
              Klavye ile gezinmek için ← → tuşlarını kullanın
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery; 