import Image from 'next/image';
import styles from './VegetationInfo.module.scss';
import { vegetationData } from '@/data/vegetation.data';

const VegetationInfo = () => {
  return (
    <div className={styles.vegetation}>
      <h2>Bitki Örtüsü</h2>
      <div className={styles.vegetationContent}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/manzara3.jpg"
            alt="Arslandede Köyü Bitki Örtüsü"
            width="auto"
            height="auto"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.types}>
          {vegetationData.types.map((type, index) => (
            <div key={index} className={styles.typeCard}>
              <h3>{type.type}</h3>
              <ul>
                {type.species.map((species, i) => (
                  <li key={i}>{species}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VegetationInfo; 