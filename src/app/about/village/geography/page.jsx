import { Metadata } from 'next';
import GeographyContent from '@/components/about/Village/Geography/GeographyContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Coğrafi Yapı ve İklim | Arslandede Köyü',
  description: 'Arslandede köyünün coğrafi konumu, iklim özellikleri, bitki örtüsü ve doğal kaynakları hakkında detaylı bilgiler.',
  keywords: 'Arslandede köyü coğrafya, iklim, bitki örtüsü, doğal kaynaklar, Bayburt',
};

export default function VillageGeographyPage() {
  return (
    <div className={styles.container}>
      <GeographyContent />
    </div>
  );
} 