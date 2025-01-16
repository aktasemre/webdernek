'use client';

import React, { useState } from 'react';
import styles from './page.module.scss';

const ProverbsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const proverbs = [
    {
      proverb: "Ağaç yaşken eğilir",
      meaning: "Eğitim ve terbiye çocuk yaşta verilmelidir"
    },
    {
      proverb: "Ak akçe kara gün içindir",
      meaning: "Para, zor zamanlarda kullanılmak üzere biriktirilmelidir"
    },
    {
      proverb: "Bakarsan bağ, bakmazsan dağ olur",
      meaning: "İlgi ve emek verilen şey gelişir, verimli olur"
    },
    {
      proverb: "Damlaya damlaya göl olur",
      meaning: "Küçük birikimler zamanla büyük değerlere ulaşır"
    },
    {
      proverb: "El elden üstündür",
      meaning: "Her zaman daha iyisi vardır"
    },
    {
      proverb: "Gülü seven dikenine katlanır",
      meaning: "Bir şeyi seven, onun zorluklarına da katlanır"
    },
    {
      proverb: "İşleyen demir pas tutmaz",
      meaning: "Sürekli çalışan, kendini geliştiren kişi körelip geri kalmaz"
    },
    {
      proverb: "Komşu komşunun külüne muhtaçtır",
      meaning: "İnsanlar birbirlerine her zaman yardıma ihtiyaç duyarlar"
    },
    {
      proverb: "Mart kapıdan baktırır, kazma kürek yaktırır",
      meaning: "Mart ayı çok soğuk geçer"
    },
    {
      proverb: "Nerede hareket, orada bereket",
      meaning: "Çalışılan, emek verilen yerde kazanç olur"
    }
  ];

  const filteredProverbs = proverbs.filter(item =>
    item.proverb.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.proverbsPage}>
      <div className={styles.container}>
        <h1>Atasözleri ve Deyimler</h1>
        <p className={styles.intro}>
          Köyümüzde sıkça kullanılan atasözleri ve deyimler, atalarımızdan bize miras kalan 
          bilgelik hazineleridir. Bu sözler, hayat tecrübelerini ve toplumsal değerleri yansıtır.
        </p>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Atasözü veya anlam ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.proverbsList}>
          {filteredProverbs.map((item, index) => (
            <div key={index} className={styles.proverbItem}>
              <h3>{item.proverb}</h3>
              <p>{item.meaning}</p>
            </div>
          ))}
        </div>

        {filteredProverbs.length === 0 && (
          <p className={styles.noResults}>
            Aradığınız atasözü bulunamadı.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProverbsPage; 