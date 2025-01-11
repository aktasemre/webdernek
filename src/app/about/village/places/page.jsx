import { Metadata } from 'next';
import PlacesContent from '@/components/about/Village/Places/PlacesContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Gezilecek Yerler | Arslandede Köyü',
  description: 'Arslandede köyünün tarihi, doğal ve kültürel açıdan önemli turistik mekanları hakkında detaylı bilgiler.',
  keywords: 'Arslandede köyü gezilecek yerler, turistik mekanlar, tarihi yerler, doğal güzellikler',
};

export default function VillagePlacesPage() {
  return (
    <div className={styles.container}>
      <PlacesContent />
    </div>
  );
} 