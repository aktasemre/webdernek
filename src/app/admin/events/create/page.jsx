'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { eventService } from '@/services/api';
import styles from '@/app/admin/shared/form.module.scss';

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    maxParticipants: 50,
    isActive: true
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Tarihi doğru formata çevirelim
    const formattedStartDate = new Date(formData.startDate).toISOString().replace('Z', '+03:00');
    const formattedEndDate = new Date(formData.endDate).toISOString().replace('Z', '+03:00');
    
    const eventData = {
      ...formData,
      startDate: formattedStartDate, // Örnek: "2024-01-28T10:00:00+03:00"
      endDate: formattedEndDate
    };

    try {
      await eventService.createEvent(eventData);
      setSuccess('Etkinlik başarıyla oluşturuldu');
      
      // 2 saniye sonra listeye dön
      setTimeout(() => {
        router.push('/admin/events');
      }, 2000);
    } catch (error) {
      console.error('Error creating event:', error);
      setError(error.message);
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

  return (
    <div className={styles.createPage}>
      <div className={styles.header}>
        <button 
          className={styles.backButton}
          onClick={() => router.back()}
        >
          <FaArrowLeft /> Geri
        </button>
        <h1>Yeni Etkinlik Ekle</h1>
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Etkinlik Adı *</label>
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
          <label htmlFor="description">Açıklama *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            minLength={10}
            rows={5}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="startDate">Başlangıç Tarihi *</label>
            <input
              type="datetime-local"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="endDate">Bitiş Tarihi *</label>
            <input
              type="datetime-local"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location">
            <FaMapMarkerAlt /> Konum *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="maxParticipants">
            <FaUsers /> Maksimum Katılımcı Sayısı *
          </label>
          <input
            type="number"
            id="maxParticipants"
            name="maxParticipants"
            value={formData.maxParticipants}
            onChange={handleChange}
            required
            min={1}
            max={1000}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            Etkinlik Aktif
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