import React from 'react';
import styles from './page.module.scss';

const VillageEconomy = () => {
  return (
    <div className={styles.container}>
      <h1>Arslandedede Köyü Ekonomik Faaliyetler</h1>
      
      <section className={styles.section}>
        <h2>Tarımsal Üretim</h2>
        <div className={styles.subsection}>
          <h3>Tahıl Üretimi</h3>
          <ul>
            <li>Buğday (kışlık ve yazlık çeşitler)</li>
            <li>Arpa</li>
            <li>Yem bitkileri</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3>Sebze Üretimi</h3>
          <p>Köyümüzde yetiştirilen başlıca sebzeler:</p>
          <ul>
            <li>Fasulye (taze ve kuru)</li>
            <li>Domates</li>
            <li>Kabak (bal kabağı ve yazlık kabak)</li>
            <li>Patates</li>
            <li>Soğan ve Sarımsak</li>
            <li>Biber (sivri ve dolmalık)</li>
            <li>Salatalık</li>
            <li>Marul ve yeşillikler</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Hayvancılık</h2>
        <div className={styles.subsection}>
          <h3>Büyükbaş Hayvancılık</h3>
          <ul>
            <li>Süt sığırcılığı</li>
            <li>Besi hayvancılığı</li>
            <li>Süt ve süt ürünleri üretimi (peynir, yoğurt, tereyağı)</li>
          </ul>
        </div>

        <div className={styles.subsection}>
          <h3>Küçükbaş Hayvancılık</h3>
          <ul>
            <li>Koyun yetiştiriciliği</li>
            <li>Keçi yetiştiriciliği</li>
            <li>Yün ve yapağı üretimi</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Örtü Altı Tarım (Seracılık)</h2>
        <p>Modern tarım teknikleriyle yapılan seracılık faaliyetleri:</p>
        <ul>
          <li>Domates seracılığı</li>
          <li>Salatalık üretimi</li>
          <li>Biber çeşitleri</li>
          <li>Mevsim dışı sebze üretimi</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Arıcılık</h2>
        <p>Yüksek rakım ve zengin bitki örtüsü sayesinde kaliteli bal üretimi:</p>
        <ul>
          <li>Çiçek balı üretimi</li>
          <li>Polen üretimi</li>
          <li>Propolis üretimi</li>
          <li>Arı ürünleri</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Yaylacılık</h2>
        <p>Geleneksel yaylacılık faaliyetleri:</p>
        <ul>
          <li>Yayla hayvancılığı</li>
          <li>Yayla sebzeciliği</li>
          <li>Yayla turizmi potansiyeli</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Ekonomik Kalkınma Projeleri</h2>
        <ul>
          <li>Modern seracılık projeleri</li>
          <li>Hayvancılık destekleme projeleri</li>
          <li>Tarımsal kalkınma kooperatifi çalışmaları</li>
          <li>Organik tarım girişimleri</li>
        </ul>
      </section>
    </div>
  );
};

export default VillageEconomy; 