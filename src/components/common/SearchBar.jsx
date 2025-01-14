'use client';

import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);

    // Örnek arama sonuçları
    const mockResults = [
      { title: 'Dernek Tarihçesi', url: '/about/history', type: 'sayfa' },
      { title: 'Köy Tarihi', url: '/about/village/history', type: 'sayfa' },
      { title: 'Haberler', url: '/news', type: 'sayfa' },
    ];

    setResults(mockResults);
    setIsOpen(value.length > 0);
  };

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Ara..."
          value={query}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <FaSearch className={styles.searchIcon} />
      </div>

      {isOpen && results.length > 0 && (
        <div className={styles.resultsContainer}>
          {results.map((result, index) => (
            <a key={index} href={result.url} className={styles.resultItem}>
              <span className={styles.resultTitle}>{result.title}</span>
              <span className={styles.resultType}>{result.type}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar; 