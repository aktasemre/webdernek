'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaDonate, FaUsers, FaPhone } from 'react-icons/fa';
import styles from './Hero.module.scss';
import sliderData from '@/data/slider.data.json';
import { useSwipeHandler } from '@/utils/swipeHandler';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = sliderData.slides;
  
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeHandler(setCurrentSlide, slides.length);

  // Otomatik geçiş için
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) {
    return <div>No slides available</div>; // Hata kontrolü
  }

  return (
    <section 
      className={styles.hero}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider */}
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <Link href={slide.link} className={styles.slideLink}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={75}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
              <div className={styles.content}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </Link>
          </div>
        ))}

        {/* Slider Kontrolleri */}
        <button className={`${styles.control} ${styles.prev}`} onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
          <FaArrowLeft />
        </button>
        <button className={`${styles.control} ${styles.next}`} onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
          <FaArrowRight />
        </button>

        {/* Slider Noktaları */}
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Hızlı Erişim Butonları */}
      <div className={styles.quickAccess}>
        <Link href="/donate" className={styles.quickButton}>
          <FaDonate />
          <span>Bağış Yap</span>
        </Link>
        <Link href="/membership" className={styles.quickButton}>
          <FaUsers />
          <span>Üye Ol</span>
        </Link>
        <Link href="/contact" className={styles.quickButton}>
          <FaPhone />
          <span>İletişim</span>
        </Link>
      </div>
    </section>
  );
}
