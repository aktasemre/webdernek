'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '@/services/api';
import styles from './edit.module.scss';

export default function EditProfilePage() {
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await userService.getCurrentUser();
        setFormData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await userService.update(formData.id, formData);
      router.push('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;
  if (!formData) return <div>Profil bulunamadı</div>;

  return (
    <div className={styles.editPage}>
      <h1>Profil Düzenle</h1>
      
      {error && <div className={styles.error}>{error}</div>}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Ad</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            required
          />
        </div>

        {/* Diğer form alanları */}
        
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