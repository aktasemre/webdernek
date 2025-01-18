'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaImage, FaCalendarAlt, FaLandmark, FaUsers } from 'react-icons/fa';
import styles from './GalleryCategories.module.scss';

const categories = [
  {
    id: 'dogal-guzellikler',
    title: 'Doğal Güzellikler',
    description: 'Köyümüzün eşsiz doğal güzellikleri',
    image: '/images/manzara1.jpg',
    link: '/gallery/photos?category=dogal-guzellikler',
    icon: <FaImage />,
  },
  {
    id: 'etkinlikler',
    title: 'Etkinlikler',
    description: 'Köy etkinlikleri ve organizasyonlar',
    image: '/images/koy1.jpg',
    link: '/gallery/photos?category=etkinlikler',
    icon: <FaCalendarAlt />,
  },
  {
    id: 'tarihi',
    title: 'Tarihi Yerler',
    description: 'Köyümüzün tarihi mekanları',
    image: '/images/arslandede1.jpg',
    link: '/gallery/photos?category=tarihi',
    icon: <FaLandmark />,
  },
  {
    id: 'koyyasami',
    title: 'Köy Yaşamı',
    description: 'Günlük yaşamdan kareler',
    image: '/images/koy2.jpg',
    link: '/gallery/photos?category=koyyasami',
    icon: <FaUsers />,
  },
];

const GalleryCategories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link href={category.link} key={category.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay}>
                  <div className={styles.icon}>{category.icon}</div>
                </div>
              </div>
              <div className={styles.content}>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCategories;
