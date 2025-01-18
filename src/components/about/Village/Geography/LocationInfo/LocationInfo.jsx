import Image from 'next/image';
import styles from './LocationInfo.module.scss';
import { locationData } from '@/data/location.data';

const LocationInfo = () => {
  return (
    <div className={styles.location}>
      <h2>Coğrafi Konum</h2>
      <div className={styles.locationContent}>
        <div className={styles.text}>
          <h3>Koordinatlar</h3>
          <p>
            {locationData.coordinates.latitude}N, {locationData.coordinates.longitude}E
          </p>

          <h3>Komşu Yerleşimler</h3>
          <ul>
            {locationData.neighbors.map((neighbor, index) => (
              <li key={index}>
                {neighbor.direction}: {neighbor.name} ({neighbor.distance})
              </li>
            ))}
          </ul>

          <h3>Ulaşım</h3>
          <p>{locationData.transportation.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/manzara2.jpg"
            alt="Arslandede Köyü Konumu"
            width={600}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
