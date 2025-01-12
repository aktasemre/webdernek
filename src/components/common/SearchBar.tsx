'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { SearchResult } from '@/types/data';
import { getDuyurular, getEtkinlikler, getHaberler, getProjeler } from '@/utils/getData';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Dışarı tıklandığında sonuçları kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = useCallback(async (searchQuery: string) => {
    setQuery(searchQuery);
    setError(null);
    
    if (searchQuery.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    try {
      // Tüm verileri al
      const [duyurular, etkinlikler, haberler, projeler] = await Promise.all([
        getDuyurular(),
        getEtkinlikler(),
        getHaberler(),
        getProjeler()
      ]);

      const searchResults: SearchResult[] = [
        ...(duyurular?.map(d => ({
          id: d.id,
          baslik: d.baslik,
          icerik: d.icerik,
          tip: 'duyuru' as const,
          url: `/duyurular/${d.id}`
        })) || []),
        ...(etkinlikler?.map(e => ({
          id: e.id,
          baslik: e.baslik,
          icerik: e.aciklama,
          tip: 'etkinlik' as const,
          url: `/etkinlikler/${e.id}`
        })) || []),
        ...(haberler?.map(h => ({
          id: h.id,
          baslik: h.baslik,
          icerik: h.icerik,
          tip: 'haber' as const,
          url: `/haberler/${h.id}`
        })) || []),
        ...(projeler?.map(p => ({
          id: p.id,
          baslik: p.baslik,
          icerik: p.aciklama,
          tip: 'proje' as const,
          url: `/projeler/${p.id}`
        })) || [])
      ].filter(item => 
        item.baslik.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.icerik.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(searchResults);
      setIsOpen(searchResults.length > 0);
    } catch (err) {
      setError('Arama yapılırken bir hata oluştu');
      console.error('Arama hatası:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Ara..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsOpen(true)}
            className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            disabled={isLoading}
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
        <button
          className={`px-4 py-2 ml-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
            isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={() => handleSearch(query)}
          disabled={isLoading}
        >
          Ara
        </button>
      </div>

      {error && (
        <div className="absolute z-50 w-full mt-2 p-2 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="p-2">
            {results.map((result) => (
              <a
                key={`${result.tip}-${result.id}`}
                href={result.url}
                className="block p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <span className={`px-2 py-1 text-xs text-white rounded ${
                    result.tip === 'duyuru' ? 'bg-red-500' :
                    result.tip === 'etkinlik' ? 'bg-green-500' :
                    result.tip === 'haber' ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`}>
                    {result.tip}
                  </span>
                  <h3 className="ml-2 font-medium">{result.baslik}</h3>
                </div>
                <p className="mt-1 text-sm text-gray-600 truncate">
                  {result.icerik}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 