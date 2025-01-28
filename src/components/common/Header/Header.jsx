'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaClipboardList,
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaMapMarkerAlt,
  FaUserCog,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser
} from 'react-icons/fa';
import styles from './Header.module.scss';
import iletisimData from '@/data/iletisim.data.json';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(`.${styles.dropdown}`)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/images/logo.jpg"
              alt="Arslandede Köyü Derneği Logo"
              width={64}
              height={64}
              className={styles.logoImage}
              priority
            />
            <span>Arslandede Köyü</span>
          </Link>

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`${styles.menu} ${isOpen ? styles.active : ''}`} aria-hidden={!isOpen}>
            <Link href="/" className={styles.menuItem} onClick={closeMenu}></Link>

            <div className={styles.dropdown} onClick={() => toggleDropdown('village')}>
              <span className={styles.menuItem}>
                Köyümüz
                <FaChevronDown
                  className={`${styles.dropdownIcon} ${activeDropdown === 'village' ? styles.active : ''}`}
                />
              </span>
              <div
                className={`${styles.dropdownContent} ${activeDropdown === 'village' ? styles.show : ''}`}
              >
                <Link href="/about/village" onClick={closeMenu}>
                  Köyümüz Hakkında
                </Link>
                <Link href="/about/village/history" onClick={closeMenu}>
                  Köyümüzün Tarihi
                </Link>
                <Link
                  href="/about/village/geography"
                  onClick={closeMenu}
                  className={styles.dropdownLink}
                >
                  <FaMapMarkerAlt className={styles.menuIcon} />
                  <span>Coğrafi Yapı</span>
                </Link>
                <Link href="/about/village/population" onClick={closeMenu}>
                  Nüfus ve Yerleşim
                </Link>
                <Link href="/about/village/economy" onClick={closeMenu}>
                  Ekonomik Yapı
                </Link>
                <Link href="/about/village/education" onClick={closeMenu}>
                  Eğitim ve Kültür
                </Link>
                <Link href="/about/village/places" onClick={closeMenu}>
                  Gezilecek Yerler
                </Link>
              </div>
            </div>

            <div className={styles.dropdown} onClick={() => toggleDropdown('association')}>
              <span className={styles.menuItem}>
                Derneğimiz
                <FaChevronDown
                  className={`${styles.dropdownIcon} ${activeDropdown === 'association' ? styles.active : ''}`}
                />
              </span>
              <div
                className={`${styles.dropdownContent} ${activeDropdown === 'association' ? styles.show : ''}`}
              >
                <Link href="/about/history" onClick={closeMenu}>
                  Derneğimizin Tarihçesi
                </Link>
                <Link href="/about/board" onClick={closeMenu}>
                  Yönetim Kurulu
                </Link>
                <Link href="/about/statute" onClick={closeMenu}>
                  Dernek Tüzüğü
                </Link>
                <Link href="/about/founders" onClick={closeMenu}>
                  Kurucularımız
                </Link>
                <Link href="/about/members" onClick={closeMenu}>
                  Üyelerimiz
                </Link>
              </div>
            </div>

            <Link href="/gallery" className={styles.menuItem} onClick={closeMenu}>
              Galeri
            </Link>
            <Link href="/projects" className={styles.menuItem} onClick={closeMenu}>
              Projeler
            </Link>
            <Link href="/news" className={styles.menuItem} onClick={closeMenu}>
              Haberler
            </Link>
            <Link href="/contact" className={styles.menuItem} onClick={closeMenu}>
              İletişim
            </Link>

            <div className={styles.searchContainer} ref={searchRef}>
              <button className={styles.searchButton} onClick={toggleSearch} aria-label="Arama">
                <FaSearch />
              </button>
              {isSearchOpen && (
                <div className={styles.searchBox}>
                  <input
                    type="text"
                    placeholder="Site içinde arama yapın..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                  <button className={styles.searchSubmit} onClick={handleSearch} aria-label="Ara">
                    <FaSearch />
                  </button>
                </div>
              )}
            </div>

            <a
              href={iletisimData.butce}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.surveyButton}
              onClick={closeMenu}
            >
              <FaClipboardList /> Dernek butcesi
            </a>

            <div className={styles.rightSection}>
              {status === 'authenticated' && session?.user ? (
                <div className={styles.userMenu} ref={dropdownRef}>
                  <button 
                    className={styles.userButton}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <FaUser />
                    <span>{session.user.name || session.user.email.split('@')[0]}</span>
                    <FaChevronDown className={isDropdownOpen ? styles.rotated : ''} />
                  </button>

                  {isDropdownOpen && (
                    <div className={styles.dropdown}>
                      <Link href="/admin" className={styles.dropdownItem}>
                        <FaUserCog />
                        <span>Dashboard</span>
                      </Link>
                      <button 
                        className={styles.dropdownItem}
                        onClick={() => signOut()}
                      >
                        <FaSignOutAlt />
                        <span>Çıkış Yap</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/auth/login" className={styles.loginButton}>
                  <FaSignInAlt />
                  <span>Giriş Yap</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
