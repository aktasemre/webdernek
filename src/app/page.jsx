'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import Hero from '@/components/home/Hero/Hero';
import ActionButtons from '@/components/home/ActionButtons/ActionButtons';
import SideMenu from '@/components/common/SideMenu/SideMenu';
import EventCalendar from '@/components/home/EventCalendar/EventCalendar';
import NewsSlider from '@/components/home/NewsSlider/NewsSlider';
import Features from '@/components/home/Features/Features';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import iletisimData from '@/data/iletisim.data.json';

// Örnek etkinlik verileri
const events = [
  {
    id: 1,
    title: 'Dernek Toplantısı',
    date: '2024-01-20',
    time: '14:00',
    location: 'Dernek Merkezi',
    type: 'meeting'
  },
  {
    id: 2,
    title: 'Köy Festivali',
    date: '2024-07-20',
    time: '10:00',
    location: 'Köy Meydanı',
    type: 'festival'
  },
  {
    id: 3,
    title: 'İftar Yemeği',
    date: '2024-03-15',
    time: '18:30',
    location: 'Köy Konağı',
    type: 'social'
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setMounted(true);
    } catch (err) {
      console.error('Error in mounting:', err);
      setError(err.message);
    }
  }, []);

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Bir hata oluştu</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!mounted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Sayfa yükleniyor...</p>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <Hero />
      <ActionButtons />
      
      <div className={styles.contentWrapper}>
        <div className={styles.sideMenuContainer}>
          <SideMenu />
        </div>
        
        <div className={styles.mainContent}>
          {/* News Slider Section */}
          <section className={styles.newsSliderSection}>
            <div className={styles.container}>
              <h2>Son Haberler</h2>
              {mounted && <NewsSlider />}
            </div>
          </section>

          {/* Features Section */}
          {mounted && <Features />}

          {/* Event Calendar Section */}
          <section className={styles.eventCalendarSection}>
            <div className={styles.container}>
              <h2>Yaklaşan Etkinlikler</h2>
              {mounted && <EventCalendar events={events} />}
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
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Meslek Envanteri Section */}
          <section className={styles.professionSurvey}>
            <div className={styles.container}>
              <div className={styles.surveyContent}>
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
        </div>
      </div>
      
      <BottomNav />
    </main>
  );
} 