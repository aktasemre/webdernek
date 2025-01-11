import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import BackButton from '@/components/common/BackButton/BackButton';
import styles from './SupervisoryContent.module.scss';

const supervisoryMembers = [
  {
    name: 'Hasan Kara',
    position: 'Denetleme Kurulu Başkanı',
    image: '/images/manzara1.jpg',
    phone: '+90 555 111 2233',
    email: 'hasan.kara@arslandededernegi.org',
    description: '2023-2025 dönemi Denetleme Kurulu Başkanı'
  },
  {
    name: 'Zeynep Yıldız',
    position: 'Denetleme Kurulu Üyesi',
    image: '/images/manzara2.jpg',
    phone: '+90 555 222 3344',
    email: 'zeynep.yildiz@arslandededernegi.org',
    description: '2023-2025 dönemi Denetleme Kurulu Üyesi'
  },
  {
    name: 'İbrahim Aydın',
    position: 'Denetleme Kurulu Üyesi',
    image: '/images/manzara3.jpg',
    phone: '+90 555 333 4455',
    email: 'ibrahim.aydin@arslandededernegi.org',
    description: '2023-2025 dönemi Denetleme Kurulu Üyesi'
  }
];

const duties = [
  'Derneğin mali durumunun düzenli olarak denetlenmesi',
  'Yönetim kurulu faaliyetlerinin tüzüğe uygunluğunun kontrolü',
  'Dernek kayıtlarının düzenli tutulmasının takibi',
  'Yıllık denetim raporlarının hazırlanması',
  'Genel kurula denetim sonuçlarının sunulması'
];

const SupervisoryContent = () => {
  return (
    <div className={styles.supervisoryContent}>
      <BackButton />
      <h1>Denetleme Kurulumuz</h1>
      
      <div className={styles.introduction}>
        <p>
          2023-2025 dönemi Denetleme Kurulu üyelerimiz, derneğimizin faaliyetlerinin tüzüğe
          uygunluğunu ve mali durumunu denetlemekle görevlidir. Kurulumuz, şeffaflık ve
          hesap verebilirlik ilkeleri doğrultusunda çalışmalarını sürdürmektedir.
        </p>
      </div>

      <div className={styles.duties}>
        <h2>Denetleme Kurulunun Görevleri</h2>
        <ul>
          {duties.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      </div>

      <div className={styles.membersGrid}>
        {supervisoryMembers.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <div className={styles.imageContainer}>
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.memberInfo}>
              <h2>{member.name}</h2>
              <h3>{member.position}</h3>
              <p>{member.description}</p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.icon} />
                  <span>{member.phone}</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.icon} />
                  <span>{member.email}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <h3>Denetim Periyodu</h3>
        <p>
          Denetleme Kurulumuz, dernek faaliyetlerini üç ayda bir denetlemekte ve
          yıllık denetim raporunu genel kurula sunmaktadır.
        </p>
      </div>
    </div>
  );
};

export default SupervisoryContent; 