'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaSearch } from 'react-icons/fa';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Arama işlemi burada yapılacak
    console.log('Arama sorgusu:', searchQuery);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo.jpg" 
              alt="Arslandede Köyü Derneği Logo" 
              width={48} 
              height={48}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>Arslandede Köyü Derneği</span>
          </Link>

          <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
            <Link href="/" className={styles.menuItem} onClick={handleLinkClick}>Ana Sayfa</Link>
            
            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Köyümüz ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/about/village" onClick={handleLinkClick}>Köyümüz Hakkında</Link>
                <Link href="/about/village/history" onClick={handleLinkClick}>Köyümüzün Tarihi</Link>
                <Link href="/about/village/geography" onClick={handleLinkClick}>Coğrafi Yapı</Link>
                <Link href="/about/village/population" onClick={handleLinkClick}>Nüfus ve Yerleşim</Link>
                <Link href="/about/village/economy" onClick={handleLinkClick}>Ekonomik Yapı</Link>
                <Link href="/about/village/education" onClick={handleLinkClick}>Eğitim ve Kültür</Link>
                <Link href="/about/village/places" onClick={handleLinkClick}>Gezilecek Yerler</Link>
              </div>
            </div>

            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Derneğimiz ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/about/history" onClick={handleLinkClick}>Derneğimizin Tarihçesi</Link>
                <Link href="/about/board" onClick={handleLinkClick}>Yönetim Kurulu</Link>
                <Link href="/about/statute" onClick={handleLinkClick}>Dernek Tüzüğü</Link>
                <Link href="/about/founders" onClick={handleLinkClick}>Kurucularımız</Link>
                <Link href="/about/members" onClick={handleLinkClick}>Üyelerimiz</Link>
                <Link href="/donate" onClick={handleLinkClick}>Bağış Yap</Link>
              </div>
            </div>

            <div className={styles.dropdown}>
              <span className={styles.menuItem}>Galeri ▼</span>
              <div className={styles.dropdownContent}>
                <Link href="/gallery/photos" onClick={handleLinkClick}>Fotoğraf Galerisi</Link>
                <Link href="/gallery/videos" onClick={handleLinkClick}>Video Galerisi</Link>
                <Link href="/gallery/historical" onClick={handleLinkClick}>Tarihi Fotoğraflar</Link>
              </div>
            </div>

            <Link href="/projects" className={styles.menuItem} onClick={handleLinkClick}>Projeler</Link>
            <Link href="/news" className={styles.menuItem} onClick={handleLinkClick}>Haberler</Link>
            <Link href="/contact" className={styles.menuItem} onClick={handleLinkClick}>İletişim</Link>

            <Link href="/donate" className={styles.donateButton} onClick={handleLinkClick}>
              <FaHeart /> Bağış Yap
            </Link>
          </div>

          <div className={styles.searchContainer}>
            <button 
              className={styles.searchButton}
              onClick={toggleSearch}
              aria-label="Ara"
            >
              <FaSearch />
            </button>

            {isSearchOpen && (
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                  type="text"
                  placeholder="Ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.submitButton}>
                  <FaSearch />
                </button>
                <button 
                  type="button" 
                  className={styles.closeButton}
                  onClick={toggleSearch}
                >
                  &times;
                </button>
              </form>
            )}
          </div>

          <button 
            className={`${styles.menuButton} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
} 