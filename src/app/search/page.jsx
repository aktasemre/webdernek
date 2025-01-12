'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q');
    if (!query) return;

    setLoading(true);
    // Burada arama işlemini gerçekleştirin
    // Örnek olarak:
    const searchResults = [
      // ... arama sonuçları
    ];
    setResults(searchResults);
    setLoading(false);
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Arama Sonuçları</h1>
      
      {loading ? (
        <div>Aranıyor...</div>
      ) : results.length > 0 ? (
        <div className="grid gap-4">
          {results.map((result) => (
            <div key={result.id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{result.title}</h2>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Sonuç bulunamadı.</div>
      )}
    </div>
  );
}