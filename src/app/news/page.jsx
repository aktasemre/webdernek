'use client';

import { useState } from 'react';
import { FaSearch, FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import haberlerData from '@/data/haberler.data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function NewsPage() {
  const haberler = haberlerData.haberler || [];
  const categories = haberlerData.categories || [];

  // Öne çıkan haberleri filtrele
  const featuredNews = haberler.filter(haber => haber.featured);
  // Diğer haberleri filtrele
  const otherNews = haberler.filter(haber => !haber.featured);

  return (
    <div className={styles.newsPage}>
      <div className={styles.container}>
        <h1>Haberler ve Duyurular</h1>

        {/* Öne Çıkan Haberler */}
        {featuredNews.length > 0 && (
          <section className={styles.featuredSection}>
            <h2>Öne Çıkan Haberler</h2>
            <div className={styles.featuredGrid}>
              {featuredNews.map((haber) => (
                <Link href={`/news/${haber.id}`} key={haber.id} className={styles.featuredCard}>
                  {haber.image && (
                    <div className={styles.imageContainer}>
                      <Image
                        src={haber.image}
                        alt={haber.title}
                        width={600}
                        height={300}
                        className={styles.image}
                      />
                    </div>
                  )}
                  <div className={styles.content}>
                    <h3>{haber.title}</h3>
                    <p>{haber.summary}</p>
                    <div className={styles.meta}>
                      <time dateTime={haber.date}>
                        {new Date(haber.date).toLocaleDateString('tr-TR')}
                      </time>
                      <span className={styles.category}>
                        {categories.find(c => c.id === haber.category)?.title || haber.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Diğer Haberler */}
        {otherNews.length > 0 && (
          <section className={styles.newsSection}>
            <h2>Tüm Haberler</h2>
            <div className={styles.newsGrid}>
              {otherNews.map((haber) => (
                <Link href={`/news/${haber.id}`} key={haber.id} className={styles.newsCard}>
                  {haber.image && (
                    <div className={styles.imageContainer}>
                      <Image
                        src={haber.image}
                        alt={haber.title}
                        width={400}
                        height={200}
                        className={styles.image}
                      />
                    </div>
                  )}
                  <div className={styles.content}>
                    <h3>{haber.title}</h3>
                    <p>{haber.summary}</p>
                    <div className={styles.meta}>
                      <time dateTime={haber.date}>
                        {new Date(haber.date).toLocaleDateString('tr-TR')}
                      </time>
                      <span className={styles.category}>
                        {categories.find(c => c.id === haber.category)?.title || haber.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {haberler.length === 0 && (
          <div className={styles.noNews}>
            <p>Henüz haber bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </div>
  );
} 