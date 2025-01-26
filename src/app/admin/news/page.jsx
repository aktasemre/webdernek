'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { newsService } from '@/services/api';
import styles from './news.module.scss';

export default function NewsPage() {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await newsService.getAll();
        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Bu haberi silmek istediğinize emin misiniz?')) {
      try {
        await newsService.delete(id);
        setNews(news.filter(item => item.id !== id));
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={styles.newsPage}>
      <div className={styles.header}>
        <h1>Haberler</h1>
        <button 
          className={styles.addButton}
          onClick={() => router.push('/admin/news/create')}
        >
          <FaPlus /> Haber Ekle
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {loading ? (
        <div className={styles.loading}>Yükleniyor...</div>
      ) : (
        <div className={styles.newsGrid}>
          {news.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              {item.imageUrl && (
                <div className={styles.imageContainer}>
                  <img src={item.imageUrl} alt={item.title} />
                </div>
              )}
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className={styles.meta}>
                  <span>{new Date(item.publishDate).toLocaleDateString('tr-TR')}</span>
                  <span>{item.viewCount} görüntülenme</span>
                </div>
                <div className={styles.actions}>
                  <button 
                    onClick={() => router.push(`/admin/news/view/${item.id}`)}
                    className={styles.viewButton}
                  >
                    <FaEye /> Görüntüle
                  </button>
                  <button 
                    onClick={() => router.push(`/admin/news/edit/${item.id}`)}
                    className={styles.editButton}
                  >
                    <FaEdit /> Düzenle
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className={styles.deleteButton}
                  >
                    <FaTrash /> Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 