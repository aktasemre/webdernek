'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from '../common/SearchBar';
import getData from '@/utils/getData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const genel = getData('genel');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Header içeriği */}
    </header>
  );
} 