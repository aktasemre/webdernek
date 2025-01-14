'use client';

import { Suspense } from 'react';

// Arama formu komponenti (client component)
function SearchForm() {
  return (
    <form action="/search" method="GET" className="mb-8">
      <input
        type="text"
        name="q"
        placeholder="Arama yapın..."
        className="p-2 border rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-green-900 text-white rounded">
        Ara
      </button>
    </form>
  );
}

// Yükleme komponenti
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-900"></div>
    </div>
  );
}

// Ana sayfa komponenti (server component)
export default function SearchPage({ searchParams }) {
  const query = searchParams?.q || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <Suspense fallback={<LoadingSpinner />}>
          <SearchForm />
          <div className="grid gap-4">
            {query && (
              <h2 className="text-xl font-semibold">
                "{query}" için arama sonuçları
              </h2>
            )}
            {/* Arama sonuçları buraya gelecek */}
          </div>
        </Suspense>
      </div>
    </div>
  );
} 