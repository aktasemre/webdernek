import WritersContent from '@/components/about/Writers/WritersContent';

export const metadata = {
  title: 'Yazarlarımız | Arslandede Köyü Derneği',
  description:
    'Arslandede Köyü Derneği yazarları, yayınları ve kültürel çalışmaları hakkında bilgiler.',
  keywords: ['yazarlar', 'köy yazarları', 'kültürel yayınlar', 'dernek yayınları'],
};

export default function WritersPage() {
  return (
    <main>
      <WritersContent />
    </main>
  );
}
