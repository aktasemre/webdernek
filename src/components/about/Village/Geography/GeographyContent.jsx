import Image from 'next/image';
import styles from './GeographyContent.module.scss';
import BackButton from '@/components/common/BackButton/BackButton';
import LocationInfo from './LocationInfo/LocationInfo';

const climateData = {
  seasons: [
    {
      name: 'İlkbahar',
      months: 'Mart - Mayıs',
      temperature: '8°C - 18°C',
      precipitation: 'Orta düzeyde yağış',
      description: 'Ilıman ve yağışlı bir dönem. Bitki örtüsü canlanır, çiçeklenme başlar.'
    },
    {
      name: 'Yaz',
      months: 'Haziran - Ağustos',
      temperature: '20°C - 30°C',
      precipitation: 'Az yağış',
      description: 'Sıcak ve kurak bir dönem. Tarımsal faaliyetler yoğunlaşır.'
    },
    {
      name: 'Sonbahar',
      months: 'Eylül - Kasım',
      temperature: '10°C - 20°C',
      precipitation: 'Orta düzeyde yağış',
      description: 'Ilıman ve yağışlı bir dönem. Hasat zamanı ve doğa renklenir.'
    },
    {
      name: 'Kış',
      months: 'Aralık - Şubat',
      temperature: '-5°C - 5°C',
      precipitation: 'Kar yağışlı',
      description: 'Soğuk ve karlı bir dönem. Kar kalınlığı 50 cm\'yi bulabilir.'
    }
  ]
};

const vegetation = [
  {
    type: 'Ağaçlar',
    species: ['Çam', 'Meşe', 'Kavak', 'Söğüt', 'Ardıç']
  },
  {
    type: 'Meyve Ağaçları',
    species: ['Elma', 'Armut', 'Erik', 'Ceviz', 'Dut']
  },
  {
    type: 'Otsu Bitkiler',
    species: ['Kekik', 'Nane', 'Papatya', 'Adaçayı', 'Isırgan']
  },
  {
    type: 'Tarım Bitkileri',
    species: ['Buğday', 'Arpa', 'Yonca', 'Patates', 'Fasulye']
  }
];

const GeographyContent = () => {
  return (
    <div className={styles.geographyContent}>
      <BackButton />
      <div className={styles.header}>
        <h1>Coğrafi Yapı ve İklim</h1>
        <div className={styles.introduction}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/manzara1.jpg"
              alt="Arslandede Köyü Coğrafi Görünüm"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.text}>
            <p>
              Arslandede köyü, Bayburt ilinin güneydoğusunda, deniz seviyesinden
              1650 metre yükseklikte yer almaktadır. Dağlarla çevrili verimli bir
              vadide konumlanan köyümüz, zengin bir doğal çeşitliliğe sahiptir.
            </p>
          </div>
        </div>
      </div>

      <LocationInfo />

      <div className={styles.climate}>
        <h2>İklim Özellikleri</h2>
        <div className={styles.seasons}>
          {climateData.seasons.map((season, index) => (
            <div key={index} className={styles.seasonCard}>
              <h3>{season.name}</h3>
              <div className={styles.details}>
                <div className={styles.info}>
                  <span>Aylar:</span>
                  <span>{season.months}</span>
                </div>
                <div className={styles.info}>
                  <span>Sıcaklık:</span>
                  <span>{season.temperature}</span>
                </div>
                <div className={styles.info}>
                  <span>Yağış:</span>
                  <span>{season.precipitation}</span>
                </div>
              </div>
              <p>{season.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.vegetation}>
        <h2>Bitki Örtüsü</h2>
        <div className={styles.vegetationContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/manzara3.jpg"
              alt="Arslandede Köyü Bitki Örtüsü"
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.types}>
            {vegetation.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h3>{type.type}</h3>
                <ul>
                  {type.species.map((species, i) => (
                    <li key={i}>{species}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.resources}>
        <h2>Doğal Kaynaklar</h2>
        <div className={styles.resourcesGrid}>
          <div className={styles.resourceCard}>
            <h3>Su Kaynakları</h3>
            <ul>
              <li>Doğal kaynak suları</li>
              <li>Dereler</li>
              <li>Yeraltı suları</li>
            </ul>
          </div>
          <div className={styles.resourceCard}>
            <h3>Toprak Yapısı</h3>
            <ul>
              <li>Verimli tarım arazileri</li>
              <li>Çayır ve meralar</li>
              <li>Orman alanları</li>
            </ul>
          </div>
          <div className={styles.resourceCard}>
            <h3>Madenler</h3>
            <ul>
              <li>Kireç taşı ocakları</li>
              <li>Taş ocakları</li>
              <li>Kum ocakları</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographyContent; 