'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { newsService } from '@/services/api';
import styles from './NewsSlider.module.scss';

const NewsSlider = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsService.getAllNews();
        // API response yapısını kontrol edelim
        console.log('News Response:', response);
        // response.data mı yoksa response.response mu?
        setNews(response.response || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  if (loading) return <div>Yükleniyor...</div>;
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
