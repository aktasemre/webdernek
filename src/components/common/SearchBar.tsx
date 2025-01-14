'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

const SearchInput = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="flex items-center">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Ara..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
      </div>
      <button
        className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => handleSearch(query)}
      >
        Ara
      </button>
    </div>
  );
};

const SearchResults = ({ results, isLoading, error }) => {
  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
      <div className="p-2">
        {results.map((result) => (
          <a
            key={`${result.tip}-${result.id}`}
            href={result.url}
            className="block p-2 hover:bg-gray-100 rounded-lg"
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
  );
};

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);

  // Dışarı tıklandığında sonuçları kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = useCallback(async (searchQuery) => {
    setQuery(searchQuery);
    setError(null);
    
    if (searchQuery.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    try {
      // Simulated data retrieval
      const duyurular = [
        { id: 1, baslik: 'Duyuru 1', icerik: 'Duyuru 1 içeriği', tip: 'duyuru', url: '/duyurular/1' },
        { id: 2, baslik: 'Duyuru 2', icerik: 'Duyuru 2 içeriği', tip: 'duyuru', url: '/duyurular/2' }
      ];

      const etkinlikler = [
        { id: 1, baslik: 'Etkinlik 1', icerik: 'Etkinlik 1 açıklaması', tip: 'etkinlik', url: '/etkinlikler/1' },
        { id: 2, baslik: 'Etkinlik 2', icerik: 'Etkinlik 2 açıklaması', tip: 'etkinlik', url: '/etkinlikler/2' }
      ];

      const haberler = [
        { id: 1, baslik: 'Haber 1', icerik: 'Haber 1 içeriği', tip: 'haber', url: '/haberler/1' },
        { id: 2, baslik: 'Haber 2', icerik: 'Haber 2 içeriği', tip: 'haber', url: '/haberler/2' }
      ];

      const projeler = [
        { id: 1, baslik: 'Proje 1', icerik: 'Proje 1 açıklaması', tip: 'proje', url: '/projeler/1' },
        { id: 2, baslik: 'Proje 2', icerik: 'Proje 2 açıklaması', tip: 'proje', url: '/projeler/2' }
      ];

      const searchResults = [
        ...duyurular,
        ...etkinlikler,
        ...haberler,
        ...projeler
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
      <SearchInput 
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
      {isOpen && (
        <SearchResults
          results={results}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
} 