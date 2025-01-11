import Image from 'next/image';
import styles from './EducationContent.module.scss';

const educationStats = {
  facilities: {
    school: {
      name: 'Arslandede İlkokulu',
      type: 'İlköğretim Okulu',
      capacity: 120,
      classrooms: 8,
      staff: 12,
      features: [
        'Modern derslikler',
        'Bilgisayar laboratuvarı',
        'Spor salonu',
        'Kütüphane',
        'Yemekhane'
      ],
      image: '/images/manzara1.jpg'
    }
  },
  students: {
    total: 85,
    distribution: [
      { level: 'Anaokulu', count: 15 },
      { level: '1. Sınıf', count: 12 },
      { level: '2. Sınıf', count: 14 },
      { level: '3. Sınıf', count: 11 },
      { level: '4. Sınıf', count: 13 },
      { level: '5. Sınıf', count: 10 },
      { level: '6. Sınıf', count: 10 }
    ]
  },
  achievements: [
    'İlçe geneli başarı sıralamasında ilk 3\'te',
    'Spor müsabakalarında çeşitli dereceler',
    'Bilim fuarlarında ödüller',
    'Çevre projeleri başarıları'
  ]
};

const culturalActivities = {
  annual: [
    {
      name: 'Köy Şenlikleri',
      date: 'Her yıl Temmuz ayı',
      description: 'Geleneksel yemekler, halk oyunları ve çeşitli etkinliklerle köy şenlikleri düzenlenir.',
      image: '/images/manzara2.jpg'
    },
    {
      name: 'Bahar Festivali',
      date: 'Her yıl Mayıs ayı',
      description: 'Baharın gelişini kutlamak için düzenlenen festival, çeşitli etkinlikler içerir.',
      image: '/images/manzara3.jpg'
    }
  ],
  traditions: [
    {
      name: 'Düğün Gelenekleri',
      description: 'Üç gün süren geleneksel düğünler, zengin folklor öğeleriyle doludur.',
      elements: [
        'Kına gecesi',
        'Gelin alma',
        'Yöresel oyunlar',
        'Geleneksel yemekler'
      ]
    },
    {
      name: 'El Sanatları',
      description: 'Nesilden nesile aktarılan el sanatları geleneği yaşatılmaktadır.',
      elements: [
        'Kilim dokuma',
        'Ahşap işçiliği',
        'Bakır işlemeciliği',
        'Nakış işleme'
      ]
    }
  ]
};

const socialFacilities = [
  {
    name: 'Köy Konağı',
    description: 'Sosyal etkinlikler ve toplantılar için kullanılan modern tesis',
    capacity: 200,
    features: [
      'Toplantı salonu',
      'Modern mutfak',
      'Etkinlik alanı',
      'Misafir odaları'
    ]
  },
  {
    name: 'Kütüphane',
    description: 'Zengin kitap koleksiyonu ve internet erişimi olan modern kütüphane',
    capacity: 50,
    features: [
      'Geniş kitap koleksiyonu',
      'İnternet erişimi',
      'Çalışma alanları',
      'Çocuk bölümü'
    ]
  }
];

const EducationContent = () => {
  return (
    <div className={styles.educationContent}>
      <h1>Eğitim ve Kültür</h1>
      
      <div className={styles.introduction}>
        <p>
          Arslandede köyü, eğitime verdiği önem ve zengin kültürel değerleriyle
          öne çıkan bir yerleşim yeridir. Modern eğitim imkanları ve geleneksel
          kültürel değerlerin bir arada yaşatıldığı köyümüz, gelecek nesillere
          güçlü bir miras bırakmayı hedeflemektedir.
        </p>
      </div>

      <div className={styles.education}>
        <h2>Eğitim İmkanları</h2>
        <div className={styles.school}>
          <div className={styles.imageContainer}>
            <Image
              src={educationStats.facilities.school.image}
              alt={educationStats.facilities.school.name}
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.schoolInfo}>
            <h3>{educationStats.facilities.school.name}</h3>
            <div className={styles.details}>
              <div className={styles.stat}>
                <span>Kapasite:</span> {educationStats.facilities.school.capacity} öğrenci
              </div>
              <div className={styles.stat}>
                <span>Derslik:</span> {educationStats.facilities.school.classrooms} adet
              </div>
              <div className={styles.stat}>
                <span>Personel:</span> {educationStats.facilities.school.staff} kişi
              </div>
            </div>
            <div className={styles.features}>
              <h4>Okulumuzun Özellikleri</h4>
              <ul>
                {educationStats.facilities.school.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.students}>
          <h3>Öğrenci Dağılımı</h3>
          <div className={styles.distribution}>
            {educationStats.students.distribution.map((level, index) => (
              <div key={index} className={styles.level}>
                <div className={styles.label}>{level.level}</div>
                <div className={styles.count}>{level.count} öğrenci</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.achievements}>
          <h3>Başarılarımız</h3>
          <ul>
            {educationStats.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.culture}>
        <h2>Kültürel Yaşam</h2>
        <div className={styles.activities}>
          {culturalActivities.annual.map((activity, index) => (
            <div key={index} className={styles.activityCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={activity.image}
                  alt={activity.name}
                  width={400}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.content}>
                <h3>{activity.name}</h3>
                <div className={styles.date}>{activity.date}</div>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.traditions}>
          <h3>Geleneklerimiz</h3>
          <div className={styles.traditionGrid}>
            {culturalActivities.traditions.map((tradition, index) => (
              <div key={index} className={styles.traditionCard}>
                <h4>{tradition.name}</h4>
                <p>{tradition.description}</p>
                <ul>
                  {tradition.elements.map((element, i) => (
                    <li key={i}>{element}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.facilities}>
        <h2>Sosyal Tesisler</h2>
        <div className={styles.facilityGrid}>
          {socialFacilities.map((facility, index) => (
            <div key={index} className={styles.facilityCard}>
              <h3>{facility.name}</h3>
              <p>{facility.description}</p>
              <div className={styles.capacity}>
                Kapasite: {facility.capacity} kişi
              </div>
              <div className={styles.features}>
                <h4>Özellikler</h4>
                <ul>
                  {facility.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationContent; 