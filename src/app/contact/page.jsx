import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaClipboardList,
} from 'react-icons/fa';
import MapButtons from '@/components/common/MapButtons/MapButtons';
import iletisimData from '@/data/iletisim.data.json';
import styles from './page.module.scss';

export const metadata = {
  title: 'İletişim | Arslandede Köyü',
  description: 'Arslandede Köyü Derneği iletişim bilgileri',
  keywords: ['iletişim', 'adres', 'telefon', 'e-posta', 'sosyal medya'],
};

export default function ContactPage() {
  const { phone, email, address, social, forms } = iletisimData;

  return (
    <main className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>İletişim</h1>
          <p>
            Derneğimiz ile ilgili her konuda bizimle iletişime geçebilirsiniz. Size en kısa sürede
            dönüş yapacağız.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            {/* İletişim Kartları */}
            <div className={styles.infoCards}>
              {/* Telefon */}
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FaPhone className={styles.icon} />
                </div>
                <h2>Telefon</h2>
                <div className={styles.details}>
                  <a href={`tel:${phone.president}`}>
                    <span>Dernek Başkanı:</span>
                    <span>{phone.president}</span>
                  </a>
                  <a href={`tel:${phone.muhtar}`}>
                    <span>Köy Muhtarı:</span>
                    <span>{phone.muhtar}</span>
                  </a>
                </div>
              </div>

              {/* E-posta */}
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FaEnvelope className={styles.icon} />
                </div>
                <h2>E-posta</h2>
                <div className={styles.details}>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FaWhatsapp className={styles.icon} />
                </div>
                <h2>WhatsApp</h2>
                <div className={styles.details}>
                  <a href={social.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp üzerinden mesaj gönderin
                  </a>
                </div>
              </div>
            </div>

            {/* Adres Kartları */}
            <div className={styles.addressCards}>
              {/* Köy Adresi */}
              <div className={styles.addressCard}>
                <h2>
                  <FaMapMarkerAlt className={styles.icon} />
                  {address.koy.title}
                </h2>
                <p>{address.koy.text}</p>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.371234567891!2d40.2873371!3d40.2873371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5f8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sArslandede%20K%C3%B6y%C3%BC!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <MapButtons address={address.koy.text} />
              </div>

              {/* Dernek Adresi */}
              <div className={styles.addressCard}>
                <h2>
                  <FaMapMarkerAlt className={styles.icon} />
                  {address.dernek.title}
                </h2>
                <p>{address.dernek.text}</p>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0419037152685!2d28.8863889!3d41.0419444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4e6f6e3e747%3A0x3f8f3c4cd394d833!2zS2lyYXpsxLEgTWVzY2l0LCBFc2VubGVyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <MapButtons address={address.dernek.text} />
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className={styles.socialSection}>
            <h2>Sosyal Medya Hesaplarımız</h2>
            <div className={styles.socialGrid}>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facebook}
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.twitter}
              >
                <FaTwitter />
                <span>Twitter</span>
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagram}
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.youtube}
              >
                <FaYoutube />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Meslek Envanteri */}
          <div className={styles.surveySection}>
            <div className={styles.surveyContent}>
              <div className={styles.surveyIcon}>
                <FaClipboardList />
              </div>
              <h2>Meslek Envanteri</h2>
              <p>
                Köyümüzün meslek haritasını çıkarmak ve gençlerimize yol göstermek amacıyla
                başlattığımız çalışmaya katılımınızı bekliyoruz.
              </p>
              <a
                href={forms.professionInventory}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.surveyButton}
              >
                Formu Doldur
              </a>
              <p className={styles.surveyNote}>Form doldurmak yaklaşık 5 dakika sürmektedir.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
