import React from 'react';
import styles from './PopulationContent.module.scss';

const populationStats = {
  total: 450,
  households: 120,
  distribution: {
    age: [
      { group: '0-14 yaş', percentage: 15 },
      { group: '15-29 yaş', percentage: 25 },
      { group: '30-44 yaş', percentage: 20 },
      { group: '45-59 yaş', percentage: 25 },
      { group: '60+ yaş', percentage: 15 },
    ],
    gender: {
      male: 52,
      female: 48,
    },
    education: [
      { level: 'İlkokul', percentage: 25 },
      { level: 'Ortaokul', percentage: 20 },
      { level: 'Lise', percentage: 30 },
      { level: 'Üniversite', percentage: 20 },
      { level: 'Lisansüstü', percentage: 5 },
    ],
  },
};

const settlementInfo = {
  neighborhoods: [
    {
      name: 'Merkez Mahallesi',
      description: 'Köyün en eski yerleşim yeri olup, cami ve köy meydanını içerir.',
      population: 180,
    },
    {
      name: 'Yukarı Mahalle',
      description: 'Köyün kuzey kesiminde yer alan, yeni yerleşim alanlarını içeren mahalle.',
      population: 150,
    },
    {
      name: 'Aşağı Mahalle',
      description: 'Köyün güney kesiminde, tarım alanlarına yakın konumda bulunan mahalle.',
      population: 120,
    },
  ],
  housing: {
    traditional: {
      title: 'Geleneksel Evler',
      description: 'Taş ve ahşap malzemelerle inşa edilmiş, Bayburt mimarisini yansıtan evler.',
      percentage: 40,
    },
    modern: {
      title: 'Modern Konutlar',
      description: 'Son yıllarda yapılan, betonarme yapılar ve müstakil evler.',
      percentage: 60,
    },
  },
};

const migrationInfo = {
  destinations: ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Almanya'],
  reasons: ['Eğitim', 'İş İmkanları', 'Ekonomik Nedenler', 'Sağlık Hizmetleri'],
  trends: {
    outgoing: 'Yıllık ortalama 5-10 hane',
    incoming: 'Yaz aylarında nüfus 2-3 katına çıkmaktadır',
    seasonal: 'Yaz aylarında gurbetçi ziyaretleri yoğunlaşmaktadır',
  },
};

const PopulationContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.populationContent}>
        <h1>Nüfus ve Yerleşim</h1>
        <div className={styles.introduction}>
          <p>
            Arslandede köyü, geleneksel yerleşim dokusunu korurken modern yaşamın gerekliliklerine
            de uyum sağlayan dinamik bir nüfus yapısına sahiptir.
          </p>
        </div>

        <div className={styles.statistics}>
          <h2>Nüfus İstatistikleri</h2>
          <div className={styles.mainStats}>
            <div className={styles.statCard}>
              <h3>Toplam Nüfus</h3>
              <div className={styles.value}>{populationStats.total}</div>
            </div>
            <div className={styles.statCard}>
              <h3>Hane Sayısı</h3>
              <div className={styles.value}>{populationStats.households}</div>
            </div>
          </div>

          <div className={styles.distributions}>
            <div className={styles.ageDistribution}>
              <h3>Yaş Dağılımı</h3>
              <div className={styles.bars}>
                {populationStats.distribution.age.map((item, index) => (
                  <div key={index} className={styles.bar}>
                    <div className={styles.label}>{item.group}</div>
                    <div className={styles.barContainer}>
                      <div className={styles.barFill} style={{ width: `${item.percentage}%` }} />
                    </div>
                    <div className={styles.percentage}>{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.genderDistribution}>
              <h3>Cinsiyet Dağılımı</h3>
              <div className={styles.genderChart}>
                <div
                  className={styles.male}
                  style={{ width: `${populationStats.distribution.gender.male}%` }}
                >
                  Erkek {populationStats.distribution.gender.male}%
                </div>
                <div
                  className={styles.female}
                  style={{ width: `${populationStats.distribution.gender.female}%` }}
                >
                  Kadın {populationStats.distribution.gender.female}%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.settlement}>
          <h2>Yerleşim Yapısı</h2>
          <div className={styles.neighborhoods}>
            {settlementInfo.neighborhoods.map((neighborhood, index) => (
              <div key={index} className={styles.neighborhoodCard}>
                <h3>{neighborhood.name}</h3>
                <p>{neighborhood.description}</p>
                <div className={styles.population}>Nüfus: {neighborhood.population}</div>
              </div>
            ))}
          </div>

          <div className={styles.housing}>
            <h3>Konut Yapısı</h3>
            <div className={styles.housingTypes}>
              {Object.entries(settlementInfo.housing).map(([key, type]) => (
                <div key={key} className={styles.housingCard}>
                  <h4>{type.title}</h4>
                  <p>{type.description}</p>
                  <div className={styles.percentage}>{type.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.migration}>
          <h2>Göç Durumu</h2>
          <div className={styles.migrationInfo}>
            <div className={styles.destinations}>
              <h3>Başlıca Göç Yerleri</h3>
              <ul>
                {migrationInfo.destinations.map((destination, index) => (
                  <li key={index}>{destination}</li>
                ))}
              </ul>
            </div>
            <div className={styles.reasons}>
              <h3>Göç Nedenleri</h3>
              <ul>
                {migrationInfo.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
            <div className={styles.trends}>
              <h3>Göç Eğilimleri</h3>
              <p>
                <strong>Dışa Göç:</strong> {migrationInfo.trends.outgoing}
              </p>
              <p>
                <strong>İçe Göç:</strong> {migrationInfo.trends.incoming}
              </p>
              <p>
                <strong>Mevsimsel:</strong> {migrationInfo.trends.seasonal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulationContent;
