'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { authService } from '@/services/api';
import styles from './login.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Giriş denemesi:', formData);

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Response data:', data);

      if (data.accessToken) {
        // Token'ı kaydet
        sessionStorage.setItem('token', `Bearer ${data.accessToken}`);
        console.log('Token kaydedildi:', `Bearer ${data.accessToken}`);
        
        // Kullanıcı bilgilerini kaydet
        sessionStorage.setItem('user', JSON.stringify({
          id: data.userId,
          email: data.email,
          role: data.role
        }));

        // Admin paneline yönlendir
        router.push('/admin');
      } else {
        setError('Giriş başarısız: Token alınamadı');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Giriş yapılırken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1>Giriş Yap</h1>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              <FaUser /> Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">
              <FaLock /> Şifre
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className={styles.actions}>
            <button 
              type="submit" 
              className={styles.loginButton}
              disabled={loading}
            >
              <FaSignInAlt />
              {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>

            <button 
              type="button"
              className={styles.registerButton}
              onClick={() => router.push('/auth/register')}
            >
              <FaUserPlus />
              Kayıt Ol
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 