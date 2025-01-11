import VillageContent from '@/components/about/Village/VillageContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Köyümüz Hakkında | Arslandede Köyü',
  description: 'Arslandede köyünün tarihi, coğrafi yapısı, nüfusu, ekonomisi, eğitim ve kültür hayatı hakkında detaylı bilgiler.',
  keywords: 'Arslandede köyü, Bayburt, köy tarihi, coğrafi yapı, nüfus, ekonomi, eğitim, kültür',
};

export default function VillagePage() {
  return (
    <div className={styles.container}>
      <VillageContent />
    </div>
  );
} 