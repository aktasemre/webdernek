'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './NewsSlider.module.scss';
import haberlerData from '@/data/haberler.data.json';
import { useSwipeHandler } from '@/utils/swipeHandler';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Veri kontrolü ekleyelim
  if (!haberlerData?.haberler || haberlerData.haberler.length === 0) {
    return (
      <div className={styles.sliderContainer}>
        <div className={styles.noNews}>
          <h3>Henüz haber bulunmamaktadır</h3>
        </div>
      </div>
    );
  }

  // Haberleri tarihe göre sırala ve ilk 4'ünü al
  const sliderHaberler = haberlerData.haberler
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderHaberler.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderHaberler.length) % sliderHaberler.length);
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeHandler(setCurrentSlide, sliderHaberler.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const imageUrl = `https://source.unsplash.com/1600x900/?news,journalism`;

  if (sliderHaberler.length === 0) {
    return <div>No news available</div>;
  }

  return (
    <div 
      className={styles.sliderContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {sliderHaberler.map((haber, index) => (
        <Link
          key={haber.id}
          href={`/news/${haber.id}`}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          passHref
        >
          <div className={styles.imageContainer}>
            <Image
              src={haber.image || 'https://picsum.photos/800/400'}
              alt={haber.title}
              width={800}
              height={400}
              priority={index === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.textContent}>
            <h3>{haber.title}</h3>
            <p>{haber.summary}</p>
            <span className={styles.date}>
              {new Date(haber.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </Link>
      ))}

      <button className={`${styles.control} ${styles.prev}`} onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className={`${styles.control} ${styles.next}`} onClick={nextSlide}>
        <FaArrowRight />
      </button>

      <div className={styles.dots}>
        {sliderHaberler.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSlider; 