'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <h2>İletişim Bilgileri</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <FaPhone className={styles.icon} />
            <h3>Telefon</h3>
            <p>+90 555 123 4567</p>
          </div>

          <div className={styles.infoCard}>
            <FaEnvelope className={styles.icon} />
            <h3>E-posta</h3>
            <p>arslandededernegi@gmail.com</p>
          </div>

          <div className={styles.infoCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Adres</h3>
            <p>Arslandede Köyü</p>
            <p>Merkez/BAYBURT</p>
          </div>
        </div>

        <div className={styles.surveySection}>
          <h2>Birbirimizi Daha İyi Tanıyalım!</h2>
          <div className={styles.surveyContent}>
            <p>Değerli Köylülerimiz,</p>
            <p>Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği olarak, köyümüzün dayanışmasını güçlendirmek ve birbirimizi daha yakından tanımak amacıyla bir Meslek Envanteri Çalışması başlatıyoruz.</p>
            <p>Köyümüzün farklı mesleklerinden bireyleri bir araya getirmek ve gençlerimize rehberlik sağlamak için sizin de katkılarınızı bekliyoruz.</p>
            <a 
              href="https://forms.gle/apMoxADc2iusKKEP8" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.surveyButton}
            >
              Ankete Katıl
            </a>
            <p className={styles.shareText}>Lütfen bu formu tanıdıklarınızla paylaşıp bize destek olun.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 