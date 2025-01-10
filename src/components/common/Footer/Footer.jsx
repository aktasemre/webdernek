import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Köy Derneği</h3>
            <p>Köyümüzün gelişimi ve kalkınması için çalışıyoruz.</p>
          </div>
          
          <div className={styles.section}>
            <h3>Hızlı Linkler</h3>
            <ul>
              <li><Link href="/">Ana Sayfa</Link></li>
              <li><Link href="/projects">Projeler</Link></li>
              <li><Link href="/contact">İletişim</Link></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h3>İletişim</h3>
            <p>Email: info@koydernek.com</p>
            <p>Tel: +90 555 123 4567</p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Köy Derneği. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 