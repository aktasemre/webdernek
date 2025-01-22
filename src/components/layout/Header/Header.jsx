'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import styles from './Header.module.scss';

const menuItems = [
  { title: 'Ana Sayfa', path: '/' },
  { title: 'Hakkımızda', path: '/about' },
  { title: 'Projeler', path: '/projects' },
  { title: 'Haberler', path: '/news' },
  { title: 'İletişim', path: '/contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className={styles.menuItem}>
              {item.title}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileMenu}>
          <button onClick={handleMenuToggle}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
