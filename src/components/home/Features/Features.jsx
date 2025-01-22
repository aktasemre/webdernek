'use client';

import Link from 'next/link';
import {
  FaComments,
  FaUsers,
  FaHandHoldingHeart,
  FaLandmark,
  FaNewspaper,
  FaImages,
  FaBook,
  FaPray,
  FaQuoteRight,
  FaCalendarAlt,
} from 'react-icons/fa';
import styles from './Features.module.scss';

const features = [
  {
    icon: <FaLandmark />,
    title: 'Kültürel Miras',
    description: 'Köyümüzün zengin tarihini ve kültürünü yaşatıyoruz',
    link: '/culture',
    color: '#2C5F2D',
  },
  {
    icon: <FaComments />,
    title: 'Yerel Kelimeler',
    description: 'Köyümüze özgü kelimeler ve anlamları',
    link: '/culture/words',
    color: '#3498db',
  },
  {
    icon: <FaQuoteRight />,
    title: 'Atasözleri',
    description: 'Yöresel atasözleri ve deyimler',
    link: '/culture/proverbs',
    color: '#34495e',
  },
  {
    icon: <FaPray />,
    title: 'Beddualar',
    description: 'Yöresel beddualar ve anlamları',
    link: '/culture/curses',
    color: '#95a5a6',
  },
  {
    icon: <FaUsers />,
    title: 'Üyelerimiz',
    description: 'Güçlü üye ağımız ile birlikte çalışıyoruz',
    link: '/about/members',
    color: '#2980b9',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: 'Sosyal Yardım',
    description: 'İhtiyaç sahiplerine destek oluyoruz',
    link: '/social-aid',
    color: '#e74c3c',
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Etkinlikler',
    description: 'Dernek ve köy etkinliklerimiz',
    link: '/events',
    color: '#27ae60',
  },
  {
    icon: <FaNewspaper />,
    title: 'Haberler',
    description: 'En güncel dernek ve köy haberlerimiz',
    link: '/news',
    color: '#3498db',
  },
  {
    icon: <FaImages />,
    title: 'Galeri',
    description: 'Köyümüzden fotoğraflar ve videolar',
    link: '/gallery',
    color: '#9b59b6',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Değerlerimiz ve Hizmetlerimiz</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Link href={feature.link} key={index} className={styles.feature}>
              <div className={styles.iconWrapper} style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
