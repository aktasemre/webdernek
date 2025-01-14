import Image from 'next/image';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
                <a href={`tel:${member.phone}`} className={styles.contactItem}>
                  <FaPhone className={styles.icon} />
                  <span>{member.phone}</span>
                </a>
                <a href={`mailto:${member.email}`} className={styles.contactItem}>
                  <FaEnvelope className={styles.icon} />
                  <span>{member.email}</span>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <FaLinkedin className={styles.icon} />
                  <span>{member.linkedin}</span>
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <FaInstagram className={styles.icon} />
                  <span>{member.instagram}</span>
                </a>
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