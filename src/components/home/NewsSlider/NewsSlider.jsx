'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './NewsSlider.module.scss';
import newsData from '@/data/news.data.json';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const news = newsData.news;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [news.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  if (!news || news.length === 0) {
    return (
      <div className={styles.sliderContainer}>
        <div className={styles.noNews}>
          <h3>Henüz haber bulunmamaktadır</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sliderContainer}>
      {news.map((item, index) => (
        <Link
          key={item.id}
          href={item.link}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={400}
              priority={index === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.textContent}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span className={styles.date}>
              {new Date(item.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </Link>
      ))}

      {/* Slider Kontrolleri */}
      <button className={`${styles.control} ${styles.prev}`} onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className={`${styles.control} ${styles.next}`} onClick={nextSlide}>
        <FaArrowRight />
      </button>

      {/* Slider Noktaları */}
      <div className={styles.dots}>
        {news.map((_, index) => (
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