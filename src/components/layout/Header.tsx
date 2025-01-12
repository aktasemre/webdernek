'use client';

import Link from 'next/link';
import SearchBar from '../common/SearchBar';
import { getData } from '@/utils/getData';

export default function Header() {
  const genel = getData('genel');

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo ve Dernek Adı */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            <h1 className="ml-2 text-2xl font-bold text-gray-800">
              {genel.dernekAdi}
            </h1>
          </Link>

          {/* Arama Çubuğu */}
          <div className="w-1/3">
            <SearchBar />
          </div>

          {/* İletişim Bilgileri */}
          <div className="text-right">
            <p className="text-gray-600">{genel.iletisim.telefon}</p>
            <p className="text-gray-600">{genel.iletisim.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
} 