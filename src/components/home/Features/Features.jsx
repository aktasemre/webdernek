import React from 'react';
import Link from 'next/link';
import { 
  FaUsers, 
  FaHandHoldingHeart, 
  FaLandmark, 
  FaNewspaper,
  FaPhotoVideo,
  FaBook,
  FaPray,
  FaComments,
  FaQuoteLeft,
  FaCalendarAlt
} from 'react-icons/fa';
import styles from './Features.module.scss';
import featuresData from '@/data/features.data.json';

const Features = () => {
  // Icon mapping object
  const iconMap = {
    FaUsers,
    FaHandHoldingHeart,
    FaLandmark,
    FaNewspaper,
    FaPhotoVideo,
    FaBook,
    FaPray,
    FaComments,
    FaQuoteLeft,
    FaCalendarAlt
  };

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Derneğimizin Çalışmaları</h2>
        <div className={styles.featureGrid}>
          {featuresData.features.map((feature, index) => {
            const Icon = iconMap[feature.iconName];
            return (
              <Link href={feature.link} key={index} className={styles.featureCard}>
                <Icon className={styles.icon} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features; 