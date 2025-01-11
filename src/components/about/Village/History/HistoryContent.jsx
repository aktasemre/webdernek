import Image from 'next/image';
import styles from './HistoryContent.module.scss';
import BackButton from '@/components/common/BackButton';

const historicalEvents = [
  {
    year: '1500\'ler',
    title: 'Köyün Kuruluşu',
    description: 'Arslandede köyü, 16. yüzyılın başlarında Arslan Dede isimli bir eren kişinin önderliğinde kurulmuştur. Köyün adı da buradan gelmektedir.',
  },
  {
    year: '1600\'ler',
    title: 'İlk Cami',
    description: 'Köyün ilk camisi inşa edilmiş ve köy merkezi bu cami etrafında şekillenmeye başlamıştır.',
  },
  {
    year: '1700\'ler',
    title: 'Tarım ve Yerleşimin Gelişmesi',
    description: 'Köy nüfusu artmış, tarım alanları genişletilmiş ve yeni mahalleler oluşmaya başlamıştır.',
  },
  {
    year: '1800\'ler',
    title: 'Kültürel Gelişim',
    description: 'El sanatları gelişmiş, kilim dokumacılığı ve ahşap işçiliği köyün önemli zanaat dalları haline gelmiştir.',
  },
  {
    year: '1900\'ler',
    title: 'Modern Dönem',
    description: 'Köye elektrik ve su gibi temel altyapı hizmetleri getirilmiş, eğitim imkanları artmıştır.',
  },
  {
    year: '2000\'ler',
    title: 'Günümüz',
    description: 'Köy derneği kurulmuş, köyün gelişimi için önemli projeler hayata geçirilmeye başlanmıştır.',
  }
];

const culturalHeritage = [
  {
    title: 'Mimari Miras',
    items: [
      'Tarihi Cami',
      'Eski Köy Evleri',
      'Tarihi Çeşmeler',
      'Değirmenler'
    ]
  },
  {
    title: 'El Sanatları',
    items: [
      'Kilim Dokuma',
      'Ahşap İşçiliği',
      'Bakır İşlemeciliği',
      'Yöresel Dokumalar'
    ]
  },
  {
    title: 'Gelenekler',
    items: [
      'Düğün Adetleri',
      'Bayram Gelenekleri',
      'İmece Usulü',
      'Yöresel Oyunlar'
    ]
  }
];

const HistoryContent = () => {
  return (
    <div className={styles.historyContent}>
      <BackButton />
      <div className={styles.header}>
        <h1>Köyümüzün Tarihi</h1>
        <div className={styles.introduction}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/manzara1.jpg"
              alt="Arslandede Köyü Tarihi Görünüm"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.text}>
            <p>
              Arslandede köyü, yüzyıllar boyunca Bayburt'un önemli yerleşim yerlerinden
              biri olmuştur. Zengin tarihi geçmişi, kültürel mirası ve gelenekleriyle
              köyümüz, bölgenin en köklü yerleşimlerinden biridir.
            </p>
            <p>
              Köyümüzün kuruluşu 16. yüzyıla dayanmaktadır. O dönemden günümüze
              kadar pek çok önemli olaya tanıklık etmiş, kültürel değerlerini
              koruyarak bugünlere ulaşmıştır.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.timeline}>
        <h2>Tarihsel Süreç</h2>
        <div className={styles.events}>
          {historicalEvents.map((event, index) => (
            <div key={index} className={styles.event}>
              <div className={styles.year}>{event.year}</div>
              <div className={styles.content}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heritage}>
        <h2>Kültürel Miras</h2>
        <div className={styles.heritageGrid}>
          {culturalHeritage.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.preservation}>
        <h2>Tarihi Koruma Çalışmaları</h2>
        <div className={styles.preservationContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/manzara2.jpg"
              alt="Tarihi Koruma Çalışmaları"
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.text}>
            <p>
              Köyümüzün tarihi dokusunu korumak için çeşitli çalışmalar
              yürütülmektedir. Eski yapıların restorasyonu, geleneksel el
              sanatlarının yaşatılması ve kültürel mirasın gelecek nesillere
              aktarılması için projeler geliştirilmektedir.
            </p>
            <ul>
              <li>Tarihi yapıların restorasyonu</li>
              <li>Kültürel değerlerin belgelenmesi</li>
              <li>Sözlü tarih çalışmaları</li>
              <li>Geleneksel el sanatlarının yaşatılması</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryContent; 