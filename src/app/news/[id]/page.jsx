'use client';

import { useParams } from 'next/navigation';
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';
import haberlerData from '@/data/haberler.data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function NewsDetailPage() {
  const params = useParams();
  const { news, categories } = haberlerData;
  const newsItem = news.find(item => item.id === params.id);

  if (!newsItem) {
    return (
      <div className={styles.notFound}>
        <h1>Haber Bulunamadı</h1>
        <p>Aradığınız haber bulunamadı veya kaldırılmış olabilir.</p>
        <Link href="/news" className={styles.backButton}>
          <FaArrowLeft />
          Haberlere Dön
        </Link>
      </div>
    );
  }

  // Tarihi formatla
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <main className={styles.newsDetail}>
      <div className={styles.container}>
        {/* Geri Dön Butonu */}
        <Link href="/news" className={styles.backButton}>
          <FaArrowLeft />
          Haberlere Dön
        </Link>

        {/* Haber Başlığı */}
        <div className={styles.header}>
          <h1>{newsItem.title}</h1>
          <div className={styles.meta}>
            <span>
              <FaCalendar />
              {formatDate(newsItem.date)}
            </span>
            <span>
              <FaUser />
              {newsItem.author}
            </span>
            <span className={styles.category}>
              {categories.find(cat => cat.id === newsItem.category)?.title}
            </span>
          </div>
        </div>

        {/* Haber Görseli */}
        <div className={styles.imageContainer}>
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            width={1200}
            height={600}
            className={styles.image}
          />
        </div>

        {/* Haber İçeriği */}
        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
        </div>

        {/* Etiketler */}
        <div className={styles.tags}>
          <FaTag />
          <div className={styles.tagList}>
            {newsItem.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* İlgili Haberler */}
        <div className={styles.relatedNews}>
          <h2>İlgili Haberler</h2>
          <div className={styles.relatedGrid}>
            {news
              .filter(item => 
                item.id !== newsItem.id && 
                (item.category === newsItem.category || 
                item.tags.some(tag => newsItem.tags.includes(tag)))
              )
              .slice(0, 3)
              .map(item => (
                <Link href={`/news/${item.id}`} key={item.id} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className={styles.date}>
                      <FaCalendar />
                      {formatDate(item.date)}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
} 