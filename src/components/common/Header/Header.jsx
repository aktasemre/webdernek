'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image 
              src="/images/logo.jpg" 
              alt="Arslandede Köyü Derneği Logo" 
              width={64} 
              height={64}
              className={styles.logoImage}
            />
            <span>Arslandede Köyü Derneği</span>
          </Link>

          <button 
            className={styles.menuButton} 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div 
            className={`${styles.menu} ${isOpen ? styles.active : ''}`}
            aria-hidden={!isOpen}
          >
            <Link href="/" className={styles.menuItem} onClick={closeMenu}>Ana Sayfa</Link>
            
            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Köyümüz ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/about/village" onClick={closeMenu}>Köyümüz Hakkında</Link>
                <Link href="/about/village/history" onClick={closeMenu}>Köyümüzün Tarihi</Link>
                <Link href="/about/village/geography" onClick={closeMenu}>Coğrafi Yapı</Link>
                <Link href="/about/village/population" onClick={closeMenu}>Nüfus ve Yerleşim</Link>
                <Link href="/about/village/economy" onClick={closeMenu}>Ekonomik Yapı</Link>
                <Link href="/about/village/education" onClick={closeMenu}>Eğitim ve Kültür</Link>
                <Link href="/about/village/places" onClick={closeMenu}>Gezilecek Yerler</Link>
              </div>
            </div>

            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Derneğimiz ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/about/history" onClick={closeMenu}>Derneğimizin Tarihçesi</Link>
                <Link href="/about/board" onClick={closeMenu}>Yönetim Kurulu</Link>
                <Link href="/about/statute" onClick={closeMenu}>Dernek Tüzüğü</Link>
                <Link href="/about/founders" onClick={closeMenu}>Kurucularımız</Link>
                <Link href="/about/members" onClick={closeMenu}>Üyelerimiz</Link>
              </div>
            </div>

            <Link href="/gallery" className={styles.menuItem} onClick={closeMenu}>Galeri</Link>
            <Link href="/projects" className={styles.menuItem} onClick={closeMenu}>Projeler</Link>
            <Link href="/news" className={styles.menuItem} onClick={closeMenu}>Haberler</Link>
            <Link href="/contact" className={styles.menuItem} onClick={closeMenu}>İletişim</Link>

            <Link href="/donate" className={styles.donateButton} onClick={closeMenu}>
              <FaHeart /> Bağış Yap
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 