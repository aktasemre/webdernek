'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SideMenu.module.scss';

const menuItems = [
  {
    title: 'Köyümüz Hakkında',
    subItems: [
      { title: 'Köyümüzün Tarihi', path: '/about/village/history' },
      { title: 'Coğrafi Yapı ve İklim', path: '/about/village/geography' },
      { title: 'Nüfus ve Yerleşim', path: '/about/village/population' },
      { title: 'Ekonomik Yapı', path: '/about/village/economy' },
      { title: 'Eğitim ve Kültür', path: '/about/village/education' },
      { title: 'Gezilecek Yerler', path: '/about/village/places' },
    ],
  },
  {
    title: 'Derneğimiz Hakkında',
    subItems: [
      { title: 'Derneğimizin Tarihçesi', path: '/about/history' },
      { title: 'Derneğimizin Tüzüğü', path: '/about/statute' },
      { title: 'Yönetim Kurulu', path: '/about/board' },
      { title: 'Denetleme Kurulu', path: '/about/supervisory' },
      { title: 'Kurucularımız', path: '/about/founders' },
      { title: 'Üyelerimiz', path: '/about/members' },
      { title: 'Banka Hesaplarımız', path: '/about/bank-accounts' },
      { title: 'Yazarlarımız', path: '/about/writers' },
      { title: 'Kan Bankası', path: '/about/blood-bank' },
    ],
  },
];

const SideMenu = () => {
  const [openSections, setOpenSections] = useState([]);
  const pathname = usePathname();

  const toggleSection = (index) => {
    setOpenSections((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  };

  return (
    <div className={styles.sideMenu}>
      {menuItems.map((item, index) => {
        const isOpen = openSections.includes(index);
        const hasActiveLink = item.subItems.some((subItem) => pathname === subItem.path);

        return (
          <div
            key={index}
            className={`${styles.menuSection} ${isOpen ? styles.open : ''} ${hasActiveLink ? styles.hasActive : ''}`}
          >
            <h3 className={styles.sectionTitle} onClick={() => isMobile() && toggleSection(index)}>
              {item.title}
            </h3>
            <ul className={`${styles.subItems} ${isOpen ? styles.open : ''}`}>
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={subItem.path}
                    className={pathname === subItem.path ? styles.active : ''}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SideMenu;
