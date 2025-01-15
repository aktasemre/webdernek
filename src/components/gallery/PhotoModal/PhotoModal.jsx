'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import styles from './PhotoModal.module.scss';

const PhotoModal = ({ 
  photo, 
  onClose, 
  onNavigate,
  isOpen 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!photo) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className={styles.imageContainer}>
          <Image
            src={photo.image}
            alt={photo.title}
            width={1200}
            height={800}
            className={styles.image}
          />
        </div>

        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={() => onNavigate('prev')}
        >
          <FaArrowLeft />
        </button>
        
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={() => onNavigate('next')}
        >
          <FaArrowRight />
        </button>

        <div className={styles.content}>
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
        </div>
      </div>
    </>
  );
};

export default PhotoModal; 