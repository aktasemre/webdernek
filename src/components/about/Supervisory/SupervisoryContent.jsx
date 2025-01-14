import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import BackButton from '@/components/common/BackButton/BackButton';
import { supervisoryMembers, supervisoryDuties, supervisoryInfo } from '@/data/board.data';
import styles from './SupervisoryContent.module.scss';

const SupervisoryContent = () => {
  return (
    <div className={styles.supervisoryContent}>
      <BackButton />
      <h1>Denetleme Kurulumuz</h1>
      
      <div className={styles.introduction}>
        <p>{supervisoryInfo.introduction}</p>
      </div>

      <div className={styles.duties}>
        <h2>Denetleme Kurulunun Görevleri</h2>
        <ul>
          {supervisoryDuties.map((duty, index) => (
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
        <p>{supervisoryInfo.auditPeriod}</p>
      </div>
    </div>
  );
};

export default SupervisoryContent; 