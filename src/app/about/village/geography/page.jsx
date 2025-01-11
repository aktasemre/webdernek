import GeographyContent from '@/components/about/Village/Geography/GeographyContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Coğrafi Yapı | Arslandede Köyü',
  description: 'Arslandede köyünün coğrafi konumu, iklim özellikleri, bitki örtüsü ve doğal kaynakları hakkında bilgiler.',
  keywords: 'Arslandede köyü coğrafya, iklim, bitki örtüsü, doğal kaynaklar',
};

export default function VillageGeographyPage() {
  return (
    <div className={styles.container}>
      <GeographyContent />
    </div>
  );
} 