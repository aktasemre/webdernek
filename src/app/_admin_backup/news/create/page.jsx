'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaImage } from 'react-icons/fa';
import { newsService } from '@/services/api';
import styles from '@/app/admin/shared/form.module.scss';

export default function CreateNewsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    summary: '',
    imageUrl: '',
    publishDate: new Date().toISOString(),
    isPublished: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const data = {
        title: formData.title,
        content: formData.content,
        summary: formData.summary,
        imageUrl: formData.imageUrl,
        publishDate: new Date(formData.publishDate).toISOString(),
        isPublished: formData.isPublished,
        viewCount: 0,
        author: {
          id: user.id
        }
      };
      
      await newsService.create(data);
      
      setSuccess('Haber başarıyla oluşturuldu');
      setTimeout(() => {
        router.push('/admin/news');
      }, 2000);
    } catch (err) {
      console.error('Haber oluşturma hatası:', err);
      setError(err.message || 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDateChange = (e) => {
    try {
      const localDate = new Date(e.target.value);
      const utcDate = new Date(localDate.getTime() - (localDate.getTimezoneOffset() * 60000));
      setFormData({
        ...formData,
        publishDate: utcDate.toISOString()
      });
    } catch (error) {
      console.error('Tarih dönüştürme hatası:', error);
    }
  };

  return (
    <div className={styles.createPage}>
      <div className={styles.header}>
        <button 
          className={styles.backButton}
          onClick={() => router.back()}
        >
          <FaArrowLeft /> Geri
        </button>
        <h1>Yeni Haber Ekle</h1>
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Başlık *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={100}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="summary">Özet</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            maxLength={200}
            rows={3}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">İçerik *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            minLength={10}
            rows={10}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="imageUrl">
            <FaImage /> Görsel URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="publishDate">Yayın Tarihi ve Saati *</label>
          <input
            type="datetime-local"
            id="publishDate"
            name="publishDate"
            value={formData.publishDate.slice(0, 16)}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
            />
            Hemen Yayınla
          </label>
        </div>

        <div className={styles.formActions}>
          <button 
            type="button" 
            onClick={() => router.back()}
            className={styles.cancelButton}
          >
            İptal
          </button>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
} 