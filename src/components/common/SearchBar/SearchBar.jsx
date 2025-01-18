'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.scss';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, placeholder = 'Ara...' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      // Arama sonuçlarını filtrele
      const searchResults = onSearch(value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {results.length > 0 && (
        <div className={styles.resultsContainer}>
          {results.map((result) => (
            <a key={result.id} href={result.link} className={styles.resultItem}>
              <span className={styles.resultTitle}>{result.title}</span>
              <span className={styles.resultType}>{result.type}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
