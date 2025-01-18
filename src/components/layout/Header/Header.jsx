'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.scss';

const menuItems = [
  { title: 'Ana Sayfa', path: '/' },
  {
    title: 'Hakkımızda',
    path: '/about',
    submenu: [
      { title: 'Derneğimiz', path: '/about' },
      { title: 'Köyümüz', path: '/about/village' },
      { title: 'Üyelerimiz', path: '/about/members' },
      { title: 'Yönetim Kurulu', path: '/about/board' }
    ]
  },
  { title: 'Haberler', path: '/news' },
  { title: 'Etkinlikler', path: '/events' },
  { title: 'Galeri', path: '/gallery' },
  { title: 'Dernek Bütçesi', path: '/budget' },
  { title: 'İletişim', path: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Arslandede Köyü Derneği"
            width={50}
            height={50}
            priority
          />
          <span>Arslandede Köyü Derneği</span>
        </Link>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.menu}>
            {menuItems.map((item, index) => (
              <li key={index} className={item.submenu ? styles.hasSubmenu : ''}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={activeSubmenu === index ? styles.active : ''}
                    >
                      {item.title}
                    </button>
                    <ul className={`${styles.submenu} ${activeSubmenu === index ? styles.active : ''}`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.path} onClick={toggleMenu}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.path} onClick={toggleMenu}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
} 