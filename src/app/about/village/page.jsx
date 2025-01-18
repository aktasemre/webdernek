import VillageContent from '@/components/about/Village/VillageContent';

export const metadata = {
  title: 'Arslandede Köyü | Bayburt Arslandede Köyü Hakkında Bilgiler',
  description:
    'Bayburt Arslandede Köyü hakkında detaylı bilgiler. Köyün tarihi, coğrafyası, nüfusu, ekonomisi ve kültürel özellikleri hakkında güncel bilgiler.',
  keywords: [
    'Arslandede Köyü Tarihi',
    'Arslandede Köyü Coğrafyası',
    'Arslandede Köyü Nüfusu',
    'Arslandede Köyü Ekonomisi',
    'Bayburt Arslandede',
    'Arslandede Köyü Kültürü',
    'Arslandede Köyü Resimleri',
  ],
  openGraph: {
    title: 'Arslandede Köyü | Bayburt Arslandede Köyü Hakkında Bilgiler',
    description:
      'Bayburt Arslandede Köyü hakkında detaylı bilgiler. Köyün tarihi, coğrafyası, nüfusu, ekonomisi ve kültürel özellikleri.',
    images: [
      {
        url: '/images/arslandede-intro.jpg',
        width: 1200,
        height: 630,
        alt: 'Bayburt Arslandede Köyü Genel Görünüm',
      },
    ],
  },
};

export default function VillagePage() {
  return <VillageContent />;
}
