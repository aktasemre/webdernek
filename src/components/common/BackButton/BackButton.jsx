'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './BackButton.module.scss';

const BackButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className={styles.backButton}
      aria-label="Geri Dön"
    >
      <FaArrowLeft />
      <span>Geri Dön</span>
    </button>
  );
};

export default BackButton; 