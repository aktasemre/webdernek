'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isVillageOpen, setIsVillageOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsVillageOpen(false);
    setIsGalleryOpen(false);
  };

  const toggleVillageMenu = () => {
    setIsVillageOpen(!isVillageOpen);
    setIsAboutOpen(false);
    setIsGalleryOpen(false);
  };

  const toggleGalleryMenu = () => {
    setIsGalleryOpen(!isGalleryOpen);
    setIsAboutOpen(false);
    setIsVillageOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/logo.jpg" 
            alt="Arslandede Köyü Derneği Logo" 
            width={80} 
            height={80} 
            style={{ 
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span>Arslandede Köyü Derneği</span>
        </Link>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.menuItem}>Ana Sayfa</Link>
          
          <div className={styles.dropdown}>
            <button 
              className={`${styles.menuItem} ${styles.dropdownButton}`}
              onClick={toggleVillageMenu}
            >
              Köyümüz
            </button>
            <div className={`${styles.dropdownContent} ${isVillageOpen ? styles.show : ''}`}>
              <Link href="/village/about-district">Köyümüz Hakkında</Link>
              <Link href="/village/about-village">..................</Link>
              <Link href="/village/places">Gezilecek Yerlerimiz</Link>
              <Link href="/village/sale">Satılık Arsa - Bahçe - Tarla</Link>
              <Link href="/village/neighborhoods">Mahallelerimiz</Link>
              <Link href="/village/mukhtars">Muhtarlarımız</Link>
              <Link href="/village/events">Etkinlik Tarihleri</Link>
              <Link href="/village/obituaries">Vefat Edenler</Link>
              <Link href="/village/news">Bizden Haberler</Link>
            </div>
          </div>

          <div className={styles.dropdown}>
            <button 
              className={`${styles.menuItem} ${styles.dropdownButton}`}
              onClick={toggleAboutMenu}
            >
              Derneğimiz
            </button>
            <div className={`${styles.dropdownContent} ${isAboutOpen ? styles.show : ''}`}>
              <Link href="/about/history">Derneğimizin Tarihçesi</Link>
              <Link href="/about/statute">Derneğimizin Tüzüğü</Link>
              <Link href="/about/board">Yönetim Kurulu</Link>
              <Link href="/about/supervisory">Denetleme Kurulu</Link>
              <Link href="/about/founders">Kurucularımız</Link>
              <Link href="/about/members">Üyelerimiz</Link>
              <Link href="/about/bank-accounts">Banka Hesaplarımız</Link>
              <Link href="/about/writers">Yazarlarımız</Link>
              <Link href="/about/blood-bank">Kan Bankası</Link>
            </div>
          </div>

          <div className={styles.dropdown}>
            <button 
              className={`${styles.menuItem} ${styles.dropdownButton}`}
              onClick={toggleGalleryMenu}
            >
              Galeri
            </button>
            <div className={`${styles.dropdownContent} ${isGalleryOpen ? styles.show : ''}`}>
              <Link href="/gallery/photos">Fotoğraf Galerisi</Link>
              <Link href="/gallery/videos">Video Galerisi</Link>
              <Link href="/gallery/historical">Tarihi Fotoğraflar</Link>
              <Link href="/gallery/events">Etkinlik Fotoğrafları</Link>
            </div>
          </div>

          <Link href="/projects" className={styles.menuItem}>Projeler</Link>
          <Link href="/news" className={styles.menuItem}>Haberler</Link>
          <Link href="/contact" className={styles.menuItem}>İletişim</Link>
          
          <Link href="/donate" className={`${styles.menuItem} ${styles.donateButton}`}>
            <FaHeart /> Bağış Yap
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 