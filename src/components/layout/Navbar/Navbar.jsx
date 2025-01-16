'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaSearch, FaHeart } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  // Mobil menü açıkken scroll'u engelle
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

  const menuItems = [
    { href: '/', label: 'Ana Sayfa' },
    {
      href: '/about/village',
      label: 'Köyümüz',
      subItems: [
        { href: '/about/village', label: 'Köyümüz Hakkında' },
        { href: '/about/village/history', label: 'Köyümüzün Tarihi' },
        { href: '/about/village/geography', label: 'Coğrafi Yapı' },
        { href: '/about/village/population', label: 'Nüfus ve Yerleşim' },
        { href: '/about/village/economy', label: 'Ekonomik Yapı' },
        { href: '/about/village/education', label: 'Eğitim ve Kültür' },
        { href: '/about/village/places', label: 'Gezilecek Yerler' }
      ]
    },
    {
      href: '/about',
      label: 'Derneğimiz',
      subItems: [
        { href: '/about/history', label: 'Derneğimizin Tarihçesi' },
        { href: '/about/board', label: 'Yönetim Kurulu' },
        { href: '/about/statute', label: 'Dernek Tüzüğü' },
        { href: '/about/founders', label: 'Kurucularımız' },
        { href: '/about/members', label: 'Üyelerimiz' }
      ]
    },
    {
      href: '/gallery',
      label: 'Galeri',
      subItems: [
        { href: '/gallery/photos', label: 'Fotoğraf Galerisi' },
        { href: '/gallery/videos', label: 'Video Galerisi' },
        { href: '/gallery/historical', label: 'Tarihi Fotoğraflar' }
      ]
    },
    { href: '/projects', label: 'Projeler' },
    { href: '/news', label: 'Haberler' },
    { href: '/contact', label: 'İletişim' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMenu = () => {
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
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={closeMenu}
      />
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.jpg"
              alt="Arslandede Köyü Derneği Logo"
              width={50}
              height={50}
              priority
            />
            <span>Arslandede Köyü</span>
          </Link>

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
                  <FaTimes />
                </button>
              </form>
            )}
          </div>

          <button 
            className={styles.menuButton} 
            onClick={toggleMenu}
            aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.menu}>
              {menuItems.map((item) => (
                <li key={item.href} className={styles.menuItem}>
                  {item.subItems ? (
                    <div className={styles.dropdown}>
                      <span className={styles.dropdownTrigger}>
                        {item.label}
                      </span>
                      <ul className={styles.dropdownMenu}>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className={pathname === subItem.href ? styles.active : ''}
                              onClick={closeMenu}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={pathname === item.href ? styles.active : ''}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className={styles.menuItem}>
                <Link href="/donate" className={styles.donateButton} onClick={closeMenu}>
                  <FaHeart /> Bağış Yap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 