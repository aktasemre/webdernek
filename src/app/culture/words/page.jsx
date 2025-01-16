'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';

const WordsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const words = [
    

      {
        word: "Galıf",
        meaning: "Tahta kulübe, bağ evi",
        example: "Yazın galıfta kalırız."
      },
      {
        word: "Germişe",
        meaning: "Meyvesi yenen, çalımsı bir ağaç",
        example: "Germişe meyveleri toplandı."
      },
      {
        word: "Gössüz",
        meaning: "Köstebek",
        example: "Bahçede gössüz yuvası var."
      },
      {
        word: "Kahmut",
        meaning: "Yumru köklü bir tür bitki",
        example: "Kahmutları topladık."
      },
      {
        word: "Künde",
        meaning: "Her gün",
        example: "Künde buraya gelir."
      },
      {
        word: "Meşebe",
        meaning: "Maşrapa",
        example: "Suyu meşebeyle içtik."
      },
      {
        word: "Sımışka",
        meaning: "Ay çekirdeği",
        example: "Akşamları sımışka çitleriz."
      },
      {
        word: "Tehmük",
        meaning: "Tekme",
        example: "Topa bir tehmük attı."
      },
      {
        word: "Zap",
        meaning: "Genellikle bakliyat konulan büyük çömlek küp",
        example: "Fasulyeleri zapa koyduk."
      },
      {
        word: "Zıbar",
        meaning: "Yatmak, uyumak",
        example: "Hadi zıbar artık, geç oldu."
      },
      {
        word: "Çiğsemek",
        meaning: "Hafif yağmur yağması",
        example: "Hava çiğsiyor, içeri girelim."
      },
      {
        word: "Hellenmek",
        meaning: "Yorulmak, bitkin düşmek",
        example: "Bugün çok hellendim."
      },
      {
        word: "Gırnata",
        meaning: "Sürekli konuşan, çok konuşkan",
        example: "Ne gırnata adamsın be!"
      },
      {
        word: "Zangırdamak",
        meaning: "Titremek, sallanmak",
        example: "Soğuktan zangır zangır titriyor."
      },
      {
        word: "Höykürmek",
        meaning: "Bağırmak, yüksek sesle konuşmak",
        example: "Ne höykürüp duruyorsun?"
      },
      {
        word: "Cıncık",
        meaning: "Küçük cam parçası, boncuk",
        example: "Yerde cıncıklar var, dikkat et."
      },
      {
        word: "Eğleşmek",
        meaning: "Oyalanmak, vakit geçirmek",
        example: "Biraz eğleşip gideriz."
      },
      {
        word: "Gıdım",
        meaning: "Çok az, azıcık",
        example: "Bir gıdım su ver."
      },
      {
        word: "İlişmek",
        meaning: "Hafifçe oturmak, kısa süre oturmak",
        example: "Şöyle ilişiver biraz."
      },
      {
        word: "Corcolos",
        meaning: "Karın erimiş, sulanmış hali",
        example: "Dışarıda corcolos var, dikkatli yürü."
      },
      {
        word: "Corma",
        meaning: "Bataklık",
        example: "O tarla corma olmuş, oraya gitmeyelim."
      },
      {
        word: "Cumurla",
        meaning: "Katlayıp toplamak, buruşturmak",
        example: "Bu kağıdı cumurlama, düzgün tut."
      },
      {
        word: "Debbe",
        meaning: "Bakırdan yapılmış bir tür güğüm",
        example: "Suyu debbeyle taşıdık."
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