'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaUser, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import styles from './navbar.module.scss';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (userData.email) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    router.push('/auth/login');
  };

  return (
    <nav className={styles.navbar}>
      {/* ... mevcut navbar içeriği ... */}

      <div className={styles.rightSection}>
        {user ? (
          <div className={styles.userMenu}>
            <button 
              className={styles.userButton} 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUser />
              <span>{user.email}</span>
            </button>
            
            {dropdownOpen && (
              <div className={styles.dropdown}>
                <Link href="/admin" className={styles.dropdownItem}>
                  <FaTachometerAlt />
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout} 
                  className={styles.dropdownItem}
                >
                  <FaSignOutAlt />
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/login" className={styles.loginButton}>
            <FaUser />
            Giriş Yap
          </Link>
        )}
      </div>
    </nav>
  );
} 