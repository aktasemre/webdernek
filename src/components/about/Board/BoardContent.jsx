import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import BackButton from '@/components/common/BackButton/BackButton';
import { boardMembers, boardInfo } from '@/data/board.data';
import styles from './BoardContent.module.scss';

const BoardContent = () => {
  return (
    <div className={styles.boardContent}>
      <BackButton />
      <h1>Yönetim Kurulumuz</h1>
      
      <div className={styles.introduction}>
        <p>{boardInfo.introduction}</p>
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
        <p>{boardInfo.termNote}</p>
      </div>
    </div>
  );
};

export default BoardContent; 