import Image from 'next/image';
import styles from './GeographyContent.module.scss';
import LocationInfo from './LocationInfo/LocationInfo';
import VegetationInfo from './VegetationInfo/VegetationInfo';

const climateData = {
  seasons: [
    {
      name: 'İlkbahar',
      months: 'Mart - Mayıs',
      temperature: '8°C - 18°C',
      precipitation: 'Orta düzeyde yağış',
      description: 'Ilıman ve yağışlı bir dönem. Bitki örtüsü canlanır, çiçeklenme başlar.',
    },
    {
      name: 'Yaz',
      months: 'Haziran - Ağustos',
      temperature: '20°C - 30°C',
      precipitation: 'Az yağış',
      description: 'Sıcak ve kurak bir dönem. Tarımsal faaliyetler yoğunlaşır.',
    },
    {
      name: 'Sonbahar',
      months: 'Eylül - Kasım',
      temperature: '10°C - 20°C',
      precipitation: 'Orta düzeyde yağış',
      description: 'Ilıman ve yağışlı bir dönem. Hasat zamanı ve doğa renklenir.',
    },
    {
      name: 'Kış',
      months: 'Aralık - Şubat',
      temperature: '-5°C - 5°C',
      precipitation: 'Kar yağışlı',
      description: "Soğuk ve karlı bir dönem. Kar kalınlığı 50 cm'yi bulabilir.",
    },
  ],
};

const GeographyContent = () => {
  return (
    <div className={styles.geographyContent}>
      <h2>Coğrafi Konum</h2>
      <div className={styles.header}>
        <h1>Coğrafi Yapı ve İklim</h1>
        <div className={styles.introduction}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/manzara1.jpg"
              alt="Arslandede Köyü Coğrafi Görünüm"
              width={800}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.text}>
            <p>
              Arslandede köyü, Bayburt ilinin güneydoğusunda, deniz seviyesinden 1650 metre
              yükseklikte yer almaktadır. Dağlarla çevrili verimli bir vadide konumlanan köyümüz,
              zengin bir doğal çeşitliliğe sahiptir.
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

      <VegetationInfo />

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
