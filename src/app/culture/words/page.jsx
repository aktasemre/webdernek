'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';

const WordsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const words = [
    {
      word: "Zıbar",
      meaning: "Yatmak, uyumak",
      example: "Hadi zıbar artık, geç oldu"
    },
    {
      word: "Çiğsemek",
      meaning: "Hafif yağmur yağması",
      example: "Hava çiğsiyor, içeri girelim"
    },
    {
      word: "Hellenmek",
      meaning: "Yorulmak, bitkin düşmek",
      example: "Bugün çok hellendim"
    },
    {
      word: "Gırnata",
      meaning: "Sürekli konuşan, çok konuşkan",
      example: "Ne gırnata adamsın be"
    },
    {
      word: "Zangırdamak",
      meaning: "Titremek, sallanmak",
      example: "Soğuktan zangır zangır titriyor"
    },
    {
      word: "Höykürme",
      meaning: "Bağırmak, yüksek sesle konuşmak",
      example: "Ne höykürüp duruyorsun?"
    },
    {
      word: "Cıncık",
      meaning: "Küçük cam parçası, boncuk",
      example: "Yerde cıncıklar var, dikkat et"
    },
    {
      word: "Eğleşmek",
      meaning: "Oyalanmak, vakit geçirmek",
      example: "Biraz eğleşip gideriz"
    },
    {
      word: "Gıdım",
      meaning: "Çok az, azıcık",
      example: "Bir gıdım su ver"
    },
    {
      word: "İlişmek",
      meaning: "Hafifçe oturmak, kısa süre oturmak",
      example: "Şöyle ilişiver biraz"
    }
  ];

  const filteredWords = words.filter(item =>
    item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.wordsPage}>
      <div className={styles.container}>
        <h1>Yerel Kelimeler</h1>
        <p className={styles.intro}>
          Köyümüzde kullanılan yerel kelimeleri ve anlamlarını burada bulabilirsiniz. 
          Bu kelimeler, yöremizin kültürel zenginliğini yansıtmaktadır.
        </p>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Kelime veya anlam ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.wordsList}>
          {filteredWords.map((item, index) => (
            <div key={index} className={styles.wordItem}>
              <h3>{item.word}</h3>
              <p className={styles.meaning}>{item.meaning}</p>
              <p className={styles.example}>Örnek: {item.example}</p>
            </div>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <p className={styles.noResults}>
            Aradığınız kelime bulunamadı.
          </p>
        )}
      </div>
    </div>
  );
};

export default WordsPage; 