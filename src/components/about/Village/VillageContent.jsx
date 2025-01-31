import Image from 'next/image';
import Link from 'next/link';
import styles from './VillageContent.module.scss';

const sections = [
  {
    title: 'Köyümüzün Tarihi',
    description:
      'Arslandede köyünün zengin tarihi geçmişi, kültürel mirası ve önemli olayları hakkında detaylı bilgiler.',
    image: '/images/manzara1.jpg',
    link: '/about/village/history',
  },
  {
    title: 'Coğrafi Yapı ve İklim',
    description:
      'Köyümüzün coğrafi konumu, iklim özellikleri, bitki örtüsü ve doğal kaynakları hakkında bilgiler.',
    image: '/images/manzara2.jpg',
    link: '/about/village/geography',
  },
  {
    title: 'Nüfus ve Yerleşim',
    description:
      'Köyümüzün nüfus yapısı, demografik özellikleri ve yerleşim düzeni hakkında istatistiki bilgiler.',
    image: '/images/manzara3.jpg',
    link: '/about/village/population',
  },
  {
    title: 'Ekonomik Yapı',
    description:
      'Köyümüzün ekonomik faaliyetleri, tarım, hayvancılık ve diğer geçim kaynakları hakkında bilgiler.',
    image: '/images/manzara1.jpg',
    link: '/about/village/economy',
  },
  {
    title: 'Eğitim ve Kültür',
    description:
      'Köyümüzdeki eğitim imkanları, kültürel faaliyetler ve sosyal yaşam hakkında detaylı bilgiler.',
    image: '/images/manzara2.jpg',
    link: '/about/village/education',
  },
  {
    title: 'Gezilecek Yerler',
    description:
      'Köyümüzün tarihi, doğal ve kültürel açıdan önemli turistik mekanları hakkında rehber bilgiler.',
    image: '/images/manzara3.jpg',
    link: '/about/village/places',
  },
];

const VillageContent = () => {
  return (
    <div className={styles.villageContent}>
      <div className={styles.header}>
        <h1>Köyümüz Hakkında</h1>
        <p>
          Arslandede köyü, Bayburt ilinin tarihi ve kültürel zenginliklerini barındıran, doğal
          güzellikleri ve misafirperver insanlarıyla öne çıkan bir yerleşim yeridir. Köyümüzün
          geçmişten günümüze uzanan hikayesini, coğrafi özelliklerini, sosyal ve ekonomik yapısını
          bu sayfada bulabilirsiniz.
        </p>
      </div>

      <div className={styles.sections}>
        {sections.map((section, index) => (
          <Link href={section.link} key={index} className={styles.sectionCard}>
            <div className={styles.imageContainer}>
              <Image
                src={section.image}
                alt={section.title}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.content}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <span className={styles.readMore}>Devamını Oku →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.quickInfo}>
        <h2>Hızlı Bilgiler</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Konum</h3>
            <p>Bayburt merkeze 15 km mesafede</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Rakım</h3>
            <p>1650 metre</p>
          </div>
          <div className={styles.infoCard}>
            <h3>İklim</h3>
            <p>Karasal iklim</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Ekonomi</h3>
            <p>Tarım ve hayvancılık</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageContent;
