'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.scss';

const BottomNav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { 
      label: 'Ana Sayfa', 
      path: '/',
      icon: '🏠'
    },
    { 
      label: 'Haberler', 
      path: '/news',
      icon: '📰'
    },
   
    { 
      label: 'Galeri', 
      path: '/gallery',
      icon: '🖼️'
    },
    { 
      label: 'İletişim', 
      path: '/contact',
      icon: '📞'
    }
  ];

  return (
    <>
      <nav className={styles.bottomNav}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
            onClick={item.onClick}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>

      {isSearchOpen && (
        <div className={styles.searchOverlay} onClick={() => setIsSearchOpen(false)}>
          <div className={styles.searchContainer} onClick={e => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Ne aramak istersiniz?"
              className={styles.searchInput}
              autoFocus
            />
            <button 
              className={styles.closeButton}
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomNav; 