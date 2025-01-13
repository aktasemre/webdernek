import koyData from '@/data/koy.data.json';
import styles from './page.module.scss';

export default function VillagePage() {
  const { konum } = koyData;

  return (
    <div className={styles.villagePage}>
      <div className={styles.container}>
        <section className={styles.locationSection}>
          <h2>Konum Bilgileri</h2>
          <div className={styles.locationDetails}>
            <div className={styles.mapContainer}>
              <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12158.66!2d40.4736!3d40.2603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE1JzM2LjAiTiA0MMKwMTMnNDguMCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
            
            <div className={styles.locationInfo}>
              <div className={styles.infoItem}>
                <h3>Merkeze Uzaklık</h3>
                <p>{konum.merkez_uzaklik}</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Komşu Yerleşimler</h3>
                <ul>
                  <li><strong>Kuzey:</strong> {konum.komsu_yerlesimler.kuzey.isim}</li>
                  <li><strong>Güney:</strong> {konum.komsu_yerlesimler.guney.isim}</li>
                  <li><strong>Doğu:</strong> {konum.komsu_yerlesimler.dogu.isim}</li>
                  <li><strong>Batı:</strong> {konum.komsu_yerlesimler.bati.isim}</li>
                </ul>
              </div>

              <div className={styles.infoItem}>
                <h3>Koordinatlar</h3>
                <p>
                  <a href={konum.koordinatlar.maps_link} target="_blank" rel="noopener noreferrer">
                    {konum.koordinatlar.lat}°N, {konum.koordinatlar.long}°E
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 