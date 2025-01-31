import Image from 'next/image';
import styles from './PlacesContent.module.scss';

const historicalPlaces = [
  {
    name: 'Arslan Dede Türbesi',
    description:
      "Köyümüze adını veren Arslan Dede'nin türbesi, yüzyıllardır önemli bir ziyaret yeridir. Osmanlı döneminden kalma türbe, geleneksel mimari özellikleri taşımaktadır.",
    history: '16. yüzyılda inşa edilmiştir.',
    features: [
      'Osmanlı mimarisi',
      'Tarihi mezar taşları',
      'Geleneksel süslemeler',
      'Manevi atmosfer',
    ],
    image: '/images/manzara1.jpg',
  },
  {
    name: 'Tarihi Cami',
    description:
      'Köyün merkezinde yer alan tarihi cami, Osmanlı döneminden günümüze ulaşan önemli bir mimari eserdir. Ahşap işçiliği ve taş süslemeleriyle dikkat çeker.',
    history: '17. yüzyılda inşa edilmiştir.',
    features: ['Ahşap minber', 'Taş işçiliği', 'Hat yazıları', 'Tarihi mihrap'],
    image: '/images/manzara2.jpg',
  },
];

const naturalPlaces = [
  {
    name: 'Arslandede Yaylası',
    description:
      'Köyün 5 km kuzeyinde yer alan yayla, zengin flora ve faunasıyla doğa tutkunlarını bekliyor. Yaz aylarında geleneksel yayla şenlikleri düzenlenir.',
    activities: ['Doğa yürüyüşü', 'Kamp yapma', 'Fotoğraf çekimi', 'Botanik gözlem'],
    bestSeason: 'Haziran-Eylül arası',
    image: '/images/manzara3.jpg',
  },
  {
    name: 'Şifalı Su Kaynağı',
    description:
      'Köyün doğusunda bulunan şifalı su kaynağı, mineral açısından zengin yapısıyla bilinir. Yöre halkı tarafından yüzyıllardır kullanılmaktadır.',
    benefits: [
      'Mide rahatsızlıklarına iyi gelir',
      'Cilt hastalıklarında faydalıdır',
      'Mineral açısından zengindir',
    ],
    bestSeason: 'Tüm yıl boyunca',
    image: '/images/manzara1.jpg',
  },
];

const culturalPlaces = [
  {
    name: 'Köy Konağı',
    description:
      'Geleneksel Bayburt mimarisinin güzel bir örneği olan köy konağı, misafirleri ağırlamak için kullanılır. El sanatları sergisi ve yerel ürünler burada sergilenir.',
    activities: [
      'El sanatları sergisi',
      'Yöresel yemek ikramı',
      'Kültürel etkinlikler',
      'Geleneksel müzik dinletileri',
    ],
    image: '/images/manzara2.jpg',
  },
  {
    name: 'Etnografya Evi',
    description:
      'Köyün geçmişini ve kültürel mirasını yaşatan etnografya evi, geleneksel eşyalar ve el sanatı ürünlerini sergiler.',
    exhibits: [
      'Geleneksel kıyafetler',
      'El dokuma kilimler',
      'Tarihi ev eşyaları',
      'Tarım aletleri',
    ],
    image: '/images/manzara3.jpg',
  },
];

const PlacesContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.placesContent}>
        <h1>Gezilecek Yerler</h1>

        <div className={styles.introduction}>
          <p>
            Arslandede köyü, tarihi, doğal ve kültürel zenginlikleriyle ziyaretçilerine unutulmaz
            deneyimler sunar. Osmanlı döneminden kalma tarihi yapılar, el değmemiş doğal güzellikler
            ve zengin kültürel miras, köyümüzü keşfedilmeyi bekleyen bir hazine haline getiriyor.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Tarihi Mekanlar</h2>
          <div className={styles.places}>
            {historicalPlaces.map((place, index) => (
              <div key={index} className={styles.placeCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.content}>
                  <h3>{place.name}</h3>
                  <p className={styles.description}>{place.description}</p>
                  <div className={styles.history}>{place.history}</div>
                  <div className={styles.features}>
                    <h4>Özellikler</h4>
                    <ul>
                      {place.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Doğal Güzellikler</h2>
          <div className={styles.places}>
            {naturalPlaces.map((place, index) => (
              <div key={index} className={styles.placeCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.content}>
                  <h3>{place.name}</h3>
                  <p className={styles.description}>{place.description}</p>
                  <div className={styles.activities}>
                    <h4>Aktiviteler</h4>
                    <ul>
                      {place.activities
                        ? place.activities.map((activity, i) => <li key={i}>{activity}</li>)
                        : place.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                    </ul>
                  </div>
                  <div className={styles.season}>En İyi Ziyaret Zamanı: {place.bestSeason}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Kültürel Mekanlar</h2>
          <div className={styles.places}>
            {culturalPlaces.map((place, index) => (
              <div key={index} className={styles.placeCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.content}>
                  <h3>{place.name}</h3>
                  <p className={styles.description}>{place.description}</p>
                  <div className={styles.activities}>
                    <h4>{place.activities ? 'Etkinlikler' : 'Sergilenen Eserler'}</h4>
                    <ul>
                      {place.activities
                        ? place.activities.map((activity, i) => <li key={i}>{activity}</li>)
                        : place.exhibits.map((exhibit, i) => <li key={i}>{exhibit}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visitInfo}>
          <h2>Ziyaret Bilgileri</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Ulaşım</h3>
              <p>
                Köyümüze Bayburt merkeze 15 km mesafede olup, düzenli minibüs seferleri
                bulunmaktadır. Özel araçla ulaşım için asfalt yol mevcuttur.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Konaklama</h3>
              <p>
                Köy konağında ve geleneksel evlerde konaklama imkanı sunulmaktadır. Rezervasyon için
                muhtarlık ile iletişime geçebilirsiniz.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>İletişim</h3>
              <p>
                Ziyaret ve konaklama için önceden bilgi almak isteyenler muhtarlık ile iletişime
                geçebilir. Tel: 0XXX XXX XX XX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesContent;
