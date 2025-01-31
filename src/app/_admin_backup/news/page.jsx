'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import newsService from '@/services/api/newsService';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaEye } from 'react-icons/fa';
import styles from './news.module.scss';

export default function NewsPage() {
  const router = useRouter();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await newsService.getAllNews();
      setNews(response.response || []);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/news/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bu haberi silmek istediğinizden emin misiniz?')) {
      try {
        await newsService.deleteNews(id);
        setNews(news.filter(item => item.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR');
  };

  if (loading) return <div className={styles.loading}>Yükleniyor...</div>;
  if (error) return <div className={styles.error}>Hata: {error}</div>;

  const filteredNews = news.filter(item => 
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.summary?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.newsPage}>
      <div className={styles.header}>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Haber ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          className={styles.addButton}
          onClick={() => router.push('/admin/news/create')}
        >
          <FaPlus /> Yeni Haber Ekle
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.newsTable}>
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Özet</th>
              <th>Yayın Tarihi</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredNews.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.summary}</td>
                <td>{formatDate(item.publishDate)}</td>
                <td>
                  <span className={`${styles.status} ${item.published ? styles.published : styles.draft}`}>
                    {item.published ? 'Yayında' : 'Taslak'}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button 
                      className={styles.viewButton}
                      onClick={() => router.push(`/news/${item.id}`)}
                      title="Görüntüle"
                    >
                      <FaEye />
                    </button>
                    <button 
                      className={styles.editButton}
                      onClick={() => handleEdit(item.id)}
                      title="Düzenle"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDelete(item.id)}
                      title="Sil"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 