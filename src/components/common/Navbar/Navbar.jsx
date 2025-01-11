'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHandHoldingHeart, FaSearch } from 'react-icons/fa';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Arama işlemi burada yapılacak
    console.log('Arama yapılıyor:', searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Arslandede Köyü Derneği
        </Link>

        <div className={styles.rightSection}>
          {/* Arama Butonu */}
          <button
            className={styles.searchButton}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Arama"
          >
            <FaSearch />
          </button>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Arama Formu */}
        {isSearchOpen && (
          <div className={styles.searchOverlay}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <input
                type="text"
                placeholder="Site içinde ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                autoFocus
              />
              <button type="submit" className={styles.searchSubmit}>
                <FaSearch />
              </button>
              <button
                type="button"
                className={styles.searchClose}
                onClick={() => setIsSearchOpen(false)}
              >
                <FaTimes />
              </button>
            </form>
          </div>
        )}

        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <Link href="/" onClick={handleLinkClick}>
            Ana Sayfa
          </Link>
          <div className={styles.dropdown}>
            <span>Hakkımızda</span>
            <div className={styles.dropdownContent}>
              <Link href="/about/history" onClick={handleLinkClick}>
                Derneğimizin Tarihçesi
              </Link>
              <Link href="/about/board" onClick={handleLinkClick}>
                Yönetim Kurulu
              </Link>
              <Link href="/about/statute" onClick={handleLinkClick}>
                Dernek Tüzüğü
              </Link>
              <Link href="/about/bank-accounts" onClick={handleLinkClick}>
                Banka Hesapları
              </Link>
              <Link href="/about/blood-bank" onClick={handleLinkClick}>
                Kan Bankası
              </Link>
            </div>
          </div>
          <Link href="/news" onClick={handleLinkClick}>
            Haberler
          </Link>
          <Link href="/projects" onClick={handleLinkClick}>
            Projeler
          </Link>
          <Link href="/gallery" onClick={handleLinkClick}>
            Galeri
          </Link>
          <Link href="/contact" onClick={handleLinkClick}>
            İletişim
          </Link>
          <Link 
            href="/donate" 
            onClick={handleLinkClick}
            className={styles.donateButton}
          >
            <FaHandHoldingHeart className={styles.donateIcon} />
            Bağış Yap
          </Link>
        </div>
      </div>
    </nav>
  );
} 