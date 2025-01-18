'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.scss';
import iletisimData from '@/data/iletisim.data.json';

const Footer = () => {
  const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    youtube: FaYoutube,
    whatsapp: FaWhatsapp,
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Köy İletişim</h3>
            <p>{iletisimData.address.koy.text}</p>
            <p>Muhtar: {iletisimData.phone.muhtar}</p>
          </div>

          <div className={styles.section}>
            <h3>Dernek İletişim</h3>
            <p>{iletisimData.address.dernek.text}</p>
            <p>Tel: {iletisimData.phone.president}</p>
            <p>Email: {iletisimData.email}</p>
          </div>

          <div className={styles.section}>
            <h3>Hızlı Bağlantılar</h3>
            <ul>
              <li>
                <Link href="/about/history">Derneğimizin Tarihçesi</Link>
              </li>
              <li>
                <Link href="/about/board">Yönetim Kurulu</Link>
              </li>
              <li>
                <Link href="/about/village">Köyümüz Hakkında</Link>
              </li>
              <li>
                <Link href="/contact">İletişim</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Sosyal Medya</h3>
            <div className={styles.socialIcons}>
              {Object.entries(iletisimData.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                    <Icon />
                  </a>
                );
              })}
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
