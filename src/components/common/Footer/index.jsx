import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';
import { getIletisim } from '@/data';

export default function Footer() {
  const iletisim = getIletisim();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>İletişim</h3>
            <p>{iletisim.address.dernek.text}</p>
            <p>Tel: {iletisim.phone.president}</p>
            <p>Email: {iletisim.email}</p>
          </div>
          
          <div className={styles.section}>
            <h3>Sosyal Medya</h3>
            <div className={styles.social}>
              <a href={iletisim.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href={iletisim.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={iletisim.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Arslandede Köyü Derneği. Tüm hakları saklıdır.</p>
          <Link href="/privacy">Gizlilik Politikası</Link>
        </div>
      </div>
    </footer>
  );
} 