'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.scss';

const heroSlides = [
  {
    image: '/images/arslandede1.jpg',
    title: 'Arslandede Köyü Derneği',
    description: 'Köyümüzün gelişimi ve kalkınması için el ele'
  },
  {
    image: '/images/arslandede2.jpg',
    title: 'Doğal Güzelliklerimiz',
    description: 'Eşsiz doğası ve temiz havasıyla huzur dolu bir köy'
  },
  {
    image: '/images/arslandede3.jpg',
    title: 'Kültürel Mirasımız',
    description: 'Geleneklerimizi yaşatıyor, geleceğe taşıyoruz'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroSlides[currentSlide].image})`
    }}>
      <div className={styles.heroContent}>
        <h1>{heroSlides[currentSlide].title}</h1>
        <p>{heroSlides[currentSlide].description}</p>
        <Link href="/about/village" className={styles.heroButton}>
          Köyümüzü Keşfedin
        </Link>
      </div>
      <div className={styles.sliderDots}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 