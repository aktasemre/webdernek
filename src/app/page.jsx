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
import { getEtkinlikler, getHaberler } from '@/data';

export default async function Home() {
  const etkinlikler = await getEtkinlikler();
  const haberler = await getHaberler();

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
              <NewsSlider news={haberler} />
            </div>
          </section>

          {/* Features Section */}
          <Features />

          {/* Event Calendar Section */}
          <section className={styles.eventCalendarSection}>
            <div className={styles.container}>
              <h2>Yaklaşan Etkinlikler</h2>
              <EventCalendar events={etkinlikler} />
            </div>
          </section>

          {/* About Section */}
          <section className={styles.about}>
            <div className={styles.container}>
              <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                  <h2>Hakkımızda</h2>
                  <p>
                    Arslandede Köyü Derneği olarak, köyümüzün gelişimi ve kalkınması için
                    çalışıyoruz. Sosyal ve kültürel faaliyetlerimizle köyümüzün değerlerini
                    yaşatıyor, yeni nesillere aktarıyoruz.
                  </p>
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
                    style={{ objectFit: 'cover' }}
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
                <p>
                  Köyümüzün gelişimine katkıda bulunmak ve üyelerimiz arasındaki iş birliğini
                  artırmak için meslek envanterimize katılın.
                </p>
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
