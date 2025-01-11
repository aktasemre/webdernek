import Image from 'next/image';
import styles from './FoundersContent.module.scss';

const founders = [
  {
    name: 'Mehmet Yılmaz',
    title: 'Kurucu Başkan',
    image: '/images/manzara1.jpg',
    description: 'Derneğimizin kuruluşunda öncü rol oynayan değerli büyüğümüz.',
    contribution: 'Derneğin kuruluş sürecini başlatan ve ilk tüzüğün hazırlanmasında önemli katkıları bulunan kurucu başkanımız.',
    period: '1995-2000'
  },
  {
    name: 'Ali Kaya',
    title: 'Kurucu Üye',
    image: '/images/manzara2.jpg',
    description: 'Derneğimizin temellerinin atılmasında büyük emeği geçen değerli üyemiz.',
    contribution: 'Derneğin mali yapısının oluşturulması ve ilk faaliyetlerin planlanmasında önemli rol oynamıştır.',
    period: '1995-1998'
  },
  {
    name: 'Ayşe Demir',
    title: 'Kurucu Üye',
    image: '/images/manzara3.jpg',
    description: 'Derneğimizin sosyal faaliyetlerinin temelini atan değerli üyemiz.',
    contribution: 'Köy kadınlarının dernek faaliyetlerine katılımını sağlamada öncü rol üstlenmiştir.',
    period: '1995-1997'
  }
];

const milestones = [
  {
    year: '1995',
    title: 'Derneğin Kuruluşu',
    description: 'Arslandede Köyü Derneği resmi olarak kuruldu.'
  },
  {
    year: '1996',
    title: 'İlk Genel Kurul',
    description: 'Derneğin ilk genel kurulu yapıldı ve yönetim organları seçildi.'
  },
  {
    year: '1997',
    title: 'İlk Sosyal Faaliyet',
    description: 'Köy çocukları için eğitim bursu programı başlatıldı.'
  },
  {
    year: '1998',
    title: 'Dernek Merkezi',
    description: 'Derneğin ilk resmi merkezi açıldı.'
  }
];

const FoundersContent = () => {
  return (
    <div className={styles.foundersContent}>
      <h1>Kurucularımız</h1>
      
      <div className={styles.introduction}>
        <p>
          1995 yılında bir araya gelerek Arslandede Köyü Derneği'ni kuran değerli büyüklerimiz,
          köyümüzün gelişimi ve dayanışması için önemli bir adım atmışlardır. Kendilerine
          minnettarız.
        </p>
      </div>

      <div className={styles.foundersGrid}>
        {founders.map((founder, index) => (
          <div key={index} className={styles.founderCard}>
            <div className={styles.imageContainer}>
              <Image
                src={founder.image}
                alt={founder.name}
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.founderInfo}>
              <h2>{founder.name}</h2>
              <h3>{founder.title}</h3>
              <p className={styles.description}>{founder.description}</p>
              <p className={styles.contribution}>{founder.contribution}</p>
              <p className={styles.period}>Görev Dönemi: {founder.period}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.timeline}>
        <h2>Kuruluş Süreci</h2>
        <div className={styles.milestones}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.milestone}>
              <div className={styles.year}>{milestone.year}</div>
              <div className={styles.content}>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.tribute}>
        <h2>Saygı ve Minnetle</h2>
        <p>
          Derneğimizin kuruluşunda emeği geçen, bugün aramızda olmayan değerli büyüklerimizi
          rahmet ve minnetle anıyoruz. Onların açtığı yolda, köyümüz için çalışmaya devam
          ediyoruz.
        </p>
      </div>
    </div>
  );
};

export default FoundersContent; 