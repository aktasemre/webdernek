import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaHandHoldingHeart, FaLandmark, FaNewspaper } from 'react-icons/fa';
import styles from './page.module.scss';
import Hero from '@/components/common/Hero/Hero';
import SideMenu from '@/components/common/SideMenu/SideMenu';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      
      <div className={styles.contentWrapper}>
        <div className={styles.sideMenuContainer}>
          <SideMenu />
        </div>
        
        <div className={styles.mainContent}>
          {/* Features Section */}
          <section className={styles.features}>
            <div className={styles.container}>
              <h2>Derneğimizin Çalışmaları</h2>
              <div className={styles.featureGrid}>
                <Link href="/about/members" className={styles.featureCard}>
                  <FaUsers className={styles.icon} />
                  <h3>Üyelerimiz</h3>
                  <p>Güçlü üye ağımız ile birlikte çalışıyoruz</p>
                </Link>
                <Link href="/donate" className={styles.featureCard}>
                  <FaHandHoldingHeart className={styles.icon} />
                  <h3>Sosyal Yardım</h3>
                  <p>İhtiyaç sahiplerine destek oluyoruz</p>
                </Link>
                <Link href="/about/village" className={styles.featureCard}>
                  <FaLandmark className={styles.icon} />
                  <h3>Kültürel Miras</h3>
                  <p>Köyümüzün zengin tarihini ve kültürünü yaşatıyoruz</p>
                </Link>
                <Link href="/news" className={styles.featureCard}>
                  <FaNewspaper className={styles.icon} />
                  <h3>Haberler</h3>
                  <p>En güncel dernek ve köy haberlerimiz</p>
                </Link>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className={styles.about}>
            <div className={styles.container}>
              <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                  <h2>Hakkımızda</h2>
                  <p>Arslandede Köyü Derneği olarak, köyümüzün gelişimi ve kalkınması için çalışıyoruz. Sosyal ve kültürel faaliyetlerimizle köyümüzün değerlerini yaşatıyor, yeni nesillere aktarıyoruz.</p>
                  <Link href="/about/history" className={styles.aboutButton}>
                    Daha Fazla Bilgi
                  </Link>
                </div>
                <div className={styles.aboutImage}>
                  <Image
                    src="/images/village.jpg"
                    alt="Arslandede Köyü"
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className={styles.cta}>
            <div className={styles.container}>
              <h2>Derneğimize Katılın</h2>
              <p>Siz de köyümüzün gelişimine katkıda bulunmak ister misiniz?</p>
              <Link href="/contact" className={styles.ctaButton}>
                Bize Ulaşın
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 