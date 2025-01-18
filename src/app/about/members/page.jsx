import MembersContent from '@/components/about/Members/MembersContent';

export const metadata = {
  title: 'Üyelerimiz | Arslandede Köyü Derneği',
  description:
    'Arslandede Köyü Derneği üyeleri, üyelik şartları, avantajları ve başvuru süreci hakkında bilgiler.',
  keywords: ['üyeler', 'dernek üyeliği', 'üyelik şartları', 'üyelik başvurusu'],
};

export default function MembersPage() {
  return (
    <main>
      <MembersContent />
    </main>
  );
}
