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
    year: '1990',
    title: 'Derneğin Kuruluşu',
    description:
      'Arslandede Köyü Derneği, köyümüzün gelişimi ve kalkınması için kuruldu. Kurucu üyelerimizin özverili çalışmalarıyla derneğimizin temelleri atıldı.',
  },
  {
    year: '1995',
    title: 'İlk Büyük Proje',
    description:
      'Köy meydanı düzenleme projesi başarıyla tamamlandı. Bu proje, derneğimizin köy için yapabileceklerinin ilk somut örneği oldu.',
  },
  {
    year: '2000',
    title: 'Eğitim Atılımı',
    description:
      'Köyümüze yeni bir ilkokul binası kazandırıldı. Eğitim alanında yapılan bu yatırım, gençlerimizin geleceği için önemli bir adım oldu.',
  },
  {
    year: '2010',
    title: 'Üye Sayısında Rekor',
    description:
      '500 aktif üye sayısına ulaşıldı. Artan üye sayımızla birlikte derneğimizin etki alanı ve yapabilecekleri de genişledi.',
  },
  {
    year: '2015',
    title: 'Sosyal Sorumluluk',
    description:
      'İhtiyaç sahibi ailelere yönelik düzenli yardım programları başlatıldı. Köyümüzün dayanışma ruhu güçlendi.',
  },
  {
    year: '2020',
    title: 'Dijital Dönüşüm',
    description:
      'Dernek web sitesi yenilendi, sosyal medya hesapları açıldı. Üyelerimizle iletişimimiz güçlendi.',
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
