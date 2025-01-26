'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '@/services/api';
import styles from './create.module.scss';

export default function CreateMemberPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    birthDate: '',
    gender: 'MALE'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (formData.password !== formData.confirmPassword) {
        setError('Şifreler eşleşmiyor');
        return;
      }

      if (formData.password.length < 6 || formData.password.length > 20) {
        setError('Şifre 6-20 karakter arasında olmalıdır');
        return;
      }

      if (formData.phoneNumber && !/^[0-9]{10}$/.test(formData.phoneNumber)) {
        setError('Telefon numarası 10 haneli olmalıdır');
        return;
      }

      const formattedData = {
        ...formData,
        birthDate: formData.birthDate ? new Date(formData.birthDate).toISOString().split('T')[0] : null
      };

      console.log('Form data:', formattedData);
      const result = await userService.create(formattedData);
      console.log('Create result:', result);
      setSuccess('Üye başarıyla kaydedildi. Yönlendiriliyorsunuz...');
      
      setTimeout(() => {
        router.push('/admin/members');
      }, 2000);
    } catch (error) {
      console.error('Create error:', error);
      setError(error?.message || 'Üye kaydı başarısız');
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

  return (
    <div className={styles.createPage}>
      <h1>Yeni Üye Oluştur</h1>
      
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
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Şifre *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            maxLength={20}
            required
          />
          <small>Şifre 6-20 karakter arasında olmalıdır</small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Şifre Tekrarı *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
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
        
        <div className={styles.formActions}>
          <button type="button" onClick={() => router.back()}>İptal</button>
          <button type="submit" disabled={loading}>
            {loading ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
} 