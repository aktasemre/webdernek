'use client';

import React from 'react';
import Link from 'next/link';
import { FaPray, FaComments, FaQuoteLeft } from 'react-icons/fa';
import styles from './page.module.scss';

const CulturePage = () => {
  const sections = [
    {
      title: 'Beddualar',
      description: 'Yöresel beddualar ve anlamları',
      icon: FaPray,
      link: '/culture/curses',
    },
    {
      title: 'Yerel Kelimeler',
      description: 'Köyümüze özgü kelimeler ve anlamları',
      icon: FaComments,
      link: '/culture/words',
    },
    {
      title: 'Atasözleri',
      description: 'Yöresel atasözleri ve deyimler',
      icon: FaQuoteLeft,
      link: '/culture/proverbs',
    },
  ];

  return (
    <div className={styles.culturePage}>
      <div className={styles.container}>
        <h1>Kültürel Mirasımız</h1>
        <p className={styles.intro}>
          Köyümüzün zengin kültürel mirasını gelecek nesillere aktarmak ve yaşatmak için
          derlediğimiz değerli bilgileri burada bulabilirsiniz.
        </p>

        <div className={styles.sectionsGrid}>
          {sections.map((section, index) => (
            <Link href={section.link} key={index} className={styles.sectionCard}>
              <section.icon className={styles.icon} />
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </Link>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            Bu bölümdeki bilgiler, köyümüzün yaşlıları ve bilge kişilerinden derlenmiştir. Katkıda
            bulunmak isteyenler derneğimizle iletişime geçebilir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CulturePage;
