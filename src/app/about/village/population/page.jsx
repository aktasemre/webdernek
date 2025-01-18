import PopulationContent from '@/components/about/Village/Population/PopulationContent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Nüfus ve Yerleşim | Arslandede Köyü',
  description:
    'Arslandede köyünün nüfus yapısı, demografik özellikleri ve yerleşim düzeni hakkında detaylı bilgiler.',
  keywords: 'Arslandede köyü nüfus, yerleşim, demografi, mahalleler, göç',
};

export default function VillagePopulationPage() {
  return (
    <div className={styles.container}>
      <PopulationContent />
    </div>
  );
}
