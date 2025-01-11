import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import BackButton from '@/components/common/BackButton/BackButton';
import styles from './BoardContent.module.scss';

const boardMembers = [
  {
    name: 'Ahmet Yılmaz',
    position: 'Yönetim Kurulu Başkanı',
    image: '/images/manzara1.jpg',
    phone: '+90 555 123 4567',
    email: 'ahmet.yilmaz@arslandededernegi.org',
    description: '2023-2025 dönemi Yönetim Kurulu Başkanı'
  },
  {
    name: 'Mehmet Demir',
    position: 'Başkan Yardımcısı',
    image: '/images/manzara2.jpg',
    phone: '+90 555 234 5678',
    email: 'mehmet.demir@arslandededernegi.org',
    description: '2023-2025 dönemi Başkan Yardımcısı'
  },
  {
    name: 'Ayşe Kaya',
    position: 'Genel Sekreter',
    image: '/images/manzara3.jpg',
    phone: '+90 555 345 6789',
    email: 'ayse.kaya@arslandededernegi.org',
    description: '2023-2025 dönemi Genel Sekreter'
  },
  {
    name: 'Ali Çelik',
    position: 'Sayman',
    image: '/images/manzara4.jpg',
    phone: '+90 555 456 7890',
    email: 'ali.celik@arslandededernegi.org',
    description: '2023-2025 dönemi Sayman'
  },
  {
    name: 'Fatma Şahin',
    position: 'Üye',
    image: '/images/manzara5.jpg',
    phone: '+90 555 567 8901',
    email: 'fatma.sahin@arslandededernegi.org',
    description: '2023-2025 dönemi Yönetim Kurulu Üyesi'
  }
];

const BoardContent = () => {
  return (
    <div className={styles.boardContent}>
      <BackButton />
      <h1>Yönetim Kurulumuz</h1>
      
      <div className={styles.introduction}>
        <p>
          2023-2025 dönemi Yönetim Kurulu üyelerimiz, derneğimizin amaçları doğrultusunda
          çalışmalarını sürdürmektedir. Yönetim Kurulumuz, köyümüzün gelişimi ve derneğimizin
          faaliyetleri için özverili bir şekilde görev yapmaktadır.
        </p>
      </div>

      <div className={styles.membersGrid}>
        {boardMembers.map((member, index) => (
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
        <h3>Görev Süresi</h3>
        <p>
          Yönetim Kurulu üyelerimiz 2023-2025 dönemi için seçilmiş olup, görev süreleri
          2025 yılı Genel Kurulu'na kadar devam edecektir.
        </p>
      </div>
    </div>
  );
};

export default BoardContent; 