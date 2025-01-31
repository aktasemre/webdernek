'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '@/services/api';
import styles from './edit.module.scss';

export default function EditMemberPage({ params }) {
  const router = useRouter();
  const { id } = params;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    birthDate: '',
    gender: 'MALE',
    status: 'ACTIVE'
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const data = await userService.getById(id);
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phoneNumber: data.phoneNumber || '',
          address: data.address || '',
          birthDate: data.birthDate ? data.birthDate.split('T')[0] : '',
          gender: data.gender || 'MALE',
          status: data.status || 'ACTIVE'
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await userService.update(id, formData);
      setSuccess('Üye bilgileri başarıyla güncellendi');
      
      // 2 saniye sonra listeye dön
      setTimeout(() => {
        router.push('/admin/members');
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Üye bilgileri yükleniyor...</p>
    </div>
  );

  return (
    <div className={styles.editPage}>
      <div className={styles.header}>
        <h1>Üye Düzenle</h1>
        <button 
          type="button" 
          onClick={() => router.back()}
          className={styles.backButton}
        >
          Geri Dön
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Ad *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            minLength={2}
            maxLength={50}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Soyad *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            minLength={2}
            maxLength={50}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled // Email değiştirilemez
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Telefon</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="5XXXXXXXXX"
          />
          <small>10 haneli telefon numarası giriniz</small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Adres</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            maxLength={255}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="birthDate">Doğum Tarihi</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="gender">Cinsiyet *</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="MALE">Erkek</option>
            <option value="FEMALE">Kadın</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Durum *</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="ACTIVE">Aktif</option>
            <option value="INACTIVE">Pasif</option>
          </select>
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