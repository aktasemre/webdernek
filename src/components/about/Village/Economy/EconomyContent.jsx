import Image from 'next/image';
import BackButton from '@/components/common/BackButton/BackButton';
import styles from './EconomyContent.module.scss';

const economicActivities = [
  {
    title: 'Tarım',
    description: 'Köyümüzde yetiştirilen başlıca tarım ürünleri buğday, arpa ve yem bitkileridir.',
    image: '/images/manzara1.jpg',
  },
  {
    title: 'Hayvancılık',
    description: 'Büyükbaş ve küçükbaş hayvancılık önemli geçim kaynaklarımızdandır.',
    image: '/images/manzara2.jpg',
  },
  {
    title: 'Arıcılık',
    description: 'Son yıllarda gelişen arıcılık faaliyetleri ek gelir kaynağı oluşturmaktadır.',
    image: '/images/manzara3.jpg',
  },
];

const EconomyContent = () => {
  return (
    <div className={styles.economyContent}>
      <BackButton />
      <h1>Ekonomik Yapı</h1>

      <div className={styles.introduction}>
        <p>
          Arslandede köyünün ekonomisi temel olarak tarım ve hayvancılığa dayanmaktadır. Son
          yıllarda modern tarım teknikleri ve çeşitli projelerle ekonomik faaliyetler
          çeşitlendirilmeye çalışılmaktadır.
        </p>
      </div>

      <div className={styles.activitiesGrid}>
        {economicActivities.map((activity, index) => (
          <div key={index} className={styles.activityCard}>
            <div className={styles.imageContainer}>
              <Image
                src={activity.image}
                alt={activity.title}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.content}>
              <h2>{activity.title}</h2>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.statistics}>
        <h2>Ekonomik Göstergeler</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Tarım Arazisi</h3>
            <p>2000 Dönüm</p>
          </div>
          <div className={styles.statCard}>
            <h3>Büyükbaş Hayvan</h3>
            <p>500 Adet</p>
          </div>
          <div className={styles.statCard}>
            <h3>Küçükbaş Hayvan</h3>
            <p>1000 Adet</p>
          </div>
          <div className={styles.statCard}>
            <h3>Arı Kovanı</h3>
            <p>200 Adet</p>
          </div>
        </div>
      </div>

      <div className={styles.projects}>
        <h2>Gelecek Planları</h2>
        <ul>
          <li>Modern sulama sistemlerinin yaygınlaştırılması</li>
          <li>Organik tarım faaliyetlerinin artırılması</li>
          <li>Hayvancılık tesislerinin modernizasyonu</li>
          <li>Tarımsal kooperatif kurulması</li>
        </ul>
      </div>
    </div>
  );
};

export default EconomyContent;
