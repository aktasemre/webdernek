import Image from 'next/image';
import { FaBook, FaNewspaper, FaPen } from 'react-icons/fa';
import styles from './WritersContent.module.scss';

const writers = [
  {
    name: 'Ahmet Yılmaz',
    image: '/images/manzara1.jpg',
    title: 'Köy Tarihçisi',
    description: 'Köyümüzün tarihini ve kültürel değerlerini araştıran ve belgeleyen yazarımız.',
    works: [
      'Arslandede Köyü Tarihi (2020)',
      'Köyümüzün Unutulan Değerleri (2021)',
      "Arslandede'den Hikayeler (2022)",
    ],
    specialization: 'Yerel Tarih ve Kültür',
  },
  {
    name: 'Fatma Demir',
    image: '/images/manzara2.jpg',
    title: 'Kültür Yazarı',
    description: 'Köyümüzün geleneklerini ve folklorunu kaleme alan değerli yazarımız.',
    works: [
      'Arslandede Düğün Gelenekleri (2019)',
      'Köy Mutfağımızdan Lezzetler (2021)',
      'Yöresel El Sanatlarımız (2022)',
    ],
    specialization: 'Folklor ve Gelenekler',
  },
  {
    name: 'Mehmet Kaya',
    image: '/images/manzara3.jpg',
    title: 'Dergi Editörü',
    description: 'Derneğimizin üç aylık dergisinin editörlüğünü yapan yazarımız.',
    works: [
      'Arslandede Dergisi (2020-günümüz)',
      'Köy Bülteni (2019-2020)',
      'Dijital Köy Arşivi Projesi (2021)',
    ],
    specialization: 'Dergi Editörlüğü ve Dijital Medya',
  },
];

const categories = [
  {
    icon: <FaBook />,
    title: 'Kitaplar',
    count: 12,
    description: 'Yazarlarımız tarafından yayınlanan kitaplar',
  },
  {
    icon: <FaNewspaper />,
    title: 'Dergiler',
    count: 48,
    description: 'Periyodik olarak yayınlanan dergilerimiz',
  },
  {
    icon: <FaPen />,
    title: 'Makaleler',
    count: 156,
    description: 'Çeşitli platformlarda yayınlanan makaleler',
  },
];

export default function WritersContent() {
  return (
    <div className={styles.writersContent}>
      <h1>Yazarlarımız</h1>

      <div className={styles.introduction}>
        <p>
          Köyümüzün tarihini, kültürünü ve değerlerini gelecek nesillere aktarmak için çalışan
          değerli yazarlarımızı tanıyın.
        </p>
      </div>

      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.icon}>{category.icon}</div>
            <h2>{category.title}</h2>
            <div className={styles.count}>{category.count}</div>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.writersGrid}>
        {writers.map((writer, index) => (
          <div key={index} className={styles.writerCard}>
            <div className={styles.imageContainer}>
              <Image
                src={writer.image}
                alt={writer.name}
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.writerInfo}>
              <h2>{writer.name}</h2>
              <h3>{writer.title}</h3>
              <p className={styles.description}>{writer.description}</p>
              <div className={styles.specialization}>
                <strong>Uzmanlık:</strong> {writer.specialization}
              </div>
              <div className={styles.works}>
                <h4>Eserleri:</h4>
                <ul>
                  {writer.works.map((work, workIndex) => (
                    <li key={workIndex}>{work}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.publications}>
        <h2>Yayın Politikamız</h2>
        <p>
          Derneğimiz, köyümüzün kültürel mirasını korumak ve gelecek nesillere aktarmak amacıyla
          yazarlarımızın çalışmalarını desteklemektedir. Yayınlarımızda bilimsel doğruluk,
          tarafsızlık ve kültürel değerlere saygı ilkelerini gözetmekteyiz.
        </p>
      </div>
    </div>
  );
}
