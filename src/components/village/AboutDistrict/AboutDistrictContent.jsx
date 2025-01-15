import Image from 'next/image';
import styles from './AboutDistrictContent.module.scss';

const AboutDistrictContent = () => {
  return (
    <section className={styles.aboutDistrict}>
      <div className={styles.hero}>
        <div className={styles.backgroundImage}>
          <Image
            src="/images/manzara1.jpg"
            alt="Bayburt Manzarası"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.overlay} />
        </div>
        <h1>Arslandede Köyü</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Köyümüzün Tarihi</h2>
          <p>Arslandede köyü, tarihi çok eskilere dayanan bir Türk yerleşim yeridir. Köyümüz adını, yörede yatan Arslan Dede'den almıştır. Arslan Dede'nin türbesi halen köyümüzde bulunmaktadır.</p>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/kis1.jpg"
              alt="Köy Kış Manzarası"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Coğrafi Konum</h2>
          <p>Köyümüz, Bayburt il merkezine 15 km uzaklıkta, deniz seviyesinden yaklaşık 1600 metre yükseklikte yer almaktadır. Doğusunda Akşar köyü, batısında Gençosman köyü, kuzeyinde Yedigöze köyü ve güneyinde Çayıryolu köyü bulunmaktadır.</p>
        </div>

        <div className={styles.section}>
          <h2>İklim ve Doğa</h2>
          <p>Karasal iklimin hakim olduğu köyümüzde, yazlar sıcak ve kurak, kışlar soğuk ve kar yağışlı geçer. Zengin bitki örtüsü ve temiz havası ile dikkat çeken köyümüz, doğal güzellikleriyle ön plana çıkmaktadır.</p>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/manzara2.jpg"
              alt="Köy Yaz Manzarası"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Ekonomik Yapı</h2>
          <p>Köyümüzün temel geçim kaynağı tarım ve hayvancılıktır. Başlıca tarım ürünleri arasında buğday, arpa ve yem bitkileri yer almaktadır. Son yıllarda organik tarım faaliyetleri de artış göstermiştir.</p>
        </div>

        <div className={styles.section}>
          <h2>Sosyal Yaşam</h2>
          <p>Köyümüzde geleneksel değerler hala önemini korumaktadır. Yardımlaşma ve dayanışma kültürü güçlüdür. Köy konağımız, sosyal etkinliklerin merkezi konumundadır. Yaz aylarında düzenlenen şenlikler ve festivaller, köy halkını bir araya getiren önemli etkinliklerdir.</p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Nüfus</h3>
            <p>Yaklaşık 500 kişi</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Rakım</h3>
            <p>1600 metre</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Mesafe</h3>
            <p>Merkeze 15 km</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Mahalle Sayısı</h3>
            <p>4 Mahalle</p>
          </div>
        </div>

        <div className={styles.districtGallerySection}>
          <h2>Fotoğraf Galerisi</h2>
          <div className={styles.districtGallery}>
            {/* ... gallery items ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDistrictContent; 