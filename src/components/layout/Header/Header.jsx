'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


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
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Arslandede Köyü Derneği"
            width={50}
            height={50}
            priority
          />
   
        </Link>

      </div>
    </header>
  );
} 