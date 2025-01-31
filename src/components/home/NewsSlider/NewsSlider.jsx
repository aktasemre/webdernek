'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import haberlerData from '@/data/haberler.data.json';
import styles from './NewsSlider.module.scss';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const news = haberlerData.haberler.filter(haber => haber.featured); // Sadece öne çıkan haberleri göster

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  if (!news.length) return <div>Haber bulunamadı</div>;

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={styles.navButton}>
        <FaChevronLeft />
      </button>

      <div className={styles.slider}>
        {news.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href={`/news/${item.id}`} className={styles.readMore}>
                Devamını Oku
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button onClick={nextSlide} className={styles.navButton}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default NewsSlider;
