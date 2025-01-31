'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { searchContent } from '@/data';
import { FaSearch } from 'react-icons/fa';
import styles from './page.module.scss';
import imageLoader from '@/utils/imageLoader';

function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';

  useEffect(() => {
    if (query) {
      setLoading(true);
      const searchResults = searchContent(query);
      setResults(searchResults);
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <span>Aranıyor...</span>
      </div>
    );
  }

  return (
    <>
      {query && (
        <h2 className={styles.resultsTitle}>
          &quot;{query}&quot; için {results.length} sonuç bulundu
        </h2>
      )}

      <div className={styles.results}>
        {results.map((result, index) => (
          <a
            key={`${result.type}-${index}`}
            href={`/${result.type}s/${result.id}`}
            className={styles.resultItem}
          >
            {result.image && (
              <div className={styles.resultImage}>
                <Image
                  loader={imageLoader}
                  src={result.image}
                  alt={result.baslik}
                  width={200}
                  height={150}
                  quality={75}
                  unoptimized
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.resultContent}>
              <span className={styles.resultType}>{result.type}</span>
              <h3>{result.baslik}</h3>
              <p>{result.aciklama || result.ozet}</p>
            </div>
          </a>
        ))}

        {query && results.length === 0 && (
          <div className={styles.noResults}>
            <p>Aramanızla eşleşen sonuç bulunamadı.</p>
            <ul>
              <li>Farklı anahtar kelimeler deneyin</li>
              <li>Daha genel terimler kullanın</li>
              <li>Yazım hatası olmadığından emin olun</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default function SearchPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get('q');
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className={styles.searchPage}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              name="q"
              defaultValue=""
              placeholder="Site içinde arama yapın..."
              className={styles.searchInput}
            />
          </div>
          <button type="submit" className={styles.searchButton}>
            Ara
          </button>
        </form>

        <Suspense
          fallback={
            <div className={styles.loading}>
              <div className={styles.spinner} />
              <span>Yükleniyor...</span>
            </div>
          }
        >
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}
