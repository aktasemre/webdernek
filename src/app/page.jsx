'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaHandHoldingHeart, FaLandmark, FaNewspaper, FaClipboardList } from 'react-icons/fa';
import styles from './page.module.scss';
import Hero from '@/components/home/Hero/Hero';
import SideMenu from '@/components/common/SideMenu/SideMenu';
import iletisimData from '@/data/iletisim.data.json';

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
                    src="/images/manzara3.jpg"
                    alt="Arslandede Köyü"
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Meslek Envanteri Section */}
          <section className={styles.professionSurvey}>
            <div className={styles.container}>
              <div className={styles.surveyContent}>
                <FaClipboardList className={styles.surveyIcon} />
                <h2>Meslek Envanteri</h2>
                <p>Köyümüzün gelişimine katkıda bulunmak ve üyelerimiz arasındaki iş birliğini artırmak için meslek envanterimize katılın.</p>
                <a 
                  href={iletisimData.forms.professionInventory} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.surveyButton}
                >
                  Formu Doldurun
                </a>
              </div>
            </div>
          </section>

          <div className={styles.imageContainer}>
            <Image
              src="/images/cami1.jpg"
              alt="Arslandede Köyü Camii"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
} 