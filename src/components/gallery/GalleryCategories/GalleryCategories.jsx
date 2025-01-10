'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCamera, FaVideo, FaHistory, FaCalendarAlt } from 'react-icons/fa';
import styles from './GalleryCategories.module.scss';

const categories = [
  {
    id: 'photos',
    title: 'Fotoğraf Galerisi',
    description: 'Köyümüzün doğal güzellikleri ve güncel fotoğrafları',
    icon: <FaCamera />,
    image: '/images/manzara1.jpg',
    link: '/gallery/photos'
  },
  {
    id: 'videos',
    title: 'Video Galerisi',
    description: 'Etkinliklerimiz ve köy yaşamından videolar',
    icon: <FaVideo />,
    image: '/images/manzara2.jpg',
    link: '/gallery/videos'
  },
  {
    id: 'historical',
    title: 'Tarihi Fotoğraflar',
    description: 'Geçmişten günümüze köyümüzün fotoğrafları',
    icon: <FaHistory />,
    image: '/images/manzara3.jpg',
    link: '/gallery/historical'
  },
  {
    id: 'events',
    title: 'Etkinlik Fotoğrafları',
    description: 'Dernek ve köy etkinliklerimizden kareler',
    icon: <FaCalendarAlt />,
    image: '/images/manzara4.jpg',
    link: '/gallery/events'
  }
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
                  style={{ objectFit: "cover" }}
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