import styles from './history.module.scss';
import BackButton from '@/components/common/BackButton/BackButton';

export const metadata = {
  title: 'Derneğimizin Tarihçesi | Arslandede Köyü Derneği',
  description:
    'Arslandede Köyü Derneği tarihçesi. Derneğimizin kuruluşu ve gelişimi hakkında bilgiler.',
  keywords: ['dernek tarihçesi', 'kuruluş', 'gelişim', 'başarılar', 'projeler'],
};

const historicalEvents = [
  {
    year: '1992',
    title: 'Derneğin Kuruluşu',
    description:
      '17.07.1992 - Derneğimizin kuruluş tarihi.',
  },
  {
    year: '1994',
    title: 'Kiralık Dükkan',
    description:
      'Esenler Atışalanı Havaalanı mahallesinde kiralık dükkan tutuldu.',
  },
  {
    year: '1995 - 1998',
    title: 'Dernek Başkanı Yaşar ÜSTÜN',
    description:
      'Kiralık dükkanda faaliyetlerimiz devam etti.',
  },
  {
    year: '1999 - 2000',
    title: 'Dernek Başkanı Hacı KURTOĞLU',
    description:
      'Köylülerimizin yardımları ile burası satın alındı. 36.500 Mark ödendi.',
  },
  {
    year: '2001 - 2002',
    title: 'Dernek Başkanı Zeynel ÖKSÜZ',
    description:
      'Zemin kattan bodrum kata, arka taraftan merdiven yapıldı. Bilardo masası alındı.',
  },
  {
    year: '2003 - 2004',
    title: 'Dernek Başkanı Canan KURTOĞLU',
    description:
      'İkinci bilardo masası alındı.',
  },
  {
    year: '2005 - 2006',
    title: 'Dernek Başkanı Yaşar ÜSTÜN',
    description: 'Faaliyetler devam etti.',
  },
  {
    year: '2007 - 2008',
    title: 'Dernek Başkanı Musa ÜSTÜN',
    description:
      'Mesaj sistemi kuruldu. Dernek yerinin tapusu dernek üzerine tescil edildi.',
  },
  {
    year: '2010',
    title: 'Dernek Başkanı Salman YILMAZ',
    description:
      'Dernek yerimizin olduğu binanın kömürlükleri satın alınarak derneğe katıldı.',
  },
  {
    year: '2015',
    title: 'Bodrum Kat Düzenlemeleri',
    description:
      'Bodrum kata WC yapıldı. Zemin katın ahşap oturma yerleri yapıldı. Zemin kata Başkanı Necmettin EMİRALİ. Derneğimizin giriş kapısı değişti. Oturma balkonu yapıldı. Çay ocağının yeri değişti. Perdeler yenilendi.',
  },
  {
    year: '2016',
    title: 'Dernek Başkanı Yaşar ÜSTÜN',
    description:
      'Zemin kata otomatik kepenk yapıldı.',
  },
];

const achievements = [
  {
    title: 'Sosyal Projeler',
    items: ['Burs Programı', 'Ramazan Yardımları', 'Sağlık Destekleri', 'Eğitim Destekleri'],
  },
  {
    title: 'Kültürel Faaliyetler',
    items: ['Köy Şenlikleri', 'Kültür Geceleri', 'Gençlik Buluşmaları', 'Bayram Etkinlikleri'],
  },
  {
    title: 'Altyapı Projeleri',
    items: [
      'Yol Çalışmaları',
      'Çevre Düzenlemeleri',
      'Restorasyon İşleri',
      'Park ve Bahçe Düzenlemeleri',
    ],
  },
];

export default function HistoryPage() {
  return (
    <main className={styles.historyPage}>
      <BackButton />

      <div className={styles.container}>
        <h1 className={styles.title}>Derneğimizin Tarihçesi</h1>

        <section className={styles.introduction}>
          <p>
            1990 yılında kurulan Arslandede Köyü Derneği, köyümüzün kalkınması ve gelişmesi için var
            gücüyle çalışmaktadır. Kuruluşumuzdan bu yana, köyümüzün altyapı, eğitim, sağlık ve
            kültürel alanlardaki ihtiyaçlarını karşılamak için pek çok projeye imza attık.
          </p>
        </section>

        <section className={styles.timeline}>
          <h2>Tarihsel Gelişim</h2>
          <div className={styles.events}>
            {historicalEvents.map((event, index) => (
              <div key={index} className={styles.event}>
                <div className={styles.eventYear}>{event.year}</div>
                <div className={styles.eventContent}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.achievements}>
          <h2>Başarılarımız ve Faaliyetlerimiz</h2>
          <div className={styles.categories}>
            {achievements.map((category, index) => (
              <div key={index} className={styles.category}>
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.conclusion}>
          <p>
            Derneğimiz, köylülerimizin birlik ve dayanışma içinde hareket etmesine, sorunlarımıza
            çözümler üretilmesine öncülük etmeye devam edecektir. Geçmişten aldığımız güçle,
            geleceğe emin adımlarla ilerliyoruz.
          </p>
        </section>
      </div>
    </main>
  );
}
