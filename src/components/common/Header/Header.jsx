'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo.jpg" 
              alt="Arslandede Köyü Derneği Logo" 
              width={64} 
              height={64}
              className={styles.logoImage}
            />
            <span>Arslandede Köyü Derneği</span>
          </Link>

          <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
            <Link href="/" className={styles.menuItem}>Ana Sayfa</Link>
            
            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Köyümüz ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/about/village">Köyümüz Hakkında</Link>
                <Link href="/about/village/history">Köyümüzün Tarihi</Link>
                <Link href="/about/village/geography">Coğrafi Yapı</Link>
                <Link href="/about/village/population">Nüfus ve Yerleşim</Link>
                <Link href="/about/village/economy">Ekonomik Yapı</Link>
                <Link href="/about/village/education">Eğitim ve Kültür</Link>
                <Link href="/about/village/places">Gezilecek Yerler</Link>
              </div>
            </div>

            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Derneğimiz ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/about/history">Derneğimizin Tarihçesi</Link>
                <Link href="/about/board">Yönetim Kurulu</Link>
                <Link href="/about/statute">Dernek Tüzüğü</Link>
                <Link href="/about/founders">Kurucularımız</Link>
                <Link href="/about/members">Üyelerimiz</Link>
              </div>
            </div>

            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Galeri ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/gallery/photos">Fotoğraf Galerisi</Link>
                <Link href="/gallery/videos">Video Galerisi</Link>
                <Link href="/gallery/historical">Tarihi Fotoğraflar</Link>
              </div>
            </div>

            <Link href="/projects" className={styles.menuItem}>Projeler</Link>
            <Link href="/news" className={styles.menuItem}>Haberler</Link>
            <Link href="/contact" className={styles.menuItem}>İletişim</Link>

            <Link href="/donate" className={styles.donateButton}>
              <FaHeart /> Bağış Yap
            </Link>
          </div>

          <button className={styles.menuButton} onClick={toggleMenu}>
            {isOpen ? 'Kapat' : 'Menü'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 