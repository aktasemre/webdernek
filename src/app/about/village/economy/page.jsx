import { Metadata } from 'next';
import EconomyContent from '@/components/about/Village/Economy/EconomyContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Ekonomik Yapı | Arslandede Köyü',
  description: 'Arslandede köyünün ekonomik yapısı, tarım, hayvancılık ve diğer gelir kaynakları hakkında detaylı bilgiler.',
  keywords: 'Arslandede köyü ekonomi, tarım, hayvancılık, gelir kaynakları',
};

export default function VillageEconomyPage() {
  return (
    <div className={styles.container}>
      <EconomyContent />
    </div>
  );
} 