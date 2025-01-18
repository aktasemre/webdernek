'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useSwipeHandler from '@/hooks/useSwipeHandler';
import styles from './NewsSlider.module.scss';
import haberlerData from '@/data/haberler.data.json';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderHaberler = haberlerData.haberler || [];

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeHandler(
    setCurrentSlide,
    sliderHaberler.length,
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderHaberler.length);
  }, [sliderHaberler.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderHaberler.length) % sliderHaberler.length);
  }, [sliderHaberler.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!sliderHaberler || sliderHaberler.length === 0) {
    return (
      <div className={styles.noNews}>
        <p>Henüz haber bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div
      className={styles.sliderContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevButton}`}>
        <FaChevronLeft />
      </button>

      <div className={styles.slider}>
        {sliderHaberler.map((haber, index) => (
          <div
            key={haber.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={haber.image}
                alt={haber.title}
                width={800}
                height={400}
                style={{ objectFit: 'cover' }}
                priority={index === currentSlide}
              />
            </div>
            <div className={styles.content}>
              <h3>{haber.title}</h3>
              <p>{haber.summary}</p>
              <div className={styles.meta}>
                <time dateTime={haber.date}>
                  {new Date(haber.date).toLocaleDateString('tr-TR')}
                </time>
                <Link href={`/news/${haber.id}`} className={styles.readMore}>
                  Devamını Oku
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextButton}`}>
        <FaChevronRight />
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
