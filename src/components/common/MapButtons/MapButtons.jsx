'use client';

import { FaMapMarkedAlt, FaDirections } from 'react-icons/fa';
import styles from './MapButtons.module.scss';

const MapButtons = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);
  
  const handleOpenMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleGetDirections = () => {
    // Mobil cihazlarda navigasyon uygulamasını açar
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
    }
  };

  return (
    <div className={styles.mapButtons}>
      <button 
        onClick={handleOpenMaps}
        className={styles.mapButton}
        aria-label="Google Haritalar'da Aç"
      >
        <FaMapMarkedAlt />
        <span>Haritada Göster</span>
      </button>
      <button 
        onClick={handleGetDirections}
        className={styles.mapButton}
        aria-label="Yol Tarifi Al"
      >
        <FaDirections />
        <span>Yol Tarifi Al</span>
      </button>
    </div>
  );
};

export default MapButtons; 