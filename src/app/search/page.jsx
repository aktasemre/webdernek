'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { searchContent } from '@/data';
import { FaSearch } from 'react-icons/fa';
import styles from './page.module.scss';

export default function SearchPage({ searchParams }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams?.q || '';

  useEffect(() => {
    if (query) {
      setLoading(true);
      const searchResults = searchContent(query);
      setResults(searchResults);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className={styles.searchPage}>
      <div className={styles.container}>
        <form action="/search" method="GET" className={styles.searchForm}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Site içinde arama yapın..."
              className={styles.searchInput}
            />
          </div>
          <button type="submit" className={styles.searchButton}>
            Ara
          </button>
        </form>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <span>Aranıyor...</span>
          </div>
        ) : (
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
                        src={result.image}
                        alt={result.baslik}
                        width={200}
                        height={150}
                        quality={75}
                        loading="lazy"
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
        )}
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  searchParams: PropTypes.shape({
    q: PropTypes.string,
  }),
};
