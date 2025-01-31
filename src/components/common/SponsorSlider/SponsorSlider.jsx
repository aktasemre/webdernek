'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './SponsorSlider.module.scss';

const sponsors = [
  { name: 'Sponsor 1', logo: '/images/sponsor/sponsor1.jpg', url: 'https://sponsor1.com' },
  { name: 'Sponsor 2', logo: '/images/sponsor/sponsor2.jpg', url: 'https://sponsor2.com' },
  { name: 'Sponsor 3', logo: '/images/sponsor/sponsor3.jpg', url: 'https://sponsor3.com' },
  { name: 'Sponsor 4', logo: '/images/sponsor/sponsor4.jpg', url: 'https://sponsor4.com' }
];

const SponsorSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('sponsorContainer');
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
            scrollContainer.scrollTop = 0;
          } else {
            scrollContainer.scrollTop += 1;
          }
        }
      }, 30);
    };

    startScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isPaused]);

  return (
    <div 
      className={styles.sponsorSlider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className={styles.title}>Sponsorlarımız</h2>
      <div id="sponsorContainer" className={styles.sliderContainer}>
        <div className={styles.sliderContent}>
          <div className={styles.sponsorGrid}>
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorCard}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={200}
                    className={styles.sponsorImage}
                  />
                </div>
                <span className={styles.sponsorName}>{sponsor.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSlider; 