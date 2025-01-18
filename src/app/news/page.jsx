'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './news.module.scss';
import haberlerData from '@/data/haberler.data.json';
import Header from '@/components/layout/Header/Header';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const haberler = haberlerData.haberler || [];
  const categories = haberlerData.categories || [];

  // Haberleri filtrele
  const filteredHaberler = haberler.filter(haber => {
    const matchesSearch = haber.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         haber.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || haber.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Haberler ve Duyurular</h1>
          <p>Derneğimiz ve köyümüz ile ilgili en güncel haberler</p>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label htmlFor="search">Ara:</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Haber ara..."
            />
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="category">Kategori:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Tümü</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredHaberler.length > 0 ? (
          <div className={styles.newsGrid}>
            {filteredHaberler.map(haber => (
              <Link href={`/news/${haber.id}`} key={haber.id} className={styles.newsCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={haber.image}
                    alt={haber.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.content}>
                  <h2>{haber.title}</h2>
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
        ) : (
          <div className={styles.noNews}>
            <p>Aradığınız kriterlere uygun haber bulunamadı.</p>
          </div>
        )}
      </div>
    </>
  );
} 