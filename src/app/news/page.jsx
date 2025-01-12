'use client';

import { useState } from 'react';
import { FaSearch, FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import haberlerData from '@/data/haberler.data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { categories, news } = haberlerData;

  // Haberleri filtrele
  const filteredNews = news.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Tarihe göre sırala (en yeni en üstte)
  const sortedNews = [...filteredNews].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Tarihi formatla
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <main className={styles.newsPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1>Haberler</h1>
          <p>Köyümüz ve derneğimiz ile ilgili en güncel haberler</p>
        </div>

        {/* Arama ve Filtreleme */}
        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Haberlerde ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.categories}>
            <button
              className={`${styles.categoryButton} ${activeCategory === 'all' ? styles.active : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Tümü
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Öne Çıkan Haberler */}
        {activeCategory === 'all' && searchQuery === '' && (
          <div className={styles.featuredNews}>
            {sortedNews.filter(item => item.featured).map(news => (
              <div key={news.id} className={styles.featuredCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={800}
                    height={400}
                    className={styles.image}
                  />
                  <div className={styles.category}>
                    {categories.find(cat => cat.id === news.category)?.title}
                  </div>
                </div>
                <div className={styles.content}>
                  <h2>{news.title}</h2>
                  <p>{news.summary}</p>
                  <div className={styles.meta}>
                    <span>
                      <FaCalendar />
                      {formatDate(news.date)}
                    </span>
                    <span>
                      <FaUser />
                      {news.author}
                    </span>
                  </div>
                  <Link href={`/news/${news.id}`} className={styles.readMore}>
                    Devamını Oku
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Haber Listesi */}
        <div className={styles.newsList}>
          {sortedNews.map(news => (
            <div key={news.id} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                <div className={styles.category}>
                  {categories.find(cat => cat.id === news.category)?.title}
                </div>
              </div>
              <div className={styles.content}>
                <h3>{news.title}</h3>
                <p>{news.summary}</p>
                <div className={styles.meta}>
                  <span>
                    <FaCalendar />
                    {formatDate(news.date)}
                  </span>
                  <span>
                    <FaUser />
                    {news.author}
                  </span>
                </div>
                <div className={styles.tags}>
                  <FaTag />
                  {news.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <Link href={`/news/${news.id}`} className={styles.readMore}>
                  Devamını Oku
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sonuç Bulunamadı */}
        {sortedNews.length === 0 && (
          <div className={styles.noResults}>
            <p>Aradığınız kriterlere uygun haber bulunamadı.</p>
          </div>
        )}
      </div>
    </main>
  );
} 