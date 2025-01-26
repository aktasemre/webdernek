'use client';

import { useState, useEffect } from 'react';
import { userService } from '@/services/api';
import styles from './profile.module.scss';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await userService.getCurrentUser();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;
  if (!profile) return <div>Profil bulunamadı</div>;

  return (
    <div className={styles.profilePage}>
      <h1>Profilim</h1>
      
      <div className={styles.profileCard}>
        <div className={styles.profileInfo}>
          <h2>{profile.firstName} {profile.lastName}</h2>
          <p>Email: {profile.email}</p>
          <p>Telefon: {profile.phoneNumber}</p>
          <p>Adres: {profile.address}</p>
          <p>Durum: {profile.status}</p>
        </div>
      </div>
    </div>
  );
} 