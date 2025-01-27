'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import styles from './login.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * @param {React.FormEvent} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.accessToken) {
        sessionStorage.setItem('token', `Bearer ${data.accessToken}`);
        sessionStorage.setItem('user', JSON.stringify({
          id: data.userId,
          email: data.email,
          role: data.role
        }));

        router.push('/admin');
      } else {
        setError(data.message || 'Giriş başarısız');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Giriş yapılırken bir hata oluştu');
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