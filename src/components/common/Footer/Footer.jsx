import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>İletişim</h3>
            <p>Arslandede Köyü, Bayburt</p>
            <p>Tel: +90 xxx xxx xx xx</p>
            <p>Email: info@arslandededernegi.org</p>
          </div>
          
          <div className={styles.section}>
            <h3>Hızlı Bağlantılar</h3>
            <ul>
              <li><Link href="/about/history">Derneğimizin Tarihçesi</Link></li>
              <li><Link href="/about/board">Yönetim Kurulu</Link></li>
              <li><Link href="/about/village">Köyümüz Hakkında</Link></li>
              <li><Link href="/contact">İletişim</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Sosyal Medya</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Arslandede Köyü Derneği. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 